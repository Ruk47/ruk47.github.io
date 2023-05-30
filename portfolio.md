---
layout: page
title: 포트폴리오
cover-img: /assets/img/portfolio.jpg
---

<html>
<head>
  <title>포트폴리오 관리</title>
</head>
<body>
  <h1>포트폴리오 관리</h1>

  <form id="portfolioForm" onsubmit="return false;">
    <label for="stockName">주식 이름:</label>
    <input type="text" id="stockName" required>

    <label for="stockQuantity">보유 수량:</label>
    <input type="number" id="stockQuantity" required>

    <label for="purchasePrice">매수 가격:</label>
    <input type="number" id="purchasePrice" required>

    <button onclick="addStockToPortfolio()">추가</button>
  </form>

  <div id="portfolioTable"></div>

  <script>
    var portfolio = [];

    function addStockToPortfolio() {
      var stockName = document.getElementById('stockName').value;
      var stockQuantity = document.getElementById('stockQuantity').value;
      var purchasePrice = document.getElementById('purchasePrice').value;

      var stock = {
        name: stockName,
        quantity: stockQuantity,
        price: purchasePrice
      };

      portfolio.push(stock);
      renderPortfolioTable();
      clearInputFields();
    }

    function renderPortfolioTable() {
      var portfolioTable = document.getElementById('portfolioTable');
      portfolioTable.innerHTML = '';

      if (portfolio.length === 0) {
        portfolioTable.textContent = '포트폴리오가 비어 있습니다.';
        return;
      }

      var table = document.createElement('table');
      var headerRow = table.insertRow();
      headerRow.innerHTML = '<th>주식 이름</th><th>보유 수량</th><th>매수 가격</th>';

      portfolio.forEach(function(stock) {
        var row = table.insertRow();
        row.innerHTML = '<td>' + stock.name + '</td><td>' + stock.quantity + '</td><td>' + stock.price + '</td>';
      });

      portfolioTable.appendChild(table);
    }

    function clearInputFields() {
      document.getElementById('stockName').value = '';
      document.getElementById('stockQuantity').value = '';
      document.getElementById('purchasePrice').value = '';
    }
  </script>
</body>
</html>
