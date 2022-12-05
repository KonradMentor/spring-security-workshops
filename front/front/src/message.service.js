import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/message";

const getMessages = () => {
    return axios.get(API_URL);
};

const getMessage = (id) => {
    return axios.get(API_URL + "/" + id);
};

const createMessage = ({title, content}) => {
    let customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let json = JSON.stringify({title: title, content: content})
    return axios.post(API_URL, json, customConfig);
};

const MessageService = {
    getMessages,
    getMessage,
    createMessage
}

export default MessageService;
