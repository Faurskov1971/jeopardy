import React from "react";
// @ts-ignore
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

interface MyProps {
  text: string;
  head: string;
  info: string;
  animation: string;
}
interface MyState {
  visible: boolean;
}
class Info extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { visible: true };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
          <div className="infoText">
            <h3 className="infoHead">Rigtigt svar er '{this.props.head}'</h3>
            <p className="infoBread">{this.props.info}</p>
          </div>
        </Rodal>
      </div>
    );
  }
}
export default Info;
