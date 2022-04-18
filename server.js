// 8080은 기본 서버구축으로 설정 lcoalhost
const express = require('express');
const app = express();

app.use("/", function(req, res){
     res.sendFile(__dirname + '/index.html');
});

// 8081 서버는 web socket 방식으로 서버와 통신하도록 설정
app.listen(8080);

const WebSocket = require('ws');

const socket = new WebSocket.Server({
     port: 8081
});

// onclick을 통해 메세지 수신 받은 것 처리하기
socket.on('connection', (ws, req) => {  // eventListener 부착하는 식으로 코드성작성

     ws.on('message', (msg)=>{
          console.log('유저가 보낸거: ' + msg); // 유저에게 받은 메세지 서버로 받아옴
          ws.send('꺼져'); // 웹소켓으로 서버에서 유저로 메세지 전송
     })
});
     /* ws 대신 socket.io 라이브러리를 쓰면, 
     - 연결 끊키면 자동 재접속 가능, 
     - 웹소켓 접속자마다 자동 id 부여, 
     - 모든 웹소켓 유저에게 전체 메세지 전송가능, 
     - 웹소켓 방을 생성 가능 등, 다양한 이점이 있다. 
     */
