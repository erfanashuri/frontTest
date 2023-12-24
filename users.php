  <?php include('header.php'); ?>
  <!-- ------------ Side Bar -------------------------------------- -->
  <?php include('sidenav.php'); ?>
   <!-- ------------ Content --------------------------------------- -->
   <section class="usercontent-show container">

    <ul class="collapsible user-list hide-on-large-only">     
    </ul>

    <table class="striped container hide-on-med-and-down">
      <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
      </thead>

      <tbody id="table">
      </tbody>
    </table>

    <!-- add button & modal -->
    <a id="add-user__button" class="waves-effect waves-light btn"><i class="material-icons left">group_add</i>add user</a>

    <div class="add-user__background disp-none"></div>

    <div class="add-user__modal container">
      <span class="add-user__modal__header">
        <i class="material-icons">person_add</i>Add User
      </span>

      <div class="input-field col s12">
        <input id="Name" type="text" class="validate">
        <label for="Name">Name</label>
      </div>
      <div class="input-field col s12">
        <input id="username" type="text" class="validate">
        <label for="username">Username</label>
      </div>
      <div class="input-field col s12">
        <input id="address" type="text" class="validate">
        <label for="address">Address</label>
      </div>
      <a class="waves-effect waves-light btn"><i class="material-icons left">done</i>Submit</a>
    </div>
    

    <!-- pagination -->
    <ul class="pagination container">
      <li class="waves-effect"><a href="#!"><i class=" material-icons">chevron_left</i></a></li>

      <li class="waves-effect"><a href="#!"><i class=" material-icons">chevron_right</i></a></li>
    </ul>

  </section>

     
    <script src="assets/materialize/js/materialize.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/users.js"></script>
</body>

</html>