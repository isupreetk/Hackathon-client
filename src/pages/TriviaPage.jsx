import "./TriviaPage.scss";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import arrow from '../assets/images/arrow.png';

const api_URL = "http://localhost:5050";

function TriviaPage() {

  const navigate = useNavigate();

  function handleChoiceClick(event) {
    console.log(event.target.value);
    console.log(currentPoke.correct);

    if (event.target.value === currentPoke.correct) {
      alert("Congratulation!! that is the right answer");
    } else {
      alert("Sorry, that is not the right Pokeman! Try again")
    };
    // if(currentPoke.correct === event.target.)
  }

  function handleNextClick() {
    // console.log(Number(id)+1);
    // if (id) {
    //   let prev_id = Number(id);
    //   let next_id = prev_id + 1;
    //   navigate(`/trivia/${next_id}`);
    // }
    // else if (id > 9) {
    //   alert("Congratulations!! Game Over! You win!");
    //   // return;
    //   navigate("/");
    // }

    // else {
    //   let prev_id = 0;
    //   let next_id = prev_id + 1;
    //   navigate(`/trivia/${next_id}`);
    // }

    if(id) {
      let prev_id = Number(id);
      let next_id = prev_id + 1;

      if (next_id > 9) {
        alert("Congratulations! Game Over! You win!");
        navigate("/");
      }
      else{
        navigate(`/trivia/${next_id}`);
      }
    }
    else {
      let prev_id = 0;
      let next_id = prev_id + 1;
      navigate(`/trivia/${next_id}`);
    }

  }

  const [pokeData, setPokeData] = useState([]);
  const [currentPoke, setCurrentPoke] = useState({});
  const [currentPokeChoices, setCurrentPokeChoices] = useState([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {

    axios.get(`${api_URL}/trivia/${0}`)
      .then((response) => {
        // console.log("Response:",response.data);
        setPokeData(response.data);
        // setCurrentPoke(response.data[0]);
        // console.log("Poke:",currentPoke);
        // setCurrentPokeChoices(response.data.choices);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    if (id && id <= 9) {
      axios.get(`${api_URL}/trivia/${id}`)
        .then((response) => {
          // console.log("Response:",response.data);
          setCurrentPoke(response.data[`${id}`]);
          setCurrentPokeChoices(response.data[`${id}`].choices);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else if (pokeData[0]) {
        axios.get(`${api_URL}/trivia/${pokeData[0].id}`)
          .then((response) => {
            console.log("Response:", response.data);
            setCurrentPoke(response.data[0]);
            setCurrentPokeChoices(response.data[0].choices);
          })
          .catch((error) => {
            console.log(error);
          })
      }

  }, [id, pokeData])

  // console.log("Poke:",currentPoke);
  // console.log("name",currentPoke.name);

  return (
    <>
      <section className="trivia">
        <div className="trivia__container">
          <div className="trivia-next">
            <button onClick={() => handleNextClick()}>
              <img className="trivia-next-image" src={arrow} />
            </button>
          </div>

          {/* <div>{currentPoke.name}</div> */}
          <div className="trivia__image-container">
          <img className="trivia__image" src={currentPoke.image} alt={currentPoke.name}></img>
          </div>
          <div className="trivia__button">
            <div className="trivia__button1">
              <button name="button" value={currentPokeChoices[0]} onClick={(event) => { handleChoiceClick(event) }} className="trivia__button--btn">{currentPokeChoices[0]}</button>
              <button name="button" value={currentPokeChoices[1]} onClick={(event) => { handleChoiceClick(event) }} className="trivia__button--btn">{currentPokeChoices[1]}</button>
            </div>
            <div className="trivia__button2">
              <button name="button" value={currentPokeChoices[2]} onClick={(event) => { handleChoiceClick(event) }} className="trivia__button--btn">{currentPokeChoices[2]}</button>
              <button name="button" value={currentPokeChoices[3]} onClick={(event) => { handleChoiceClick(event) }} className="trivia__button--btn">{currentPokeChoices[3]}</button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default TriviaPage;
