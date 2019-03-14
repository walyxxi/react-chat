import React from 'react';
import Chat from './Chat';

const ChatList = (props) => {
    let datalist = props.messages.map((item, index) => {
        return (
            <Chat
                key={index}
                name={item.name}
                message={item.message}
                onDelete={() => props.deleteChat(index)}
            />
        )
    })

    return (
        <div>
            {datalist}
            <hr />
        </div>
    )
}

export default ChatList;
