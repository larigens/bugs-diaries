const getDiary = (id) => {
    location.replace(`/diaries/${id}`)
}

const getPost = (id) => {
    location.replace(`/post/${id}`)
}

const editPost = (id) => {
    location.replace(`/post/${id}/editpost`)
}

const deletePost = async (id) => {
    const response = await fetch('/api/posts/delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        location.replace('/posts');
    } else {
        alert('Failed to delete post!');
        return;
    }
}

// Retrieves the username of the currently logged-in user. 
if (window.location.pathname === '/dashboard') {
    fetchData = '/api/users';
    fetch(fetchData, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.ok) {
            return response.json()
                .then(function (data) {
                    if (data !== null) {
                        renderUsername(data);
                    }
                })
        }
    })
}
// Creates HTML elements to render the retrieved data.
function renderUsername(data) {
    var h2Tag = document.createElement("h2");
    var h2TagClass = document.createAttribute("class");

    h2TagClass.value = "ms-2 pb-2 pt-4 mt-5 display-4 heading-font dark-accent";
    h2Tag.setAttributeNode(h2TagClass);
    h2Tag.textContent = "Welcome "

    var spanTag = document.createElement("span");
    var spanTagClass = document.createAttribute("class");
    spanTagClass.value = "gradient-text";
    spanTag.setAttributeNode(spanTagClass);
    spanTag.textContent = (data.username) + "!";

    h2Tag.append(spanTag);

    document.getElementById('dashboard').append(h2Tag)
}
