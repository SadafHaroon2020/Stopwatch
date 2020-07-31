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
        /**using call back function to call after every 10 ms use predefine setInterval */
        this.timer = setInterval(() => {
            this.setState({
                timerTime: this.state.timer_start
            });
        }, 10);

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
        const { timerTime } = this.state;
        console.log(timerTime)
        /**
         * extracting time in hrs,mins,seconds and centiseconds.
         * using Math.floor to round the number and using mod to have exact the number.abs
         * appending 0 as string in the begining of result and use slice to take up two values
         * storing in a variable to later display on front end as two digit value
         * 
         **/
        let centi_Sec = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        console.log(centi_Sec)
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        console.log(seconds)
        let mins = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        console.log(mins)
        let hrs = ("0" + Math.floor(timerTime / 3600000)).slice(-2);


        return (
            <div className="Stopwatch">
                <div><h3>Stopwatch</h3></div>
                <div className="display">
                {hrs} : {mins} : {seconds} : {centi_Sec}
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