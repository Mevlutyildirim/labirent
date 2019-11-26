import React, { useState, useEffect } from "react";
import "./labirent.css";
import Graph from "../../utils/graph/graph";
import Vertex from "../../utils/graph/vertex";
import Edge from "../../utils/graph/edge";
import dijkstra from "../../utils/graph/dijkstra";
import io from 'socket.io-client';

export default function Labirent() {
  const [datas, setData] = useState([
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
    { value: "cheese"}, //cheese
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
  ]);

  const [done, setDone] = useState(false);
  const [moveCount, setMoveCount] = useState(0);

  function makeMove(e) {
    const costumDatas = [...datas];
    let index = datas.findIndex((val, idx) => {
      return val.value === "mouse";
    });
    let top = index - 16;
    let right = index + 1;
    let left = index - 1;
    let bottom = index + 16;
    if (e.keyCode === 38) {
      if (top > 0) {
        if (datas[top].value !== "brick") {
          [costumDatas[top], costumDatas[index]] = [
            costumDatas[index],
            costumDatas[top]
          ];
          setData(costumDatas);
        }
      }
    }
    if(e.keyCode === 40){
      if(bottom < 160){
        if(datas[bottom].value !== "brick"){
          [costumDatas[bottom], costumDatas[index]] = [costumDatas[index], costumDatas[bottom]];
          setData(costumDatas);
        }
      }
    }
    if(e.keyCode === 37){
      if(datas[left].value !== "cheese"){
        if(datas[left].value !== "brick"){
          [costumDatas[left], costumDatas[index]] = [costumDatas[index], costumDatas[left]];
          setData(costumDatas);
        }
      }else{
        setDone(true);
      }
    }
    if(e.keyCode === 39){
      if(right < 160){
        if(datas[right].value !== "brick"){
          [costumDatas[right], costumDatas[index]] = [costumDatas[index], costumDatas[right]];
          setData(costumDatas);
        }
      }
    }
    
  }

  const graph = new Graph();
  function ConstructGraph() {
    for (var i = 0; i < datas.length; i++) {
      const vertex = new Vertex(i, datas[i].value);
      graph.addVertex(vertex);
    }
    for (var t = 0; t < datas.length; t++) {
      const vertex = graph.getVertexByKey(t);
      if (vertex.value.value !== "brick") {
        const left = t - 1;
        const right = t + 1;
        const top = t - 16;
        const bottom = t + 16;
        if (left > 0 && (left % 16 !== 15 || left % 16 !== 0)) {
          if (graph.getVertexByKey(left).value.value !== "brick") {
            const edge = new Edge(vertex, graph.getVertexByKey(left));
            graph.addEdge(edge);
          }
        }
        if (right < 160 && (right % 16 !== 15 || right % 16 !== 0)) {
          if (graph.getVertexByKey(right).value.value !== "brick") {
            const edge = new Edge(vertex, graph.getVertexByKey(right));
            graph.addEdge(edge);
          }
        }
        if (top > 0 && (top % 16 !== 15 || top % 16 !== 0)) {
          if (graph.getVertexByKey(top).value.value !== "brick") {
            const edge = new Edge(vertex, graph.getVertexByKey(top));
            graph.addEdge(edge);
          }
        }
        if (bottom < 160 && (bottom % 16 !== 15 || bottom % 16 !== 0)) {
          if (graph.getVertexByKey(bottom).value.value !== "brick") {
            const edge = new Edge(vertex, graph.getVertexByKey(bottom));
            graph.addEdge(edge);
          }
        }
      }
    }
  }
  useEffect(() => {
    io("http://localhost.com:5000");
    ConstructGraph();
    
  }, []);

  useEffect(()=>{
    if(done === true){
        alert("you win");
      window.location.reload();
    }
  }, [done]);

 

  function findIt(e){
    let mouseIndex = datas.findIndex((val, idx) => {
      return val.value === "mouse";
    });
    const mousee = graph.getVertexByKey(mouseIndex);
    const result = dijkstra(graph, mousee);
    var realvalues = Object.values(result.previousVertices);
    var indices = [];

    
    function recursiveTravel(index){

      if(typeof realvalues[index] === "object" && !!realvalues[index]){
        indices.push(index);
        recursiveTravel(realvalues[index].value.index)
      }
      
    }
    let cheeseIndex = datas.findIndex((val, idx) => {
      return val.value === "cheese";
    });
    recursiveTravel(cheeseIndex);
    indices.shift()
    indices.reverse().forEach((val, idx)=>{
      let count = moveCount;
      setMoveCount(count++);
      let costumDatas = [...datas];
        let index = costumDatas.findIndex((val, idx) => {
          return val.value === "mouse";
        });
        [costumDatas[val], costumDatas[index]] = [
          costumDatas[index],
          costumDatas[val]
        ];

        setData(costumDatas);
    });
  }

useEffect(()=>{
   console.log(datas);
  }, [datas])


  return (
    <div>
      <section className="labirent">
        {datas.map((item, idx) => {
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
      <div>{moveCount}</div>
      <label htmlFor="hidden">play</label>
      <input type="text" id="hidden" onKeyDown={makeMove} tabIndex="0" />
      <button onClick={findIt}>click me </button>
    </div>
  );
}