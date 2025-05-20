import "./App.css";
import { bindActionCreators } from "redux";
import { counterIncreamentAction } from "./actions/counterAction";
import { counterDecreamentAction } from "./actions/counterAction";
import Test from "./Test";
import { connect } from "react-redux";

function App(props) {

  // console.log("tests",props)
  return (
    <div className="App">
      {/* <p>{props.counterValue}</p>
      <button onClick={() => props.counterIncreamentAction(props.counterValue+1)}>Add</button>
      <button onClick={() => props.counterDecreamentAction(props.counterValue-1)}>minus</button> */}
      <Test/>
    </div>
  );
}

const mapStateToprops = (state) => {
  // console.log("2333",state)
  return {
    counterValue: state.counterReducer.counterValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      counterIncreamentAction,
      counterDecreamentAction
    },
    dispatch
  );
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
