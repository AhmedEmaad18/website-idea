type Section = {
  _id: string;
  name: string;
  idea: string;
};

type Props = {
  section: Section;
  groupMark: string;
};

const groupStyles: Record<
  string,
  { bg: string; icon: string; labelColor: string }
> = {
  A: {
    bg: "linear-gradient(135deg, #ff7e5f, #feb47b)", 
    icon: "💡",
    labelColor: "#ff7e5f",
  },
  B: {
    bg: "linear-gradient(135deg, #6a11cb, #2575fc)", 
    icon: "🔥",
    labelColor: "#6a11cb",
  },
  C: {
    bg: "linear-gradient(135deg, #43cea2, #185a9d)", 
    icon: "🚀",
    labelColor: "#43cea2",
  },
  D: {
    bg: "linear-gradient(135deg, #ff4e50, #f9d423)", 
    icon: "⚡️",
    labelColor: "#ff4e50",
  },
};

export default function SectionItem({ section, groupMark }: Props) {
  const style = groupStyles[groupMark] || groupStyles.A;

  return (
    <div
      className="section-item d-flex flex-column flex-md-row align-items-start gap-3 p-3 rounded shadow-sm"
      style={{
        background: "#fff",
        borderLeft: `6px solid ${style.labelColor}`,
      }}
      tabIndex={0}
      aria-label={`Group ${groupMark}: ${section.name}`}
    >
      <div
        className="rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: "42px",
          height: "42px",
          background: style.bg,
          color: "#fff",
          fontWeight: 600,
          fontSize: "1.1rem",
          flexShrink: 0,
        }}
        title={`Group ${groupMark}`}
      >
        {style.icon}
      </div>

      <div>
        <h3 className="h5 fw-semibold mb-1" style={{ color: style.labelColor }}>
          {section.name}
        </h3>
        <p className="mb-0 text-muted">{section.idea}</p>
      </div>
    </div>
  );
}
