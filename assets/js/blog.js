// Assuming you have a form with an id of 'myForm' and a submit button inside it with an id of 'submitButton'
const form = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton');
const backButton = document.getElementById('back');

const checkbox = document.getElementById('checkbox');

//toggle
checkbox.addEventListener('change', () => {
    //change theme of website
    document.body.classList.toggle('dark');
    console.log(checkbox);
});

//when i click back button, it takes me to the landing page
backButton.addEventListener('click', function() {
    window.location.href = 'index.html'
});


const backBttn = document.querySelector('back');
const displayData = document.getElementById('section');

//retrieve data from localStorage using the key
const sectionData = localStorage.getItem('submitBlog');
console.log(sectionData);


//parse JSON data
const parsedData = JSON.parse(sectionData);



//function to update webpage with data
function updatePageWithData(parsedData) {
    const title = document.createElement('h2');
    title.textContent = parsedData.title;
    displayData.appendChild(title);

    const content = document.createElement('p');
    content.textContent = parsedData.content;
    displayData.appendChild(content);

    const user = document.createElement('h5');
    user.textContent = parsedData.user;
    displayData.appendChild(user);
}

//call function
updatePageWithData(parsedData);

// Add an event listener to handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Update the page with the data when the page becomes visible again
        updatePageWithData(sectionData);
    }
});




// Apply CSS styling to the element
displayData.style.color = 'olive';
displayData.style.fontWeight = 'normal';
displayData.style.fontSize = '20px';
displayData.style.borderColor = 'black';
displayData.style.borderStyle = 'solid';
displayData.style.marginTop = '3px';
displayData.style.height = '220px';
displayData.style.fontFamily ='fantasy';


// Append the element to the webpage

