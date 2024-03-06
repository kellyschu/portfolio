import "./AboutContainer.scss";
export default function AboutContainer({
  children,
  color = "#685344",
  backgroundColor = "rgba(50, 100, 145, 0.2)",
}) {
  const containerStyle = {
    fontSize: "14px",
    color,
    backgroundColor,
  };
  return (
    <div className="about-container" style={containerStyle}>
      {children}
    </div>
  );
}
