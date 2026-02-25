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

function login() {
    event.preventDefault(); 

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    clearError(usernameInput);
    clearError(passwordInput);

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value;

    const registeredUsersJSON = localStorage.getItem('quizomaniyaUsers');
    const registeredUsers = registeredUsersJSON ? JSON.parse(registeredUsersJSON) : {};

    if (!registeredUsers.hasOwnProperty(enteredUsername)) {
        displayError(usernameInput, 'Wrong username');
        return;
    }

    const storedPassword = registeredUsers[enteredUsername];

    if (storedPassword !== enteredPassword) {
        displayError(passwordInput, 'Wrong password');
        return;
    }

    alert(`Welcome, ${enteredUsername}!`);
    
    localStorage.setItem('currentUser', enteredUsername);
    
    window.location.href = '../index.html'; 
}