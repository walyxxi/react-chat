import React, { Component } from 'react';
import axios from 'axios';
import ChatList from './ChatList';
import ChatForm from './ChatForm';

export default class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.postChat = this.postChat.bind(this)
    this.deleteChat = this.deleteChat.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  postChat(item) {
    this.setState((state) => ({
      data: [...state.data, item]
    }))
    axios.post('http://localhost:3001/api', item)
      .then(res => {
        console.log(res.data);
      })
  }

  deleteChat(id) {
    this.setState((state) => ({
      data: state.data.filter((item) => item.id !== id)
    }))
    axios.delete(`http://localhost:3001/api/${id}`)
      .then(res => {
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <div className="container darker text-center">
          <h4><font color="blue"><b>REACT CHAT</b></font></h4>
        </div>
        <hr />
        <ChatList datas={this.state.data} deleteChat={this.deleteChat} />
        <ChatForm postChat={this.postChat} />
      </div>
    )
  }
}