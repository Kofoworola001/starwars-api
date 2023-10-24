// function openFullImg(pic){
//     const fullImgBox = document.getElementById ("fullImgBox")
//     const fullImg = document.getElementById ("fullImg")

//     fullImgBox.style.display = "flex"
//     fullImg.src = pic;

// }

// function closeFullImg(){
//     const fullImgBox = document.getElementById ("fullImgBox")
//     fullImgBox.style.display = "none"
      
// }

// function displayCharacterData(data){
//     const characterDataDisplay = document.getElementById('character-data-display');
//     characterDataDisplay.innerHTML = `
//     <h1> Bio Data </h1>
//     <p>Name: ${data.name}</p>
//     <p>Height: ${data.height}</p>
//     <p>Gender: ${data.gender}</p>
//     `
    
     

// }

// function fetchCharacterData(characterName){
//     const apiUrl = `https://swapi.dev/api/people/?search=${characterName}`;

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error ('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (data.results.length > 0){
//                 const character = data.results[0];
//                 displayCharacterData(character);
//             } else{
//                 console.log( `chracter not found ${characterName}`);
//             }
//         })
//         .catch(error => {
//             console.log('Fetch error:', error);
//         })



// }
 
// const galleryItems = document.querySelectorAll('.img-gallery img');
// galleryItems.forEach(item => {
//     item.addEventListener('click', function (){
//         const characterName = item.getAttribute('data-character');
//         fetchCharacterData(characterName);
//     });
// });



function openFullImg(pic) {
    const fullImgBox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");

    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    const fullImgBox = document.getElementById("fullImgBox");
    fullImgBox.style.display = "none";
}

function displayCharacterData(data) {
    const characterDataDisplay = document.getElementById('character-data-display'); // Corrected the id
    characterDataDisplay.innerHTML = `
    <h1> Bio Data </h1>
    <p>Name: ${data.name}</p>
    <p>Height: ${data.height}</p>
    <p>Gender: ${data.gender}</p>
    `;
}

function fetchCharacterData(characterName) {
    const apiUrl = `https://swapi.dev/api/people/?search=${characterName}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.results.length > 0) {
                const character = data.results[0];
                displayCharacterData(character);
            } else {
                console.log(`Character not found: ${characterName}`);
            }
        })
        .catch(error => {
            console.log('Fetch error:', error);
        });
}

const galleryItems = document.querySelectorAll('.img-gallery img');
galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        const characterName = item.getAttribute('data-character');
        fetchCharacterData(characterName);
    });
});
