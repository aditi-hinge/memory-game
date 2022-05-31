import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import luffy from "../images/luffy.jpg";
import zoro from "../images/zoro.jpg";
import sanji from "../images/sanji.jpg";
import chopper from "../images/chopper.jpg";
import nami from "../images/nami.jpg";
import robin from "../images/robin.jpg";
import usopp from "../images/usopp.jpg";
import brook from "../images/brook.jpg";
import jinbei from "../images/jinbei.jpg";
import franky from "../images/franky.jpg";
import vivi from "../images/vivi.jpg";
import sabo from "../images/sabo.jpg";

export default function Game() {
  //make character array
  const characters = [
    { name: "Luffy", image: luffy, id: 0, isSelected: false },
    { name: "Zoro", image: zoro, id: 1, isSelected: false },
    { name: "Sanji", image: sanji, id: 2, isSelected: false },
    { name: "Chopper", image: chopper, id: 3, isSelected: false },
    { name: "Nami", image: nami, id: 4, isSelected: false },
    { name: "Robin", image: robin, id: 5, isSelected: false },
    { name: "Usopp", image: usopp, id: 6, isSelected: false },
    { name: "Brook", image: brook, id: 7, isSelected: false },
    { name: "Jinbei", image: jinbei, id: 8, isSelected: false },
    { name: "Franky", image: franky, id: 9, isSelected: false },
    { name: "Vivi", image: vivi, id: 10, isSelected: false },
    { name: "Sabo", image: sabo, id: 11, isSelected: false }
  ];

  // states
  const [currentScore, setCurrentScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);
  const [comparisonArray, setComparisonArray] = React.useState([]);
  console.log(currentScore);
  const [cards, setCards] = React.useState(characters);

  //function to add cards to comparison array
  // if the same card is clicked twice: comparison array get empty
  // current score and high score updated
  // game is reset and player alerted.
  // else the card gets added to comparison array and
  // score is updated by 1
  function addCardToComparisonArray(name) {
    if (comparisonArray.includes(name)) {
      setComparisonArray([]);
      setCurrentScore(0);
      gameLostAlert();
    } else {
      setComparisonArray([...comparisonArray, name]);
      setCurrentScore((prevScore) => prevScore + 1);
    }
  }

  // function to give an alert message if the game is lost
  function gameLostAlert() {
    alert("you lost! please try again!");
  }

  // function to change state of isSelected of the
  // cards that have been clicked once
  function changeIsSelected(id) {
    setCards((prevCards) =>
      prevCards.map((card) => {
        return card.id === id ? { ...card, isSelected: true } : card;
      })
    );
  }

  // randomize array function
  // to display cards at random on the screen
  function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //Updating current score and high score in real time
  // display win message
  React.useEffect(() => {
    //do something
    if (highScore < currentScore) {
      setHighScore(currentScore);
    }
    if (currentScore === 12) {
      alert("congratulations! You WON!!");
      setComparisonArray([]);
      setCurrentScore(0);
    }
  }, [currentScore, highScore]);

  const cardElement = randomizeArray(cards).map((card) => {
    return (
      <Card
        source={card.image}
        name={card.name}
        key={card.id}
        isSelected={card.isSelected}
        clickHandle={() => {
          changeIsSelected(card.id);
          addCardToComparisonArray(card.name);
        }}
      />
    );
  });

  return (
    <div>
      <Header currentScore={currentScore} highScore={highScore} />
      <div className="cards-container">{cardElement}</div>
      <Footer />
    </div>
  );
}
