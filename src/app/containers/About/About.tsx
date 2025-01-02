import textAssets from "../../assets/text.json";

import "./About.css";

export const About = () => {
  return (
    <div className="about-container" id="About">
      <div className="greeting-container">
        <span style={{ color: "inherit" }}>Ty</span>{" "}
        <span style={{ color: "dodgerblue" }}>Lippe</span>
      </div>
      <div className="description-container">{textAssets.description}</div>
    </div>
  );
};
