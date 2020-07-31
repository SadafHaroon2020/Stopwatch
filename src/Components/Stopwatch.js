import React from "react";

class Stopwatch extends React.Component {
  /*Defining States for stopwatch intially set isTimerOn : false as start state.*/
  state = {
    isTimerOn: false,
    timer_start: 0,
    timerTime: 0
  };
 /**
  * Defining on click function which will call on related button 
  */
  start = () => {
  
  };
  stop = () => {

  };


  render() {

    return (
      <div className="Stopwatch">
        <div><h3>Stopwatch</h3></div>
        <div className="display">
   
            <button onClick="">Start</button>
            <button onClick="">Stop</button>
            <button onClick="">Pause</button>
            <button onClick="">Restart</button>
         
        </div>
      </div>
    );
  }
}
export default Stopwatch;