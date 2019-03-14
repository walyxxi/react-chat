import React, { Component } from 'react';

export default class ChatForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            message: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value })
    }

    handleSubmit(e) {
        if (this.state.name && this.state.message) {
            this.props.postChat({ name: this.state.name, message: this.state.message })

            this.setState({ name: "", message: "" })
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="container darker">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" placeholder="Your Name" name="name"
                        onChange={this.handleNameChange} value={this.state.name} />
                    <div style={{ height: '5px' }}><br /></div>
                    <textarea className="form-control" placeholder="Write your chat here!" name="message" 
                        onChange={this.handleMessageChange} value={this.state.message}></textarea>
                    <div style={{ height: '5px' }}><br /></div>
                    <button type="submit" className="btn btn-primary"><i className="fas fa-share-square"></i> Post</button>
                </form>
            </div>
        )
    }
}
