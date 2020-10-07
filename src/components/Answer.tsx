import React from "react";
import $ from "jquery";

interface Props {
  questionId: string;
  point: number;
  activeQuestion: boolean;
  nummer: number;
  id: string;
  name: string;
  onLockQuestion: Function;
  onScoreChange: Function;
}
class Answer extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    const actualAnswer = e.target.id;
    var pointActual = 0;
    var questionId = this.props.questionId;
    var point = this.props.point;

    if (this.props.activeQuestion) {
      if (actualAnswer === questionId + "_0") {
        $("#" + questionId + "_point").css("color", "darkgreen");
        pointActual = point;
      } else {
        $("#" + actualAnswer).css("background-color", "darkred");
        $("#" + questionId + "_point").css("color", "darkred");
        pointActual = -point;
      }
      //info knap
      $("#" + questionId + "_info").css("display", "block");
      $("#" + questionId + "_0").css("background-color", "darkgreen");
      $("#" + questionId).css("display", "none");
      this.props.onLockQuestion(pointActual, actualAnswer);
      this.props.onScoreChange(pointActual);
    } else {
      alert("Question is already used!");
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleChange}
          value={this.props.nummer}
          id={this.props.id}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default Answer;
