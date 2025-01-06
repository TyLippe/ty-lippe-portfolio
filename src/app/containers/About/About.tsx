import textAssets from "../../assets/text.json";

import "./About.css";

export const About = () => {
  return (
    <div className="about-container" id="About">
      <div className="name-container">
        <span style={{ color: "inherit" }}>Ty</span>{" "}
        <span style={{ color: "dodgerblue" }}>Lippe</span>
      </div>
      <div className="description-container">
        <span className="bold-greeting">{textAssets.greeting + " "}</span>
        <span>{textAssets.description}</span>
      </div>
    </div>
  );
};
