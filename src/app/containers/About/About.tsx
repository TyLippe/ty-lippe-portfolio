import textAssets from "../../assets/text.json";

import "./About.css";

export const About = () => {
  return (
    <div className="about-container" id="About">
      <p>{textAssets.description}</p>
    </div>
  );
};
