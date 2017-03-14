<?php
require 'inc/header.php';
require 'inc/nav.php';
?>
<h1 style="text-align:center">Contact Me</h1><br>
  <div class="container">
<div class="row">
  <div class="col-md-6">
      <div class="row">
        <div class="col-md-6">
      <div class="map" id="map" style="width:500px; height:380px"></div>
        </div>
        <div class="col-md-6"></div>
    </div>
  </div>
  <div class="col-md-6">

      <form class="" action="index.html" method="post">
        <div class="form-group">
          <label for="inputName">Name</label>
          <input type="text" name="inputName" class="form-control" id="inputName">
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" name="inputEmail" id="inputEmail" class="form-control" >
        </div>
        <div class="form-group">
          <label for="inputPhone">Phone</label>
          <input type="email" name="inputEmail" id="inputEmail" class="form-control" >
        </div>
        <div class="form-group">
          <label for="inputMess">Message</label>
          <textarea name="inputMess" id="inputMess" class="form-control" rows="5"></textarea>
        </div>
        <input type="button" name="button" value="Ping Me" class="btn btn-primary">
      </form>
    </div>

  </div>
</div>
<?php
require_once 'inc/footer.php';
?>
