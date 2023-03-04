const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

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
};

document
    .getElementById('signup')
    .addEventListener('submit', signupHandler);
