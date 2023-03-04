const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert(data.message); // Displays an alert to the user with the message returned by the server. 
                throw new Error('Something went wrong');
            }
        })
        .then(data => {
            console.log(data);
            document.location.replace('/dashboard');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document
    .getElementById('login')
    .addEventListener('submit', loginHandler);
