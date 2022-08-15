const btnForJoke = document.querySelector('.btnForJoke');
const joke = document.querySelector('.joke');

btnForJoke.addEventListener('click', showJoke);
// joke.addEventListener('click', showJoke);

const api = 'http://api.icndb.com/jokes/random';

function showJoke(e) {
    e.preventDefault();
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById('joke').innerHTML = data.value.joke;
    });
}