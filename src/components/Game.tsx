import React, { useState } from "react";
import data from "./jordihovedet2.json";
import Question from "./Question";

function Game() {
  const jeopardyData = data;
    const [pointGame, setPointGame]=useState(0) ;
    return (
      <div className="game">
        <h2>{pointGame}</h2>

        {jeopardyData.games.map((game, i) => {
          return (
            <div key={i}>
              <div className="category">
                <h1>{game.category}</h1>
                {game.question_array.map((question, index) => {
                  return (
                    <div key={index}>
                      <Question
                        id={question.id}
                        point={question.point}
                        question={question.question}
                        answers={question.answer_array}
                        info={question.info}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Game;
