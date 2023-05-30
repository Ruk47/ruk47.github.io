---
layout: page
title: Cloud Researcher
subtitle: Artificial Intelligence Research Laboratory, ETRI
cover-img: /assets/img/itu-seokho-m4.jpg
---

<!DOCTYPE html>
<html>
<head>
  <title>주식 수익 계산기</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>주식 수익 계산기</h1>
    <form id="calculatorForm">
      <div class="input-group">
        <label for="currentPrice">현재 주가:</label>
        <input type="number" id="currentPrice" required>
      </div>
      <div class="input-group">
        <label for="buyQuantity">매수 수량:</label>
        <input type="number" id="buyQuantity" required>
      </div>
      <div class="input-group">
        <label for="sellPrice">매도 주가:</label>
        <input type="number" id="sellPrice" required>
      </div>
      <div class="input-group">
        <label for="sellQuantity">매도 수량:</label>
        <input type="number" id="sellQuantity" required>
      </div>
      <button type="submit">계산</button>
    </form>
    <div id="resultContainer">
      <p id="totalReturn">총 수익률: </p>
      <p id="totalProfit">총 수익 가격: </p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.input-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="number"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

#resultContainer {
  margin-top: 20px;
}

#totalReturn, #totalProfit {
  font-weight: bold;
}

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var currentPrice = parseFloat(document.getElementById('currentPrice').value);
  var buyQuantity = parseFloat(document.getElementById('buyQuantity').value);
  var sellPrice = parseFloat(document.getElementById('sellPrice').value);
  var sellQuantity = parseFloat(document.getElementById('sellQuantity').value);

  var totalReturn = ((sellPrice - currentPrice) / currentPrice) * 100;
  var totalProfit = (sellPrice - currentPrice) * sellQuantity;

  document.getElementById('totalReturn').textContent = '총 수익률: ' + totalReturn.toFixed(2) + '%';
  document.getElementById('totalProfit').textContent = '총 수익 가격: ' + totalProfit.toFixed(2);
});
