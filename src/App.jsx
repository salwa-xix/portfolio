import "./App.css";
import { data } from "./data/data.js";

export default function App() {
  return (
    <div className="page">
      <div className="shell">
        <Navbar />

        <main className="content">
          <Hero data={data} />

          <Section id="skills" title="Skills">
            <Skills skills={data.skills} />
          </Section>

          <Section id="education" title="Education">
            <Education education={data.education} />
          </Section>

          <Section id="projects" title="Projects">
            <Projects projects={data.projects} />
          </Section>

          <Section id="contact" title="Contact">
            <Contact email={data.email} links={data.links} />
          </Section>
        </main>

        <Footer name={data.name} />
      </div>
    </div>
  );
}
