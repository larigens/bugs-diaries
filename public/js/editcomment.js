const editCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.getElementById('updatedComment').value;
    const id = document.querySelector('.card-body').getAttribute('id');

    await fetch('/api/comments/editcomment', {
        method: 'PUT',
        body: JSON.stringify({ comment, id }),
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
            document.location.replace(`/post/${data.post_id}`);
        })
        .catch(error => {
            console.error('Error:', error);
        })

}

document
    .getElementById('editcomment')
    .addEventListener('submit', editCommentHandler);