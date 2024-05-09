document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Perform login validation here
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // For this example, let's just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);
  
    // You can add further logic here, such as making an AJAX request to validate the credentials
  });
  