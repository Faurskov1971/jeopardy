import React, { useState } from "react";
import Answer from "./Answer";
import Info from "./Info";
interface QuestionProps {
  id: string;
  point: number;
  question: string;
  info: string;
  answers: Array<any>;
}
function Question({id,point,question,info,answers}:QuestionProps) {
  const [activeQuestion,setActiveQuestion]=useState(true)
 // const range: random2F(this.props.answers.length),


 const activateAnswers=(id: string) =>{
//Denne funktion skal vise og skjule spørgsmål
  }
 const handleAnswer=()=> {
//Denn funktion skal skjule et spørgsmål
  }
 const random2F=(antal: number)=> {
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
  const answersF=()=> {
  //  const range = this.state.range;
    let count = 0;
    return (
      <div>
        {answers.map((number: any) => (
          <Answer
            key={count++}
            name={answers[number].answer}
            onLockQuestion={handleAnswer}
            nummer={number}
            id={id + "_" + number}
            point={point}
            questionId={id}
            activeQuestion={activeQuestion}
          />
        ))}
      </div>
    );
  }

    return (
      <div>
        <button
          onClick={() => activateAnswers(id)}
          id={id + "_point"}
          className="point"
        >
          {point}
        </button>
        <div className="answers" id={id}>
          <p className="question">{question}</p>
          <div>{answersF()}</div>
        </div>
        <span id={id + "_info"} className="hide">
          <Info
            text={" Læs mere..."}
            info={info}
            head={answers[0].answer}
            animation="door"
          />
        </span>
      </div>
    );
}

export default Question;
