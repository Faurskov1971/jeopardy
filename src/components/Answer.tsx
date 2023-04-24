import React from "react";

interface AnswerProps {
  questionId: string;
  point: number;
  activeQuestion: boolean;
  nummer: number;
  id: string;
  name: string;
  onLockQuestion: Function;
}
const Answer=({questionId,nummer,activeQuestion,id,name,onLockQuestion}:AnswerProps)=>  {
  function handleChange(e: any) {
    const actualAnswer = id;
    const pointActual = 0;

    if (activeQuestion) {
      if (actualAnswer === questionId + "_0") {
        console.log("rigtigt")
      } else {
        console.log("Forkert")
      }
      //info knap
      onLockQuestion(pointActual, actualAnswer);
    } else {
      alert("Question is already used!");
    }
  }
    return (
      <div>
        <button
          onClick={()=>handleChange}
          value={nummer}
          id={id}
        >
          {name}
        </button>
      </div>
    );
  }
export default Answer;
