"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import textAssets from "../../assets/text.json";

import "./Greeting.css";

export const Greeting = () => {
  const greetings = textAssets.greetings;
  const [randomGreeting, setRandomGreeting] = useState("");

  useEffect(() => {
    const newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setRandomGreeting(newGreeting);
  }, []);

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
        <span className="semibold greeting">{randomGreeting + " "}</span>
        <span className="animated-text bold">
          <span style={{ color: "white" }}>I am Ty</span> Lippe
        </span>
      </div>
    </div>
  );
};
