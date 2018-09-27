import React, { Component } from 'react';
import Form from './Form';
import { Auth } from 'aws-amplify';

const REQUEST_URL_EDIT = 'http://localhost:3000/messages/';

class Edit extends Component {
  constructor(props){
    super(props);
    const message_id = this.props.match.params.id
    console.log(message_id);
    // console.log(message_body);
    // const message_body = this.props.match.params.body
    let editMessage = this.state = { id: message_id, name: '', body: '' };
    let user = Auth.currentUserPoolUser();
    user.then((string) => {
      editMessage.name = string.username
      console.log(string.username);
      }, (error) => {
      console.error("error", error.message);
    });
    // this.state = {
    //   id: message_id,
    //   name: 'shinta',
    //   body: ''
    // };
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL_EDIT + this.state.id)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          name: responseData.name,
          body: responseData.body
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleInputValue = (event) => {
    const field = event.target.name;
    this.state[field] = event.target.value;
    this.setState({
      [field]: this.state[field]
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(REQUEST_URL_EDIT + this.state.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          name: this.state.name,
          body: this.state.body,
          updated_at: new Date()
        }
      })
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      this.props.history.push('/');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render(){
    const name = this.state.name;
    const body = this.state.body;
    console.log(body);
    return(
      <div>
        <p>Edit Message</p>
          <Form submitValue='Submit'
           name={ name }
           body={ body }
           parentSubmit={ this.handleSubmit }
           parentInputValue={ this.handleInputValue } />
      </div>
    );
  }
}

export default Edit;