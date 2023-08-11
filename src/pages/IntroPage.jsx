import React from "react";
import "./IntroPage.scss";
import { Link } from "react-router-dom";
import EmojiR from "../assets/images/intro_emoji2.webp";
import EmojiY from "../assets/images/intro_emoji1.png";
import EmojiSa from "../assets/images/intro_emoji3.png";
import EmojiSu from "../assets/images/intro_emoji4.png";

function IntroPage() {
  return (
    <section className="intro">
      <h1 className="intro__title">PokeMania</h1>
      <div className="intro__name">
        <ul className="intro__name--ppl">
          <div className="intro__name--left">
            <div className="intro__name--container">
              <img src={EmojiR} />
            </div>

            <li>Ryan</li>
            <div className="intro__name--container">
              <img src={EmojiY} />
            </div>

            <li>Yuna</li>
          </div>

          <div className="intro__name--right">
            <div className="intro__name--container">
              <img src={EmojiSu} />
            </div>

            <li>Supreet</li>
            <div className="intro__name--container">
              <img src={EmojiSa} />
            </div>

            <li>Sabrine</li>
          </div>
        </ul>
      </div>
      <Link to="/trivia">
        <div className="intro-btn">
          <button className="intro-btn__start">PLAY</button>
        </div>
      </Link>
    </section>
  );
}

export default IntroPage;
