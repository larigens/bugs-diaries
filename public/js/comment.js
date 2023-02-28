const commentHandler = async (event) => {
    event.preventDefault();

    const comment = document.getElementById('comment').value;
    const postId = document.querySelector('#comment-card h4').getAttribute('id');

    console.log(postId);

    if (comment && postId) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to submit comment');
            return;
        }
    }
};

document
    .getElementById('newcomment')
    .addEventListener('submit', commentHandler);
