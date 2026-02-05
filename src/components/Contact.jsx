import Card from "./Card";

export default function Contact({ email, links }) {
  return (
    <>
      <div className="grid2">
        <Card
          title="Email"
          sub={email}
          meta="Click the button below to reach me."
        />
        <Card title="Links" sub="GitHub + LinkedIn" meta="Open my profiles." />
      </div>

      <div
        className="actions"
        style={{ justifyContent: "flex-start", marginTop: 12 }}
      >
        <a className="btn btnPrimary" href={`mailto:${email}`}>
          Email Me
        </a>
        <a
          className="btn btnGhost"
          href={links.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn btnGhost"
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}
