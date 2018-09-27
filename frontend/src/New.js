import React, { Component } from 'react';
import Form from './Form';
import { Auth } from 'aws-amplify';
// Request を送るURLを指定(RailsのAPIサーバ)
const REQUEST_URL = 'http://localhost:3000/messages.json'

class New extends Component {
  // コンポーネントの初期化 インスタンスを作成したタイミングで実行される
  constructor(props){
    // super(props)をよび出すことで、thisを使用できる
    super(props);
    // Message の nameとbodyをthis.stateにセットする
    let currentUser = this.state = { name: '', body: '' };
    let user = Auth.currentUserPoolUser();
    user.then((string) => {
      currentUser.name = string.username
      console.log(string.username);
      }, (error) => {
      console.error("error", error.message);
    });
    // thisをbindする
    // this.handleInputValue = this.handleInputValue.bind(this);
  }
  // handleInputValueを実装
  // handleInputValue(event){
  handleInputValue = (event) => {
    const field = event.target.name;
    this.state[field] = event.target.value;
    // setState することでレンダリングされる
    this.setState({
      [field]: this.state[field]
    });
  }
  // submitがクリックされた時の処理
  handleSubmit = (event) => {
    function getUniqueStr(myStrong){
      var strong = 1000;
      if (myStrong) strong = myStrong;
      return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
     }
    var uuid = getUniqueStr()
    // デフォルトの遷移を抑制する
    event.preventDefault();
    // $.ajax()に代替する fetch
    //結果がPromiseで返される
    fetch(REQUEST_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // JSON.stringifyでJSON文字列に変換する
      body: JSON.stringify({
        message: {
          name: this.state.name,
          body: this.state.body,
          created_at: new Date(),
          updated_at: new Date(),
          id: uuid
        }
      })
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      // 一覧コンポーネントを表示する
      this.props.history.push('/');
    })
    .catch((err) => {
      console.error(err);
    });
  }
  render() {
    // const にセットすることで、 value= { this,state.name }と書かなくて済む
    const { name, body } = this.state;    
    return (
      // return では1つのコンポーネントしか返すことが出来ない
      // return (
      //       <div>...</div>
      //       <div>...</div>
      // );
      // ↑はエラーとなる
      <div>
        <p>New Message</p>
          <Form submitValue='Submit'
           name={ name }
           body={ body }
           parentSubmit={ this.handleSubmit }
           parentInputValue={ this.handleInputValue } />
      </div>
    );
  }
}

export default New;