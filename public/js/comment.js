const commentHandler = async (event) => {
    event.preventDefault();

    const comment = document.getElementById('comment').value;
    const postId = document.querySelector('#comment-card h4').getAttribute('id');

    if (comment && postId) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, postId }),
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
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }
};

document
    .getElementById('newcomment')
    .addEventListener('submit', commentHandler);
