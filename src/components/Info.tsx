import React, { useState } from "react";
// @ts-ignore
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

interface InfoProps {
  text: string;
  head: string;
  info: string;
  animation: string;
}
interface MyState {
  visible: boolean;
}
function Info({text,head,info,animation}:InfoProps) {
const [visible,setVisible]=useState(false)

const show=()=> {
    setVisible(true);
  }

const hide=() =>{
    setVisible(false)
  }
    return (
      <div>
        <Rodal visible={visible} onClick={hide()}>
          <div className="infoText">
            <h3 className="infoHead">Rigtigt svar er '{head}'</h3>
            <p className="infoBread">{info}</p>
          </div>
        </Rodal>
      </div>
    );
  }
export default Info;
