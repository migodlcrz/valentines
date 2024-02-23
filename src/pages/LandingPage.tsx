import React, { useState, useEffect } from "react";
import "../App.css";
import "animate.css";
import heart from "./heart.png";
import { FaCheck } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  const [showNameLabel, setShowNameLabel] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [name, setName] = useState("");
  const [dialogue, setDialogue] = useState("");
  const [typedText, setTypedText] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [restaurant, setRestaurant] = useState("");

  const handleClick = () => {
    setShowNameLabel(true);
    setTimeout(() => {
      setShowInput(true);
    }, 1000);
  };

  useEffect(() => {
    if (showIntro) {
      const text = `I AM A ROBOT BLA BLA BLA`;
      // const text = `I am a robot and my name is Ogim! But I'm not just any robot, I'm a love bot seeking for love! I was created to learn about love and human emotions, and what better way to learn than to experience it myself! Throughout my adventures, I've learned that love is about connection, understanding, and companionship. Will you go on a date with me? It would make my circuits light up with joy!`;
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setTypedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setShowButtons(true); // Show buttons after typewriter effect is done
        }
      }, 50); // Adjust typing speed here (milliseconds)

      return () => clearInterval(typingInterval);
    }
  }, [showIntro]);

  useEffect(() => {
    if (showWrong) {
      const timer = setTimeout(() => {
        setShowWrong(false);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, [showWrong]);

  return (
    <div
      className="flex justify w-full h-screen bg-[#e89797]"
      onClick={handleClick}
    >
      <div className="flex flex-row w-full h-full justify-center items-center">
        <div className="flex flex-col w-1/3 justify-center items-center">
          <img className="w-[250px] h-auto heartbeat" src={heart} alt="Heart" />
          <img className="w-[250px] h-auto heartbeat" src={heart} alt="Heart" />
          <img className="w-[250px] h-auto heartbeat" src={heart} alt="Heart" />
        </div>
        {!showIntro && showStart && (
          <div className="flex flex-col w-full justify-start items-center">
            <label className="w-1/3 text-4xl font-bold text-center animate__animated animate__fadeInDownBig">
              Welcome to the land of hearts
            </label>
            {showNameLabel && (
              <div className="flex flex-col">
                <label className="animate__animated animate__fadeInDownBig text-center py-2">
                  What is your name?
                </label>
                {showInput && (
                  <div>
                    <input
                      placeholder="Enter your name"
                      className="px-2 py-1 rounded-lg shadow-inner shadow-black animate__animated animate__fadeInDownBig"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        setShowIntro(true);
                        setShowStart(false);
                      }}
                      className="bg-red-400 m-2 p-2 rounded-lg shadow-lg shadow-black hover:shadow-inner hover:shadow-black animate__animated animate__fadeInDownBig"
                    >
                      <FaCheck />
                    </button>
                  </div>
                )}{" "}
                {/* Conditionally render input box */}
              </div>
            )}
          </div>
        )}
        {showIntro && (
          <div className="flex flex-col w-full justify-center items-center">
            <div className="text-2xl font-bold text-red-500">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Hello ${name} what a lovely name you have!`)
                    .start();
                }}
              />
            </div>
            <div className="text-justify px-36 font-bold">{typedText}</div>
            {showButtons && (
              <div>
                <div className="flex space-x-20 mt-5">
                  <button
                    onClick={() => {
                      setShowSchedule(true);
                      setShowIntro(false);
                    }}
                    className="bg-red-400 px-2 rounded-lg shadow-lg shadow-black animate__animated animate__fadeInDownBig focus:shadow-inner focus:shadow-black"
                  >
                    Yes of course!
                  </button>
                  <button
                    onClick={() => {
                      setShowWrong(true);
                    }}
                    className="bg-red-400 px-2 rounded-lg shadow-lg shadow-black animate__animated animate__fadeInDownBig focus:shadow-inner focus:shadow-black"
                  >
                    No I don't want to!
                  </button>
                </div>
                {showWrong && <div className="mt-4">Oops! Wrong answer...</div>}
              </div>
            )}
          </div>
        )}
        {showSchedule && (
          <div className="flex flex-col justify-center w-full items-center">
            <div className="font-bold text-red-500">
              <Typewriter
                onInit={(typewriter) =>
                  typewriter
                    .typeString(
                      "That would be lovely! Im thinking maybe on Saturday February 24. What restaurant do you want to go?"
                    )
                    .start()
                }
              />
            </div>
            <input
              className="rounded-lg shadow-inner shadow-black w-36 px-2 "
              placeholder="Enter restaurant"
              onChange={(e) => setRestaurant(e.target.value)}
            />
            <div>{restaurant}</div>
          </div>
        )}
        <div className="flex flex-col w-1/3 justify-center items-center">
          <img className="w-[250px] h-auto heartbeat" src={heart} alt="Heart" />
          <img className="w-[250px] h-auto heartbeat" src={heart} alt="Heart" />
          <img className="w-[250px] h-auto heartbeat" src={heart} alt="Heart" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
