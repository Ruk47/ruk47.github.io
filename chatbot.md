---
layout: page
title: 챗 봇
---
<html>
<head>
  <title>챗봇 웹사이트</title>
  <style>
    #chatContainer {
      width: 400px;
      height: 500px;
      border: 1px solid #ccc;
      padding: 10px;
      overflow-y: scroll;
    }

    #messageInput {
      width: 100%;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h1>챗봇 웹사이트</h1>

  <div id="chatContainer"></div>

  <input type="text" id="messageInput" placeholder="메시지를 입력하세요" autofocus />

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
