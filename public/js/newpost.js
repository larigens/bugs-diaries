let fetchData;
let formEl = document.getElementById('newpost');
let diariesDiv = document.getElementById('diaries');
let usernameEl;

const newpostHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to share post!')
            return;
        }
    }
};

formEl.addEventListener('submit', newpostHandler);

if (window.location.pathname === '/newpost') {
    fetchData = '/api/diaries';
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
                        console.log(data);
                        renderCheckbox(data);
                    }
                })
        }
    })
}

if (window.location.pathname === '/dashboard') {
    fetchData = '/api/users';
    usernameEl = document.getElementById("username-heading");
    fetch(fetchData, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.ok) {
            return response.json()
                .then(function (userData) {
                    if (userData !== null) {
                        console.log(userData);
                        usernameEl.textContent = (userData.username)
                    }
                })
        }
    })
}

function renderCheckbox(data) {
    for (i = 0; i < data.length; i++) {
        var containerEl = document.createElement("div");
        var containerClass = document.createAttribute("class");
        var containerId = document.createAttribute("id");

        containerClass.value = "form-check";
        containerId.value = "diaries-selection";

        containerEl.setAttributeNode(containerClass);
        containerEl.setAttributeNode(containerId);

        var inputEl = document.createElement("input");
        var inputId = document.createAttribute("id");
        var inputClass = document.createAttribute("class");
        var inputType = document.createAttribute("type");
        var inputName = document.createAttribute("name");
        var inputValue = document.createAttribute("value");

        inputId.value = (data[i].id);
        inputClass.value = "form-check-input";
        inputType.value = "flexCheckDefault";
        inputName.value = (data[i].diary_name);
        inputValue.value = "";

        inputEl.setAttributeNode(inputId);
        inputEl.setAttributeNode(inputClass);
        inputEl.setAttributeNode(inputType);
        inputEl.setAttributeNode(inputName);
        inputEl.setAttributeNode(inputValue);

        var labelEl = document.createElement("label");
        var labelClass = document.createAttribute("class");
        var labelFor = document.createAttribute("for");

        labelClass.value = "form-check-label";
        labelFor.value = "flexCheckDefault";
        labelEl.setAttributeNode(labelClass);
        labelEl.setAttributeNode(labelFor);

        labelEl.textContent = (data[i].diary_name);

        containerEl.append(inputEl);
        containerEl.append(labelEl);
        diariesDiv.append(containerEl);
    }
}