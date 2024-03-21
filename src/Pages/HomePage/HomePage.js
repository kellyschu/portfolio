import avatar from "../../assests/images/headshots/color.png";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      Software Developer
      <img
        src={avatar}
        alt="me"
        style={{ width: "220px", margin: "20px", backgroundColor: "grey" }}
      />
      <h2 style={{ fontSize: "1rem", color: "grey" }}>
        I am a Miami based web designer and front-end developer focused on
        creating clean, aesthetic and user-friendly experiences. I am passionate
        about building excellent software that improves the lives of those
        around me.
      </h2>
      <h3> include tech stacks here</h3>
    </div>
  );
}
