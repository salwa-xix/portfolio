export default function Skills({ skills }) {
  return (
    <div className="skillsGrid">
      {skills.map((s) => (
        <div className="skillPill" key={s.name}>
          <span>{s.name}</span>
          <span className="skillTag">{s.tag}</span>
        </div>
      ))}
    </div>
  );
}
