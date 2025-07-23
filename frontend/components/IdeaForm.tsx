import { FormEvent } from "react";

type IdeaFormProps = {
  idea: string;
  setIdea: (idea: string) => void;
  loading: boolean;
  onSubmit: (e: FormEvent) => void;
};

export default function IdeaForm({
  idea,
  setIdea,
  loading,
  onSubmit,
}: IdeaFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-5 animate__animated animate__fadeInDown"
      noValidate
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          background: "#fff",
          padding: "0.75rem 1rem",
          borderRadius: "999px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          disabled={loading}
          placeholder="💡 Enter your website idea..."
          aria-label="Website idea input"
          className="form-input"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "1rem",
            fontWeight: 500,
            background: "transparent",
            padding: "0.5rem",
          }}
          required
          autoComplete="off"
          spellCheck={false}
          maxLength={100}
          pattern=".*\\S.*"
          title="Please enter a valid idea."
        />

        <button
          type="submit"
          disabled={loading || !idea.trim()}
          style={{
            border: "none",
            borderRadius: "999px",
            padding: "0.5rem 1.25rem",
            fontWeight: 600,
            fontSize: "0.95rem",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "#fff",
            minWidth: "160px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
            cursor: loading || !idea.trim() ? "not-allowed" : "pointer",
          }}
          aria-busy={loading}
          aria-live="polite"
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              />
              Generating...
            </>
          ) : (
            "Generate Sections"
          )}
        </button>
      </div>
    </form>
  );
}
