const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('updatedTitle').value;
    const content = document.getElementById('updatedContent').value;
    const id = document.querySelector('.card-body').getAttribute('id');

    if (title && content && id) {
        const response = await fetch('/api/posts/editpost', {
            method: 'PUT',
            body: JSON.stringify({ title, content, id }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/posts');
        } else {
            alert('Failed to edit post');
            return;
        }
    }
}

document
    .getElementById('editpost')
    .addEventListener('submit', editPostHandler);