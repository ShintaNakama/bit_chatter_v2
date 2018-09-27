import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    // Form.js にclickableというstateを追加する。初期値は'disabled'
    this.state = {
      clickable: 'disabled'
    };
  }

  // Form.jsの内のhandleInputValueで、親のparentUnputValueとsetStateの２つの処理を実行する。
  handleInputValue = (event) => {
    this.props.parentInputValue(event);
    // event.target.value(=body)が空かどうか判断し、'disabled' or falseをセットする
    this.setState({
      clickable: event.target.value.trim() == '' ? 'disabled' : false
    });
  }
  render() {
    // New.js, Edit.jsのpropsをセットします。
    const { name, body, submitValue } = this.props;
    const { clickable } = this.state;
    return (
      // this.props.xxxx という記述で親コンポーネントの関数実行します。
      <div class="form-group" onSubmit={ this.props.parentSubmit }>
        <form>
          {/* <label>title:</label> */}
          {/* parentInputValueではなく、Form.js のhandleInputValueをかませる */}
          <input type="hidden" name="name" value={ name } onChange={ this.handleInputValue } />
          <label>Message</label><br/>
          <textarea class="form-control" rows="5" name="body" value={ body } onChange={ this.handleInputValue } /><br/>
          <button type="submit" class="btn btn-success" value={ submitValue } disabled={ clickable } >submit</button>
        </form>
      </div>
    );
  }
}

export default Form;