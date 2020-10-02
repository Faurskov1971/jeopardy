import React from "react";
import $ from "jquery";
import Answer from "./Answer";
import Info from "./Info";
interface Props {
  id: string;
  point: number;
  question: string;
  info: string;
  answers: Array<any>;
  onScoreChange: Function;
}
interface MyState {
  activeQuestion: boolean;
  id: string;
  range: any[] | any;
}
class Question extends React.Component<Props, MyState> {
  constructor(props: any) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.activateAnswers = this.activateAnswers.bind(this);

    this.state = {
      activeQuestion: true,
      id: this.props.id,
      range: this.random2F(4),
    };
  }

  activateAnswers(id: string) {
    $(".answers").hide();
    $(".hide").hide();
    $("#" + id).show();
  }
  handleAnswer() {
    this.setState({ activeQuestion: false });
  }
  random2F(antal: number) {
    const startArray = [];
    const slutArray = [];
    for (let i = 0; i < antal; i++) {
      startArray[i] = i;
    }
    while (startArray.length > 0) {
      let tmpTal = Math.random() * startArray.length;
      tmpTal = Math.floor(tmpTal);
      slutArray.push(startArray[tmpTal]);
      startArray.splice(tmpTal, 1);
    }
    return slutArray;
  }
  answersF() {
    const range = this.state.range;
    let count = 0;
    return (
      <div>
        {range.map((number: any) => (
          <Answer
            key={count++}
            name={this.props.answers[number].answer}
            onLockQuestion={this.handleAnswer}
            onScoreChange={this.props.onScoreChange}
            nummer={number}
            id={this.state.id + "_" + number}
            point={this.props.point}
            questionId={this.state.id}
            activeQuestion={this.state.activeQuestion}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.activateAnswers(this.state.id)}
          id={this.state.id + "_point"}
          className="point"
        >
          {this.props.point}
        </button>
        <div className="answers" id={this.state.id}>
          <p className="question">{this.props.question}</p>
          <div>{this.answersF()}</div>
        </div>
        <span id={this.state.id + "_info"} className="hide">
          <Info
            text={" Læs mere..."}
            info={this.props.info}
            head={this.props.answers[0].answer}
            animation="door"
          />
        </span>
      </div>
    );
  }
}

export default Question;
