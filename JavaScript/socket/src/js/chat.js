'use strict';

const socket = io(); // socket 에 client socket.io 담김

const nickName = document.querySelector('#nickName');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendBtn = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container')

// 'Enter' === 13
chatInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        send();
        chatInput.value = '';
    }
});

sendBtn.addEventListener('click', send);

function send(){
    const param = {
        name: nickName.value,
        msg: chatInput.value
    }
    socket.emit('chatting', param); // 보낼 떄
}

socket.on('chatting', (data) => {
    console.log(data)
    const { name, msg, time } = data;
    const item = new LiModel(name, msg, time);
    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight);
});// 받을 때

function LiModel(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = () => {
        const li = document.createElement('li');
        li.classList.add(nickName.value === name ? "sent" : "received");
        const dom = `
        <span class="profile">
          <span class="user">${this.name}</span>
          <img src="https://placeimg.com/50/50/any" alt="any" />
        </span>
        <span class="message">${this.msg}</span>
        <span class="time">${this.time}</span>
      `
      li.innerHTML = dom;
      chatList.appendChild(li);
    }
}