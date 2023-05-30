// 그래프를 그릴 데이터를 준비합니다.
var data = {
    labels: ['일자1', '일자2', '일자3', ...], // x축에 표시할 레이블
    datasets: [
      {
        label: '수익률', // 그래프에 대한 레이블
        data: [수익률1, 수익률2, 수익률3, ...], // 수익률 데이터 배열
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // 그래프 영역 배경색
        borderColor: 'rgba(0, 123, 255, 1)', // 그래프 선 색상
        borderWidth: 1 // 그래프 선 두께
      }
    ]
  };
  
  // 그래프를 그릴 캔버스 엘리먼트를 선택합니다.
  var ctx = document.getElementById('stockChart').getContext('2d');
  
  // Chart 객체를 생성하고 그래프를 그립니다.
  var stockChart = new Chart(ctx, {
    type: 'line', // 선 그래프로 설정
    data: data,
    options: {
      // 그래프 옵션 설정
    }
  });
  