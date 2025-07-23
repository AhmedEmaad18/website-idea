import { FormEvent, useState, useEffect } from "react";
import IdeaForm from "./IdeaForm";
import SectionList from "./SectionList";
import ErrorAlert from "./ErrorAlert";

type Section = {
  _id: string;
  name: string;
  idea: string;
};

export default function Home() {
  const [idea, setIdea] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) setError("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idea]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const trimmedIdea = idea.trim();
    if (!trimmedIdea) {
      setError("Please enter a valid website idea.");
      return;
    }

    setLoading(true);
    setError("");
    setSections([]);

    try {
      const resPost = await fetch("http://localhost:3000/sections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea: trimmedIdea }),
      });

      if (!resPost.ok) throw new Error("Failed to create sections");

      const resGet = await fetch("http://localhost:3000/sections");
      if (!resGet.ok) throw new Error("Failed to fetch sections");

      const data = await resGet.json();

      if (!data.sections || data.sections.length === 0) {
        setError("No sections were generated for this idea. Try something else!");
      } else {
        setSections(data.sections);
      }
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="container py-5"
      style={{ maxWidth: "700px", minHeight: "100vh" }}
      aria-live="polite"
    >
      <h1
  className="mb-5 text-center display-4 fw-bold animate__animated animate__fadeInDown"
  style={{
    background: "linear-gradient(to right, #00c9ff, #92fe9d)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  🚀 Website Idea Generator
</h1>

      <IdeaForm idea={idea} setIdea={setIdea} onSubmit={handleSubmit} loading={loading} />

      {error && <ErrorAlert message={error} />}

      {sections.length > 0 && <SectionList sections={sections} />}

      {!loading && sections.length === 0 && !error && (
        <p className="text-center text-muted fst-italic mt-4">
          Enter a website idea to generate sections.
        </p>
      )}
    </main>
  );
}
