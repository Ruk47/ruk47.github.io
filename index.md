---
layout: page
title: 나만의 웹사이트 만들기
subtitle: GitHub 오픈 소스를 활용한 웹사이트 만들기
cover-img: /assets/img/Test.jpg
---

<html>
<head>
  <title>주식 수익 계산기</title>
</head>
<body>
  <h1>주식 수익 계산기</h1>

  <p><label for="currentPrice">현재 주가:</label></p>
  <input type="number" id="currentPrice">

  <p><label for="buyQuantity">매수 수량:</label></p>
  <input type="number" id="buyQuantity">

  <p><label for="sellPrice">매도 주가:</label></p>
  <input type="number" id="sellPrice">

  <p><label for="sellQuantity">매도 수량:</label></p>
  <input type="number" id="sellQuantity">

  <p><button onclick="calculate()">계산</button></p>

  <p id="totalReturn"></p>
  <p id="totalProfit"></p>

  <script>
    function calculate() {
      var currentPrice = parseFloat(document.getElementById('currentPrice').value);
      var buyQuantity = parseFloat(document.getElementById('buyQuantity').value);
      var sellPrice = parseFloat(document.getElementById('sellPrice').value);
      var sellQuantity = parseFloat(document.getElementById('sellQuantity').value);

      var totalReturn = ((sellPrice - currentPrice) / currentPrice) * 100;
      var totalProfit = (sellPrice - currentPrice) * sellQuantity;

      document.getElementById('totalReturn').textContent = '총 수익률: ' + totalReturn.toFixed(2) + '%';
      document.getElementById('totalProfit').textContent = '총 수익 가격: ' + totalProfit.toFixed(2);
    }
  </script>
</body>
</html>


