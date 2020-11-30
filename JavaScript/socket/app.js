// 서버 구동 자바스크립트 파일
// nodemon 자동으로 서버가 재시작

// require를 쓰면 자동적으로 node module을 향함. 경로 없이 이름만 써도 됨.
const express = require('express');
const http = require('http') // node.js 의 core module.
const app = express();
const path = require('path'); // node.js 의 기본 module. url을 쉽게 만들 수 있게
const server = http.createServer(app) // express로 만든 app을 server에 담아서 http로 실행될 수 있게.
const socketIO = require('socket.io');
const moment = require('moment');

const io = socketIO(server);

// __dirname 프로젝트 폴더를 가르킴. 운영체제마다 경로 '\'가 다르기에 join
// __dirname\src 서버 생성
app.use(express.static(path.join(__dirname, 'src')));

// 환경에 포트가 지정돼 있으면 지정된 포트 아니면 5000번
const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
    // socket.on('채팅아이디', 실행함수);
    socket.on('chatting', (data) => {
        const {name, msg} = data; //프론트에서 클릭 시 넘겨주는 데이터
        io.emit('chatting',{
            name,
            msg,
            time: moment(new Date()).format('HH:mm A')
        });
    });
});

// 웹서버 실행 app.listen(포트, 명령) -> app이 server에 담김.
server.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});