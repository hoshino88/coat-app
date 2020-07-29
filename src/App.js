import React from 'react';
import './App.css';

let coat1_members = [
  { id: 1, name: '①'},
  { id: 2, name: '②'},
  { id: 3, name: '③'},
  { id: 4, name: '④'},
];
const intial_coat1_items = coat1_members.map((member) =>
  <li key={member.id}>{member.name}</li>
);

let coat2_members = [
  { id: 5, name: '⑤'},
  { id: 6, name: '⑥'},
  { id: 7, name: '⑦'},
  { id: 8, name: '⑧'},
];
const intial_coat2_items = coat2_members.map((member) =>
  <li key={member.id}>{member.name}</li>
);

let coat3_members = [
  { id: 9, name: '⑨'},
  { id: 10, name: '⑩'},
  { id: 11, name: '⑪'},
  { id: 12, name: '⑫'},
];
const intial_coat3_items = coat3_members.map((member) =>
  <li key={member.id}>{member.name}</li>
);

const wait_members = [
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
const intial_wait_items = wait_members.map((member) =>
  <li key={member.id}>{member.name}</li>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coat1_items: intial_coat1_items,
            coat2_items: intial_coat2_items,
            coat3_items: intial_coat3_items,
            wait_items: intial_wait_items
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                <div className="boxContainer">
                    <div className="each_coat">
                        1コート
                        <ul>{this.state.coat1_items}</ul>
                        <button onClick={this.onClickGameEnd}>終了</button>
                    </div>
                    <div className="each_coat">
                        2コート
                        <ul>{this.state.coat2_items}</ul>
                        <button onClick={this.onClickGameEnd}>終了</button>
                    </div>
                    <div className="each_coat">
                        3コート
                        <ul>{this.state.coat3_items}</ul>
                        <button onClick={this.onClickGameEnd}>終了</button>
                    </div>
                </div>
                <div className="taiki_div">
                    <ol>{this.state.wait_items}</ol>
                </div>
            </header>
            </div>
        );
    }

    onClickGameEnd = () => {
        let wait_items_copy = this.state.wait_items.slice();
        let coat1_items_copy = this.state.coat1_items.slice();

        // コート1に入っていたメンバーを待機コート末尾にコピー
        coat1_items_copy.map((item) => wait_items_copy.push(item));
        // コート1を削除
        coat1_items_copy.map((item) => coat1_items_copy.shift());
        // 待機リスト先頭の4人をコート1にコピー
        coat1_items_copy = wait_items_copy.slice(0, 4);
        // コート1の内容を反映
        this.setState({coat1_items: coat1_items_copy});

        // 待機リスト先頭4人を削除
        wait_items_copy.shift();
        wait_items_copy.shift();
        wait_items_copy.shift();
        wait_items_copy.shift();
        // 待機リストの内容を反映
        this.setState({wait_items: wait_items_copy});
    };    
}

export default App;
