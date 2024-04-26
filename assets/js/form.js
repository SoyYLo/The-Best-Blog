//Get reference to the 'button' element
const submitBttn = document.querySelector('#bttn');

//Get input data from form prompts
const userName = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('bttn');
const form = document.getElementById('form');
const errorEl = document.getElementById('error')


//setting form validation ---->
//reference 'error' ID THIS DOESNT WORK******************
form.addEventListener('submit', (e) => {
    let messages = [];
    if(userName.value === '' || userName.value == null) {
     messages.push('Username required'); }

     if (messages.length > 0) { 
    e.preventDefault() ;
    errorEl.innerText = messages.join(', ') ;
} })


//<----- setting form validation

//add event listener for submit bttn
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    // Create an object to store the data
const submitBlog = {
    user: userName.value,
    title: title.value,
    content: content.value.trim(),
};
// save to local storage
localStorage.setItem('submitBlog', JSON.stringify(submitBlog));
console.log(submitBlog);
window.location.href = 'blog.html'

});

