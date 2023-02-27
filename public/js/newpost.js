let fetchData;
let diariesDiv = document.getElementById('diaries');
let usernameEl;

const newpostHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const diariesIds = await getSelectedDiaries();

    const response = await fetch('/api/posts/newpost', {
        method: 'POST',
        body: JSON.stringify({ title, content, diariesIds }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to share post!')
        return;
    }
}

function getSelectedDiaries() {
    const diariesIdsArr = []; // Creates an empty array to store the input IDs
    const diaries = document.getElementsByTagName('input');
    // Convert the HTMLCollection to an array using the spread operator.
    const diariesArr = [...diaries];
    // Loop through each checkbox that was selected and push its ID to the array
    diariesArr.forEach(diary => {
      if (diary.checked) {
        diariesIdsArr.push(diary.id);
      }
    });
    return diariesIdsArr;
  }
  

document.getElementById('newpost').addEventListener('submit', newpostHandler);

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
        var inputValue = document.createAttribute("value");

        inputId.value = (data[i].id);
        inputClass.value = "form-check-input";
        inputType.value = "checkbox";
        inputValue.value = "";

        inputEl.setAttributeNode(inputId);
        inputEl.setAttributeNode(inputClass);
        inputEl.setAttributeNode(inputType);
        inputEl.setAttributeNode(inputValue);

        var labelEl = document.createElement("label");
        var labelClass = document.createAttribute("class");
        var labelFor = document.createAttribute("for");

        labelClass.value = "form-check-label dark-accent";
        labelFor.value = (data[i].id);
        labelEl.setAttributeNode(labelClass);
        labelEl.setAttributeNode(labelFor);

        labelEl.textContent = (data[i].diary_name);

        containerEl.append(inputEl);
        containerEl.append(labelEl);
        diariesDiv.append(containerEl);
    }
}