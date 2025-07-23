import SectionItem from "./SectionItem";

type Section = {
  _id: string;
  name: string;
  idea: string;
};

type SectionListProps = {
  sections: Section[];
};

export default function SectionList({ sections }: SectionListProps) {
  const getGroupMark = (index: number): string => {
    const groupIndex = Math.floor(index / 3);
    return String.fromCharCode(65 + groupIndex); 
  };

  return (
    <section
      className="mt-5 p-4 shadow rounded animate__animated animate__fadeIn"
      style={{
        background: "#fdfdfd",
        border: "1px solid #eaeaea",
      }}
      aria-live="polite"
      aria-relevant="additions"
    >
      <h2 className="mb-4 text-center fw-bold" style={{ color: "#444" }}>
        🔍 Preview Generated Sections
      </h2>

      <ul className="list-unstyled">
        {sections.map((section, index) => (
          <li key={section._id} className="mb-3">
            <SectionItem
              section={section}
              groupMark={getGroupMark(index)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
