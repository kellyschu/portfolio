import "./AboutContainer.scss";
export default function AboutContainer({
  children,
  color = "#685344",
  backgroundColor = "rgba(50, 100, 145, 0.2)",
  height = "375px",
  display = "flex",
  flexDirection = "column",
  alignItems = "center",
  justifyContent = "bottom",
}) {
  const containerStyle = {
    fontSize: "14px",
    color,
    backgroundColor,
    height,
    display,
    flexDirection,
    alignItems,
    justifyContent,
  };
  return (
    <div className="about-container" style={containerStyle}>
      {children}
    </div>
  );
}
