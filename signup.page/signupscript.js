function clearError(element) {
    element.style.borderColor = "";
    const errorDisplay = element.nextElementSibling;
    if (errorDisplay && errorDisplay.classList.contains('error-message')) {
        errorDisplay.remove();
    }
}

function displayError(element, message) {
    element.style.borderColor = "red";
    clearError(element);

    const errorDisplay = document.createElement('p');
    errorDisplay.classList.add('error-message');
    errorDisplay.style.color = 'red';
    errorDisplay.style.fontSize = '0.9em';
    errorDisplay.style.marginTop = '5px';
    errorDisplay.textContent = message;

    element.parentNode.insertBefore(errorDisplay, element.nextSibling);
}

function signup() {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    [usernameInput, emailInput, passwordInput].forEach(clearError);

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    let isValid = true;

    const registeredUsersJSON = localStorage.getItem('quizomaniyaUsers');
    let registeredUsers = registeredUsersJSON ? JSON.parse(registeredUsersJSON) : {};
    
    if (username.length < 3) {
        displayError(usernameInput, 'Username must be at least 3 characters.');
        isValid = false;
    }

    if (password.length < 6) {
        displayError(passwordInput, 'Password must be at least 6 characters.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError(emailInput, 'Invalid email format.');
        isValid = false;
    }

    if (registeredUsers.hasOwnProperty(username)) {
        displayError(usernameInput, 'This username is already taken.');
        isValid = false;
    }

    if (isValid) {
        registeredUsers[username] = password; 

        localStorage.setItem('quizomaniyaUsers', JSON.stringify(registeredUsers));
        
        alert('Registration successful! Redirecting to login page.');

        window.location.href = '../login.page/login.html';
    }
}