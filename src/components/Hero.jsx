export default function Hero({ data }) {
  return (
    <div className="hero" id="home">
      <div className="avatarWrap">
        {/* <img className="photo" src="/me.jpg" alt="profile" /> */}
        <div className="avatar">{data.name?.charAt(0)}</div>
      </div>

      <h1 className="heroName">{data.name}</h1>
      <div className="heroRole">{data.role}</div>
      <div className="heroEmail">{data.email}</div>

      <p className="heroSummary">{data.summary}</p>

      <div className="actions">
        <a className="btn btnPrimary" href={`mailto:${data.email}`}>
          Email
        </a>
        <a className="btn btnGhost" href="#projects">
          See Projects
        </a>
      </div>
    </div>
  );
}
