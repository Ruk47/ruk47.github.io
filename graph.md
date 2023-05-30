---
layout: page
title: 평가손익과 수익률 그래프
cover-img: /assets/img/money.jpg
---

<html>
<head>
  <title>평가손익 그래프</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <canvas id="profitChart" width="400" height="200"></canvas>

  <p><label for="previousValue">저번달 현재평가액:</label></p>
  <input type="number" id="previousValue">

  <p><label for="currentValue">이번달 현재평가액:</label></p>
  <input type="number" id="currentValue">

  <p><button onclick="calculateProfit()">계산</button></p>

  <script>
    function calculateProfit() {
      var previousValue = parseFloat(document.getElementById('previousValue').value);
      var currentValue = parseFloat(document.getElementById('currentValue').value);

      var profit = currentValue - previousValue;
      var profitPercentage = (profit / previousValue) * 100;

      var ctx = document.getElementById('profitChart').getContext('2d');
      var chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['평가손익', '수익률'],
          datasets: [{
            label: '평가손익과 수익률',
            data: [profit, profitPercentage],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)', // 평가손익 색상
              'rgba(75, 192, 192, 0.2)', // 수익률 색상
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)', // 평가손익 테두리 색상
              'rgba(75, 192, 192, 1)', // 수익률 테두리 색상
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  </script>
</body>
</html>

