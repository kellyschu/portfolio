import avatar from "../../assests/images/headshots/color.png";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Software Developer</h1>
      <img
        src={avatar}
        alt="headshot"
        style={{
          width: "220px",
          display: "block",
          margin: "2rem auto",
          borderRadius: "4%",
          filter: "brightness(90%)",
          boxShadow:
            "0px 4px 8px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      />
      <h2
        style={{
          fontSize: ".9rem",
          color: "grey",
          textAlign: "center",
        }}
      >
        I am a Miami-based web designer and full stack developer specializing in
        sleek, aesthetic and user-friendly digital experiences.
      </h2>
      <h2
        style={{
          fontSize: "1.1rem",
          color: "darkGray",
          textAlign: "center",
          margin: "0 .3rem 1rem .3rem",
          letterSpacing: ".75px",
        }}
      >
        Specializing in clean designs and leveraging cloud computing.
      </h2>
      <h2
        style={{
          fontSize: "1rem",
          letterSpacing: ".1px",
          textTransform: "uppercase",
          color: "gray",
          borderBottom: "2px solid lightgray",
          borderTop: "2px solid lightgray",
          width: "fit-content",
          margin: "auto auto 5rem auto",
          padding: ".5rem 0rem",
        }}
      >
        Over a decade of industry experience
      </h2>
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          margin: "2.5rem 0 .25rem 0",
        }}
      >
        diploma and certifications
      </h3>
      <p
        style={{
          fontSize: "1.1rem",
          color: "darkGray",
          textAlign: "center",
          margin: ".3rem",
          letterSpacing: ".75px",
        }}
      >
        {">> "} Full Stack Web Development {"<<"}
      </p>
      <p
        style={{
          fontSize: "1.1rem",
          color: "darkGray",
          textAlign: "center",
          margin: "0 .3rem 2rem .3rem",
          letterSpacing: ".75px",
          border: "none",
        }}
      >
        {">> "} AWS Cloud Practitioner {"<<"}
      </p>
      <h3
        style={{
          fontSize: "1.1rem",
          textAlign: "center",
          margin: "3rem 0 .25rem 0",
          letterSpacing: ".7px",
        }}
      >
        knowledgable tech stacks{" "}
      </h3>
      <ul className="tech-stack">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>JIRA</li>
        <li>AWS Cloud</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>Netlify</li>
        <li>VSCode</li>
      </ul>
    </div>
  );
}
