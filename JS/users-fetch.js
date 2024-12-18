const specializations = [
    'Работа',
    'Отношения',
    'Энергия',
    'Карма',
    'Карьера'
]

const modes = [
    'Оффлайн',
    'Оффлайн/Онлайн',
    'Онлайн'
]

function randomValueFromArray(array){
    return array[Math.floor(Math.random() * array.length)]
}

window.addEventListener('load', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json())
    .then(json => {

        const filter = [];
        for(let i = 0; i < 4; i++){
            filter[i] = Math.floor(Math.random() * 10)
        }

        document.getElementById('services-table').removeChild(document.getElementById('loader-wrapper'))

        const filteredUsers = json.filter(x => filter.includes(x['id']))

        filteredUsers.forEach(user => {
            const userDiv = document.createElement('div')
            userDiv.setAttribute('class', 'row')

            const nameDiv = document.createElement('div')
            nameDiv.innerText = user['name']

            const specializationDiv = document.createElement('div')
            specializationDiv.innerText = randomValueFromArray(specializations)

            const modesDiv = document.createElement('div')
            modesDiv.innerText = randomValueFromArray(modes)

            const priceDiv = document.createElement('div')
            priceDiv.innerText = Math.floor(Math.random() * 10) * 1000 + 1000 + '₽/час'

            userDiv.appendChild(nameDiv)
            userDiv.appendChild(specializationDiv)
            userDiv.appendChild(modesDiv)
            userDiv.appendChild(priceDiv)

            document.getElementById('services-table').appendChild(userDiv)
        });
    })
    .catch(exception => {
        document.getElementById('services-table').removeChild(document.getElementById('loader-wrapper'))
        const errorDiv = document.createElement('div')
        errorDiv.setAttribute('id', 'loader-wrapper')
        errorDiv.innerText = '⚠ Что-то пошло не так'
        document.getElementById('services-table').appendChild(errorDiv)
    })
})