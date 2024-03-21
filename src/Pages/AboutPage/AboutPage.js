import AboutContainer from "../../Components/AboutContainer/AboutContainer";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div className="flex-container">
      <AboutContainer color={"grey"} height={"220px"}>
        <h2>Passion for Code</h2>
        <p>Watching the screen come to life.</p>
      </AboutContainer>
      <AboutContainer color={"#363023"} height={"220px"}>
        <h2>Avid Learner</h2>
        <p>Being able to implement your own designs.</p>
      </AboutContainer>
      <AboutContainer backgroundColor={"#beb7b2"} height={"220px"}>
        <h2>Continuing Education</h2>

        <p>Very rewarding and fullfilling career change.</p>
      </AboutContainer>
    </div>
  );
}
