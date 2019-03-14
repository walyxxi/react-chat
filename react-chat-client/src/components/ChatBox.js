import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';

export default class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{ name: 'Waliyul Ardy', message: 'Hello. How are you?' }, { name: 'Himawan', message: 'Hello. Kapan Nikah?' }]
    }
    this.postChat = this.postChat.bind(this)
    this.deleteChat = this.deleteChat.bind(this);    
  }

  postChat(item) {
    this.setState((state) => ({
      data: [...state.data, item]
    }))
  }

  deleteChat(index) {
    this.setState((state) => ({
      data: state.data.filter((item, i) => i !== index)
    }))
  }

  render() {
    return (
      <div>
        <div className="container darker text-center">
          <h4><font color="blue"><b>REACT CHAT</b></font></h4>
        </div>
        <hr />
        <ChatList messages={this.state.data} deleteChat={this.deleteChat} />
        <ChatForm postChat={this.postChat} />
      </div>
    )
  }
}