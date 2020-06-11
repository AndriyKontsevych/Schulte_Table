import React, { useState, useRef, useEffect } from "react";
import "./index.css";

const levels = [4, 9, 16, 25];
let size = 0;
let numbers = [];
let extraTime = 0;

function randomize() {
  let numbers = [];
  let number = 0;

  do {
    number = Math.floor(Math.random() * (size + 1));

    if (number && !numbers.includes(number)) {
      numbers.push(number);
    }
  } while (numbers.length !== size);

  return numbers;
}

function style() {
  let sizes = 500 / Math.sqrt(size) - 2;
  return {
    width: sizes + "px",
    height: sizes + "px",
    fontSize: 1000 / size + "px"
  };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      count: 1,
      level: 0,
      isStart: false
    };
    this.handleClickSquere = this.handleClickSquere.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.isStart) {
        this.tick();
        if (this.state.seconds === 0) {
          numbers = [];
          extraTime = 0;
          this.setState(state => ({
            count: (state.count = 1),
            seconds: 0,
            isStart: false,
            level: (state.level = 0)
          }));
        }
      }
    }, 750);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick() {
    this.setState(state => ({
      count: (state.count = 1),
      isStart: !state.isStart,
      seconds: size + extraTime
    }));
    size = levels[this.state.level];
    numbers = randomize();
  }

  handleReset() {
    this.setState(state => ({
      count: (state.count = 1),
      seconds: 0,
      isStart: false,
      level: (state.level = 0)
    }));
    size = levels[this.state.level];
    numbers = [];
    extraTime = 0;
  }

  handleClickSquere(e) {
    e.preventDefault();
    let count = this.state.count;
    if (Number(e.target.id) === count) {
      this.setState(() => ({
        count: this.state.count + 1
      }));

      if (this.state.count === size) {
        if (this.state.level === levels.length - 1) {
          this.setState(state => ({
            isStart: !state.isStart,
            level: (state.level = 0)
          }));
          extraTime = 0;
        } else {
          this.setState(state => ({
            isStart: !state.isStart,
            level: state.level + 1
          }));
          extraTime = this.state.seconds;
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="timer">
          <h1>{this.state.seconds}</h1>
        </div>
        <div className="game">
          <div
            className="gameBtn"
            onClick={this.handleClick}
            style={
              this.state.isStart
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            {this.state.level === 0 ? "Start" : "Next"}

            <div
              className="extraTime"
              style={
                this.state.level < 1
                  ? { display: "none" }
                  : { display: "inline" }
              }
            >
              +{extraTime} extra time
            </div>
          </div>
          {numbers.map(num => {
            return (
              <div
                className={num < this.state.count ? `square green` : `square`}
                key={num}
                id={num}
                onClick={this.handleClickSquere}
                style={style(this.props.size)}
              >
                {num}
              </div>
            );
          })}
        </div>
        <button className="reset" onClick={this.handleReset}>
          Restart
        </button>
      </div>
    );
  }
}