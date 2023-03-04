const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // checks the length of the password variable, and if it's less than 8, it displays an alert. 
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    else {
        await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                console.log(data);
                location.replace('/');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
};

document
    .getElementById('signup')
    .addEventListener('submit', signupHandler);
