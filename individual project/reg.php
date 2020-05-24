<!DOCTYPE html>
<!-- server end scripting -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
<h1>Congratulations! You are one of us now.</h1>
  <p class="details">Welcome <?php echo $_POST["name"]; ?>
    <br>
Your email address is: <?php echo $_POST["email"]; ?>
<br>
Your contact no. is: <?php echo $_POST["contact"]; ?>
<br>
</p>
</body>
</html>