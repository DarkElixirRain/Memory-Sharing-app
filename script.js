document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
  
    if (username === 'user' && password === 'pass') {
    
        window.location.href = 'index.html'; 
    } else {
        alert('Invalid username or password. Please try again.');
    }
});