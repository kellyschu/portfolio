import AboutContainer from "../../Components/AboutContainer/AboutContainer";
import "./ProjectsPage.scss";
import podstream from "../../assests/images/podstream1.jpg";
import moviesite from "../../assests/images/movie app screenshot.png";
import instock from "../../assests/images/warehousewide.jpg";
import paint from "../../assests/images/paintappscreenshot.png";

export default function ProjectsPage() {
  return (
    <div className="flex-container">
      <AboutContainer color={"grey"} height={"fit-content"}>
        <h2>Podstream</h2>
        <p>PodCast Streaming site with Social Media Aspect</p>
        <img
          src={podstream}
          alt="podstream"
          style={{
            paddingTop: "10px",
            width: "240px",
            minHeight: "170px",
            objectFit: "cover",
          }}
        />
        <a
          href="https://www.linkedin.com/in/kellyschumacher/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAACtqJAsBv231NS54rum9SRboqmlr3N9l4J4"
          target="_blank"
        >
          <button class="btn">
            {/* <i class="fa-brands fa-linkedin"></i> */}
            View on LinkedIn
          </button>
        </a>
      </AboutContainer>
      <AboutContainer color={"#363023"}>
        <h2>Movie Site</h2>
        <p>Mock Movie Site with Ratings</p>
        <img
          src={moviesite}
          alt="moviesite"
          style={{
            paddingTop: "10px",
            width: "240px",
            maxHeight: "170px",
            objectFit: "cover",
          }}
        />
        <a href=" https://mockmoviesite.netlify.app/" target="_blank">
          <button class="btn">
            {/* <i class="fa-solid fa-display"></i> */}
            View Website
          </button>
        </a>
      </AboutContainer>
      <AboutContainer color={"#363023"} height={"fit-content"}>
        <h2>InStock</h2>
        <p>Warehouse Inventory Management System</p>
        <img
          src={instock}
          alt="instock"
          style={{
            paddingTop: "10px",
            width: "240px",
            maxHeight: "170px",
            objectFit: "cover",
          }}
        />
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7130383699623182336/"
          target="_blank"
        >
          <button class="btn">
            {/* <i class="fa-brands fa-linkedin"></i> */}
            View on LinkedIn
          </button>
        </a>
      </AboutContainer>
      <AboutContainer height={"fit-content"}>
        <h2>Paint App</h2>
        <p>A painting app, with brush strokes and color options</p>
        <img
          src={paint}
          alt="paint"
          style={{
            paddingTop: "10px",
            width: "240px",
            maxHeight: "170px",
            objectFit: "cover",
          }}
        />
        <a
          href="https://paintcanvas.netlify.app/"
          target="_blank"
          class="btn-link"
        >
          <button class="btn">
            {/* <i class="fa-solid fa-display"></i> */}
            View Website
          </button>
        </a>
      </AboutContainer>
    </div>
  );
}
