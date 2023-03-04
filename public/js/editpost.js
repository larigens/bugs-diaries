const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('updatedTitle').value;
    const content = document.getElementById('updatedContent').value;
    const id = document.querySelector('.card-body').getAttribute('id');

    if (title && content && id) {
        await fetch('/api/posts/editpost', {
            method: 'PUT',
            body: JSON.stringify({ title, content, id }),
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
                location.replace('/posts');
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }
}

document
    .getElementById('editpost')
    .addEventListener('submit', editPostHandler);