import React from 'react';
import image from '../img_avatar.png';

const Chat = (props) => {
    return (
        <div className="container">
            <img src={image} alt="Avatar" style={{ width: '100px' }} />
            <h6><b><u>{props.name}</u></b></h6>
            <button className="btn btn-danger right" type="button" onClick={props.onDelete}><i className="fas fa-trash-alt"></i></button>
            <p>{props.message}</p>
        </div>
    )
}

export default Chat;