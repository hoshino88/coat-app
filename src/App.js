import React from 'react';
import './App.css';

let coat1_members = [
  { id: 1, name: '①'},
  { id: 2, name: '②'},
  { id: 3, name: '③'},
  { id: 4, name: '④'},
];
let coat1_Items = coat1_members.map((number) =>
  <li>{number.name}</li>
);

function gameEnd(e) {
    wait_members.push(coat1_members.slice());
    coat1_members.shift();
    coat1_members.shift();
    coat1_members.shift();
    coat1_members.shift();
    coat1_members.push(wait_members.slice(0, 3));
    App();
    console.log('The link was clicked.');
}

let coat2_members = [
  { id: 5, name: '⑤'},
  { id: 6, name: '⑥'},
  { id: 7, name: '⑦'},
  { id: 8, name: '⑧'},
];
let coat2_Items = coat1_members.map((number) =>
  <li>{number.name}</li>
);

let coat3_members = [
  { id: 9, name: '⑨'},
  { id: 10, name: '⑩'},
  { id: 11, name: '⑪'},
  { id: 12, name: '⑫'},
];
let coat3_Items = coat1_members.map((number) =>
  <li>{number.name}</li>
);

let wait_members = [
  { id: 13, name: '⑬'},
  { id: 14, name: '⑭'},
  { id: 15, name: '⑮'},
  { id: 16, name: '⑯'},
  { id: 17, name: '⑰'},
  { id: 18, name: '⑱'},
  { id: 19, name: '⑲'},
  { id: 20, name: '⑳'},
  { id: 21, name: '㉑'},
  { id: 22, name: '㉒'},
  { id: 23, name: '㉓'},
  { id: 24, name: '㉔'},
  { id: 25, name: '㉕'},
];
let wait_Items = wait_members.map((number) =>
  <li>{number.name}</li>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="boxContainer">
            <div className="each_coat">
                1コート
                <ul>{coat1_Items}</ul>
                <button onClick={gameEnd}>終了</button>
            </div>
            <div className="each_coat">
                2コート
                <ul>{coat2_Items}</ul>
                <button>終了</button>
            </div>
            <div className="each_coat">
                3コート
                <ul>{coat3_Items}</ul>
                <button>終了</button>
            </div>
        </div>
        <div className="taiki_div">
            <ol>{wait_Items}</ol>
        </div>
        <div className="taiki_div">
            <button onClick={gameEnd}>追加</button>　
            <button onClick={gameEnd}>削除</button>
        </div>
      </header>
    </div>
  );
}

export default App;
