import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Game_Info = styled.div`
  padding: 18px;
  font-size: 18px;
  display: block;
  text-align: center;
  width: 100%;
  line-height: 30px;
`;

const Mission = styled.div`
  padding-top: 30px;
  display: block;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: #ffcc00;
`;

const Button_Container = styled.div`
  padding: 30px;
  text-align: center;
`;

const Start = styled.button`
  padding: 10px 15px;
  background-color: #ffcc00;
  border-radius: 8px;
  border-style: none;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`;

const Extra = styled.div`
  margin-top: 50px;
  text-align: center;
  display: block;
  width: 70%;
  padding: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 20px;
`;

export default class extends Component {
  render = () => {
    return (
      <Container>
        <Game_Info>
          <p>
            This game is for 3 persons batting game.<br></br>
            What we want to see is your behavior pattern especially related to
            chicken game.
          </p>
        </Game_Info>
        <Mission>Your Mission is Being Winner.</Mission>
        <Button_Container>
          <Link to="/questions">
            <Start> Let's Start</Start>
          </Link>
        </Button_Container>
        <Game_Info>
          Only winner can get extra reward which is proportional to gap between
          other competitors.
        </Game_Info>
        <Extra>
          * What is Chicken game?
          <br></br>
          <br></br>
          The game of chicken, also known as the hawk–dove game or snowdrift
          game, is a model of conflict for two players in game theory. The
          principle of the game is that while the outcome is ideal for one
          player to yield, but the individuals try to avoid it out of pride for
          not wanting to look like a 'chicken'. So each player taunts the other
          to increase the risk of shame in yielding. However, when one player
          yields, the conflict is avoided, and the game is for the most part
          over.
        </Extra>
      </Container>
    );
  };
}
