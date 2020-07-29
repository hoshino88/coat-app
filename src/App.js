import React from 'react';
import './App.css';

let coat_members = [[
    { id: 1, name: '①' },
    { id: 2, name: '②' },
    { id: 3, name: '③' },
    { id: 4, name: '④' },
], [
    { id: 5, name: '⑤' },
    { id: 6, name: '⑥' },
    { id: 7, name: '⑦' },
    { id: 8, name: '⑧' },
], [
    { id: 9, name: '⑨' },
    { id: 10, name: '⑩' },
    { id: 11, name: '⑪' },
    { id: 12, name: '⑫' },
]];
const intial_coat_items1 = coat_members[0].map((member) =>
    <li key={member.id}>{member.name}</li>);
const intial_coat_items2 = coat_members[1].map((member) =>
    <li key={member.id}>{member.name}</li>);
const intial_coat_items3 = coat_members[2].map((member) =>
    <li key={member.id}>{member.name}</li>);

const wait_members = [
    { id: 13, name: '⑬' },
    { id: 14, name: '⑭' },
    { id: 15, name: '⑮' },
    { id: 16, name: '⑯' },
    { id: 17, name: '⑰' },
    { id: 18, name: '⑱' },
    { id: 19, name: '⑲' },
    { id: 20, name: '⑳' },
    { id: 21, name: '㉑' },
    { id: 22, name: '㉒' },
    { id: 23, name: '㉓' },
    { id: 24, name: '㉔' },
    { id: 25, name: '㉕' },
];
const intial_wait_items = wait_members.map((member) =>
    <li key={member.id}>{member.name}</li>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coat_items: [intial_coat_items1, intial_coat_items2, intial_coat_items3],
            wait_items: intial_wait_items
        };
        this.onClickGameEnd = this.onClickGameEnd.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="boxContainer">
                        <div className="each_coat">
                            1コート
<ul>{this.state.coat_items[0]}</ul>
                            <button onClick={this.onClickGameEnd.bind(this, 0)}>終了</button>
                        </div>
                        <div className="each_coat">
                            2コート
<ul>{this.state.coat_items[1]}</ul>
                            <button onClick={this.onClickGameEnd.bind(this, 1)}>終了</button>
                        </div>
                        <div className="each_coat">
                            3コート
<ul>{this.state.coat_items[2]}</ul>
                            <button onClick={this.onClickGameEnd.bind(this, 2)}>終了</button>
                        </div>
                    </div>
                    <div className="taiki_div">
                        <ol>{this.state.wait_items}</ol>
                    </div>
                </header>
            </div>
        );
    }

    onClickGameEnd(i) {
        let wait_items_copy = this.state.wait_items.slice();
        let coat_items_copy = this.state.coat_items.slice();

        // コート1に入っていたメンバーを待機コート末尾にコピー
        coat_items_copy[i].map((item) => wait_items_copy.push(item));
        // コート1のメンバーを全削除
        coat_items_copy[i].map((item) => coat_items_copy[i].shift());
        // 待機リスト先頭の4人をコート1にコピー
        coat_items_copy[i] = wait_items_copy.slice(0, 4);
        // コート1の内容を反映
        this.setState({ coat_items: coat_items_copy });

        // 待機リスト先頭4人を削除
        wait_items_copy.shift();
        wait_items_copy.shift();
        wait_items_copy.shift();
        wait_items_copy.shift();
        // 待機リストの内容を反映
        this.setState({ wait_items: wait_items_copy });
    }
}

export default App;
