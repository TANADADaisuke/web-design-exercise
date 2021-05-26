// delete article event function
// delete button should inherit primary data-id
function deleteArticle (event) {
    console.log('data-id:', event.target.getAttribute('data-id'), 'has been deleted');
}

// popup event function
// delete button should have the same data-id as popup button
function popup (event) {
    // create popup element
    const popupElement = document.createElement('div');
    popupElement.className = 'popup';
    popupElement.innerHTML = '<p class="popup-text">Are you sure to DELETE?</p>';
    
    // create delete button
    const deleteArea = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteArea.className = 'delete-area';
    deleteButton.className = 'button delete-button';
    deleteButton.innerHTML = 'DELETE';
    deleteButton.setAttribute('data-id', event.target.getAttribute('data-id'));
    deleteButton.addEventListener('click', deleteArticle);
    deleteButton.addEventListener('click', function () {
        popupElement.remove();
    })
    deleteArea.appendChild(deleteButton);

    // create cancel button
    const cancelArea = document.createElement('div');
    const cancelButton = document.createElement('button');
    cancelArea.className = 'cancel-area';
    cancelButton.className = 'button cancel-button';
    cancelButton.innerHTML = 'Cancel';
    cancelButton.addEventListener('click', function () {
        popupElement.remove();
    })
    cancelArea.appendChild(cancelButton);

    // append both button on popup element
    popupElement.appendChild(deleteArea);
    popupElement.appendChild(cancelArea);

    // show up popup element
    document.body.appendChild(popupElement);
}

// set event lisnter on popup button
const popupButton = document.getElementById('popup-button');
popupButton.addEventListener('click', popup);