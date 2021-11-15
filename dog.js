const get_dog = document.getElementById('get_dog')
const btn = document.getElementById('btn')

btn.addEventListener('click', getRandomDog);

function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        get_dog.innerHTML = `<img src="${data.message}"/>`

    })
}