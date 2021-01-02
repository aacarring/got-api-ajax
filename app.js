const button = document.querySelector('.button button');
const infoBox = document.querySelector('.info');

function generateInfo() {
    fetch('https://got-quotes.herokuapp.com/quotes')
        .then(response => response.json())
        .then(data => {
            let gotInfo = document.createElement('p');
            gotInfo.textContent =  `
                ${data.quote} -${data.character}
            `;
            infoBox.appendChild(gotInfo);
        });
        infoBox.textContent = "";
}

button.addEventListener('click', generateInfo);