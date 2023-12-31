<!DOCTYPE html>
<html lang="en">

<head id='header'>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Front-End</title>
    <link rel="shortcut icon" href="assets/images/front-logoNobackground.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/materialize/css/materialize.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <!-- ------------ Nav Bar --------------------------------------- -->
    <nav class="nav-extended">
        <!-- logo & menu -->
        <div class="nav-wrapper">     
            <a href="index.php" class="logo brand-logo blue-text text-darken-2">
                <img src="assets/images/front-logoNobackground.png" class="circle">
                <span>Front-End</span>
            </a>

          <a href="#" data-target="mobile-demo" class="sidenav-trigger "><i class="material-icons">menu</i></a>

          <ul id="nav-mobile" class="right hide-on-med-and-down ">

            <li><a class="waves-effect disp-flex-center" href="./users.php"><i class="material-icons">people_outline</i>Users Manager</a></li>

            <li><a class="waves-effect disp-flex-center" href="./ecom.php"><i class="material-icons">shop</i>Shop</a></li>

            <li><a class="waves-effect disp-flex-center" href="#!"><i class="material-icons">shopping_cart</i>Cart</a></li>

            <li><a class="waves-effect disp-flex-center" href="./index.php"><i class="material-icons">home</i>Home</a></li>
          </ul>
        </div>
        <!-- search-->
        <div class="search-tab__container">
          <div class="main-search__container">
            <div class="circle-icon__container">
              <i class="material-icons blue-text text-darken-4">search</i>
            </div>
          <input type="text" class="browser-default main-search__input" placeholder="Search . . .">
          </div>
          <!-- Switch -->
          <div class="switch">
            <label class="switch-container">
              <i class="material-icons">wb_sunny</i>
              <input type="checkbox" id="theme-changer2">
              <span class="lever"></span>
              <i class="material-icons">brightness_3</i>
            </label>
          </div>
        </div>
      </nav>