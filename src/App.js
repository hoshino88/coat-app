import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const members = [
  { name: 'ゲン'},
  { name: 'もが'},
  { name: 'ゆり'},
  { name: 'だい'},
  { name: 'まい'},
  { name: 'こば'},
  { name: 'ツカ'},
  { name: 'しめ'},
  { name: 'こー'},
  { name: 'るう'},
  { name: 'くん'},
  { name: 'うめ'},
  { name: 'ゆー'},
  { name: 'あっ'},
  { name: 'みと'},
];

  return (
    <div className="App">
      <header className="App-header">
        <div className="boxContainer">
            <div className="each_coat">
                1コート
                <ul>
                    <li>{members[0].name}</li>
                    <li>{members[1].name}</li>
                    <li>{members[2].name}</li>
                    <li>{members[3].name}</li>
                </ul>
                <button>終了</button>
            </div>
            <div className="each_coat">
                2コート
                <ul>
                    <li>{members[4].name}</li>
                    <li>{members[5].name}</li>
                    <li>{members[6].name}</li>
                    <li>{members[7].name}</li>
                </ul>
                <button>終了</button>
            </div>
            <div className="each_coat">
                3コート
                <ul>
                    <li>{members[8].name}</li>
                    <li>{members[9].name}</li>
                    <li>{members[10].name}</li>
                    <li>{members[11].name}</li>
                </ul>
                <button>終了</button>
            </div>
        </div>
        <div className="taiki_div">
            <ol>
                <li>{members[12].name}</li>
                <li>{members[13].name}</li>
                <li>ゲン</li>
                <li>ああ</li>
                <li>いい</li>
                <li>うう</li>
                <li>ええ</li>
                <li>おお</li>
                <li>ああ</li>
            </ol>
        </div>
      </header>
    </div >
  );
}

export default App;
