import React from "react";
import data from "./tivoli.json";
import Question from "./Question";

let jeopardyData = data;

interface MyProps {
  // answers: Array<string>;
}
interface MyState {
  pointGame: number;
}
class Game extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.score = this.score.bind(this);
    this.state = { pointGame: 0 };
  }
  score(actuelPoint: number) {
    let newScore = this.state.pointGame + actuelPoint;
    this.setState({ pointGame: newScore });
  }
  render() {
    return (
      <div className="game">
        <h2>{this.state.pointGame}</h2>

        {jeopardyData.games.map((game, i) => {
          return (
            <div key={i}>
              <div className="category">
                <h1>{game.category}</h1>
                {game.question_array.map((question, index) => {
                  return (
                    <div key={index}>
                      <Question
                        onScoreChange={this.score}
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
}

export default Game;
