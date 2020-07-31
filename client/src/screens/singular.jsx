import React from "react";
import Footer from "./components/footer";
import "./components/labirent.css";

export default class Singular extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: [
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" }, //1
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "cheese" }, //cheese
        { value: "empty" },
        { value: "empty" },
        { value: "brick" }, //2
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "mouse" }, // mouse
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" }, // 3
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" }, //4
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" }, //5
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" }, //6
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" }, //7
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" }, //8
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" }, //9
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" }
      ]
    };
  }

  makeMove(e) {
    let index = this.state.datas.findIndex((val, idx) => {
      return val.value === "mouse";
    });
    let top = index - 16;
    let right = index + 1;
    let left = index - 1;
    let bottom = index + 16;
    if (e.keyCode === 38) {
      if (top > 0) {
        if (this.state.datas[top].value === "empty") {
          [this.state.datas[top], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[top]
          ];
          this.setState({ datas: this.state.datas });
        }
      }
    }
    if (e.keyCode === 40) {
      if (bottom < 160) {
        if (this.state.datas[bottom].value === "empty") {
          [this.state.datas[bottom], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[bottom]
          ];
          this.setState({ datas: this.state.datas });
        }
      }
    }
    if (e.keyCode === 37) {
      if (this.state.datas[left].value !== "cheese") {
        if (this.state.datas[left].value === "empty") {
          [this.state.datas[left], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[left]
          ];
          this.setState({ datas: this.state.datas });
        }
      } else {
        alert("you win");
        window.location.reload();
      }
    }
    if (e.keyCode === 39) {
      if (right < 160) {
        if (this.state.datas[right].value === "empty") {
          [this.state.datas[right], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[right]
          ];
          this.setState({ datas: this.state.datas });
        }
      }
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <section className="labirent">
          {this.state.datas.map((item, idx) => {
            if (item.value === "brick") {
              return <div className="brick" key={idx}></div>;
            } else if (item.value === "empty") {
              return <div className="empty" key={idx}></div>;
            } else if (item.value === "cheese") {
              return <div className="cheese" key={idx}></div>;
            } else if (item.value === "mouse") {
              return <div className="mouse" key={idx}></div>;
            }
          })}
        </section>
        <Footer>
          <button className="play" onKeyDown={this.makeMove.bind(this)} tabIndex="0">
            play
          </button>
        </Footer>
      </div>
    );
  }
}
