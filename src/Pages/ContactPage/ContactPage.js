export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      Add me on
      <a
        href="https://www.linkedin.com/in/kellyschumacher"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button class="btn">
          <i class="fa-brands fa-linkedin"></i>
          View on LinkedIn
        </button>
      </a>
      View my
      <a
        href="https://www.kellyschuportfolio.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button class="btn">
          {/* <i class="fa-brands fa-linkedin"></i> */}
          Portfolio
        </button>
      </a>
    </div>
  );
}
