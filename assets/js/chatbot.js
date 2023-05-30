// OpenAI API 키
const apiKey = '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';
// OpenAI API 엔드포인트
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// 챗봇 대화 로직을 작성합니다.
async function chatBot(input) {
  try {
    const response = await axios.post(apiUrl, {
      prompt: input,
      max_tokens: 50,
      temperature: 0.6
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('챗봇 응답을 가져오는 중 오류가 발생했습니다:', error);
    return '챗봇 응답을 가져올 수 없습니다.';
  }
}

// 메시지를 화면에 표시하는 함수
function showMessage(message, isUser) {
  const chatContainer = document.getElementById('chatContainer');

  const messageElement = document.createElement('div');
  messageElement.className = isUser ? 'userMessage' : 'botMessage';
  messageElement.textContent = message;

  chatContainer.appendChild(messageElement);

  // 채팅창을 항상 맨 아래로 스크롤
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 사용자의 입력 이벤트를 처리하는 함수
async function handleUserInput(event) {
  if (event.key === 'Enter') {
    const input = event.target.value;

    // 사용자가 입력한 메시지를 화면에 표시
    showMessage(input, true);

    // 챗봇의 응답을 생성
    const response = await chatBot(input);

    // 챗봇의 응답을 화면에 표시
    showMessage(response, false);

    // 입력 필드 비우기
    event.target.value = '';
  }
}

// 페이지가 로드될 때 이벤트 리스너 등록
window.onload = function() {
  const messageInput = document.getElementById('messageInput');
  messageInput.addEventListener('keyup', handleUserInput);
};
