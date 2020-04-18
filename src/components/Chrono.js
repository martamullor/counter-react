import React, { Component } from 'react';

class Chrono extends Component {

    state = {
        numOfMinutes: 0,
        numOfSeconds: 0,
        running: false
    };

    zero = (number) => {
        return number < 10 ? `0${number}` : number;
    }


    handleStart = () => {
        if (!this.state.running) {
            this.intervalId = setInterval(() => {
                this.setState({
                    numOfSeconds: this.state.numOfSeconds + 10,
                })
                this.refresh();
            }, 1000)
            this.setState({
                running: true,
            })
        }
    }

    handleStop = () => {
        if (this.state.running) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
            this.setState({
                running: false
            })
        }
    }

    handleReset = () => {
        this.handleStop();
        this.setState({
            numOfSeconds: 0,
            numOfMinutes: 0
        })
    }

    refresh = () => {
        let seconds = this.state.numOfSeconds;
        let minutes = this.state.numOfMinutes;

        if (seconds === 60) {
            seconds = 0
            minutes += 1;
        }

        this.update(seconds, minutes);
    }

    update = (seconds, minutes) => {
        this.setState({
            numOfSeconds: seconds,
            numOfMinutes: minutes
        })
    }


    render() {
        return (
            <div>
                <p>{this.zero(this.state.numOfMinutes)} : {this.zero(this.state.numOfSeconds)}</p>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Chrono;