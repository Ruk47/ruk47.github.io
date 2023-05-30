<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stock Website</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Stock Website</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Stocks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="display-4">Welcome to Stock Website</h1>
          <p class="lead">Get real-time stock information and manage your portfolio with ease.</p>
          <a href="#" class="btn btn-primary">Get Started</a>
        </div>
        <div class="col-md-6">
          <img src="stock-image.jpg" alt="Stock Image" class="img-fluid">
        </div>
      </div>
    </div>
  </section>

  <section class="stocks">
    <div class="container">
      <h2 class="text-center mb-5">Popular Stocks</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="stock1.jpg" class="card-img-top" alt="Stock 1">
            <div class="card-body">
              <h5 class="card-title">Company A</h5>
              <p class="card-text">Stock Price: $100</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="stock2.jpg" class="card-img-top" alt="Stock 2">
            <div class="card-body">
              <h5 class="card-title">Company B</h5>
              <p class="card-text">Stock Price: $200</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="stock3.jpg" class="card-img-top" alt="Stock 3">
            <div class="card-body">
              <h5 class="card-title">Company C</h5>
              <p class="card-text">Stock Price: $300</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2023 Stock Website. All rights reserved.</p>
  </footer>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
