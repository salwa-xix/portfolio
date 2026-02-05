import Card from "./Card";

export default function Projects({ projects }) {
  return (
    <div className="grid2">
      {projects.map((p) => (
        <Card key={p.title} title={p.title} sub={p.sub} meta={p.meta} />
      ))}
    </div>
  );
}
