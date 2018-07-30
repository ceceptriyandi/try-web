// OPEN/HIDE PASSWORD
function viewPassword(){
  var passwordInput = document.getElementById('inputPassword');
    var confirmpassInput=document.getElementById('confirm_password')
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password' && confirmpassInput.type == 'password'){
    passwordInput.type='text';
      confirmpassInput.type='text'
    passStatus.className='fa fa-eye';
    
  }
  else{
    passwordInput.type='password';
      confirmpassInput.type='password'
    passStatus.className='fa fa-eye-slash';
  }
}

// CHECK FOR PASSWORD MATCH
//        var password = document.getElementById("inputPassword"), confirm_password = document.getElementById("confirm_password");
//        function validatePassword(){
//            if(password.value != confirm_password.value) {
//                confirm_password.setCustomValidity("Passwords Don't Match");
//            } else {
//                confirm_password.setCustomValidity('');
//            }
//        }
//        password.onchange = validatePassword;
//        confirm_password.onkeyup = validatePassword;
        
// FORM VALIDATION
        document.addEventListener("DOMContentLoaded", function() {

    // JavaScript form validation
    var checkPassword = function(str)
    {
      var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return re.test(str);
    };

    var checkForm = function(e)
    {
      if(this.username.value == "") {
        alert("Error: Username cannot be blank!");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
      re = /^\w+$/;
      if(!re.test(this.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        this.username.focus();
        e.preventDefault();
        return;
      }
      if(this.inputPassword.value != "" && this.inputPassword.value == this.confirm_password.value) {
        if(!checkPassword(this.inputPassword.value)) {
          alert("The password you have entered is not valid!");
          this.inputPassword.focus();
          e.preventDefault();
          return;
        }
      } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        this.inputPassword.focus();
        e.preventDefault();
        return;
      }
      alert("Both username and password are VALID!");
    };

    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", checkForm, true);

    // HTML5 form validation
    var supports_input_validity = function()
    {
      var i = document.createElement("input");
      return "setCustomValidity" in i;
    }

    if(supports_input_validity()) {
      var usernameInput = document.getElementById("username");
      usernameInput.setCustomValidity(usernameInput.title);

      var passwordInput = document.getElementById("inputPassword");
      passwordInput.setCustomValidity(passwordInput.title);

      var confirm_passwordInput = document.getElementById("confirm_password");

      // input key handlers
      usernameInput.addEventListener("keyup", function(e) {
        usernameInput.setCustomValidity(this.validity.patternMismatch ? usernameInput.title : "");
      }, false);

      passwordInput.addEventListener("keyup", function(e) {
        this.setCustomValidity(this.validity.patternMismatch ? passwordInput.title : "");
        if(this.checkValidity()) {
          confirm_passwordInput.pattern = RegExp.escape(this.value);
          confirm_passwordInput.setCustomValidity(confirm_passwordInput.title);
        } else {
          confirm_passwordInput.pattern = this.pattern;
          confirm_passwordInput.setCustomValidity("");
        }
      }, false);

      confirm_passwordInput.addEventListener("keyup", function(e) {
        this.setCustomValidity(this.validity.patternMismatch ? confirm_passwordInput.title : "");
      }, false);
    }
  }, false);
