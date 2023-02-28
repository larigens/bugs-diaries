
const getDiary = (id) => {
    window.location.replace(`/diaries/${id}`)
}

const getPost = (id) => {
    window.location.replace(`/post/${id}`)
}

const editPost = (id) => {
    window.location.replace(`/post/${id}/editpost`)
}

const deletePost = async (id) => {
    const response = await fetch('/api/posts/delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/posts');
    } else {
        alert('Failed to edit post');
        return;
    }
}