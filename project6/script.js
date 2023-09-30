import { key } from './rapidKey';

const getFace = async (e) => {
    e.preventDefault()
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const ethnicity = document.getElementById('ethnicity').value;
    
    const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}s&ethnicity=${ethnicity}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.blob();
        const image = URL.createObjectURL(result);
        const imageDOM = document.createElement('img');
        const parDOM = document.createElement('p');
        parDOM.textContent = url;
        imageDOM.src = image;
        document.body.appendChild(parDOM);
        document.body.appendChild(imageDOM);
    } catch (error) {
        console.error(error);
    }
};

document.querySelector('#form').addEventListener('submit', getFace)
