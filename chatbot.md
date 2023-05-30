<html>
<head>
  <title>주식 관련 대화</title>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
  <h1>주식 관련 대화</h1>

  <div id="conversation"></div>

  <input type="text" id="userInput" placeholder="대화를 입력하세요">
  <button onclick="sendUserInput()">전송</button>

  <script>
    async function sendUserInput() {
      var userInput = document.getElementById('userInput').value;
      appendMessage('사용자', userInput);

      try {
        var response = await getOpenAIResponse(userInput);
        appendMessage('OpenAI', response);
      } catch (error) {
        console.error(error);
        appendMessage('OpenAI', '대화 처리 중 오류가 발생했습니다.');
      }
    }

    async function getOpenAIResponse(userInput) {
      var response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: '대화:\n사용자: ' + userInput + '\nOpenAI:',
        max_tokens: 50,
        temperature: 0.7,
        n: 1
      }, {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200 && response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].text.trim();
      } else {
        throw new Error('Failed to get OpenAI response');
      }
    }

    function appendMessage(sender, message) {
      var conversation = document.getElementById('conversation');
      var messageElement = document.createElement('p');
      messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
      conversation.appendChild(messageElement);
    }
  </script>
</body>
</html>
