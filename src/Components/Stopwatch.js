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
      /**Setting state true to start and using Date.now for extra accuracy and to make it more accurate*/
    this.setState({
      isTimerOn: true,
      timerTime: this.state.timerTime,
      timer_start: Date.now() - this.state.timerTime
    });
  
  
  };
  /**setting isTimerOn to false to stop the stopwatch. */
  stop = () => {
    this.setState({ isTimerOn: false });
    clearInterval(this.timer);
  };
  /**make the state 0 to reset the state for new start call */
  resetTimer = () => {
    this.setState({
      timer_start: 0,
      timerTime: 0
    });
  };


  render() {

    return (
      <div className="Stopwatch">
        <div><h3>Stopwatch</h3></div>
        <div className="display">
   
           <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick="">Pause</button>
            <button onClick="">Restart</button>
         
        </div>
      </div>
    );
  }
}
export default Stopwatch;