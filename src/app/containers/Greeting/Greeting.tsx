import Image from "next/image";

import textAssets from "../../assets/text.json";

import "./Greeting.css";

export const Greeting = () => {
  const greetings = textAssets.greetings;
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <div className="greetings-container" id="Greetings">
      <div className="image-container">
        <Image
          src={"/static/assets/img/developer.png"}
          alt="Profile Image"
          className="profile-image"
          width={500}
          height={500}
        />
      </div>
      <div className="greeting-container">
        <span className="semibold">{randomGreeting + " "}</span>
        <span className="animated-text bold">
          <span style={{ color: "white" }}>I am Ty</span> Lippe
        </span>
      </div>
    </div>
  );
};
