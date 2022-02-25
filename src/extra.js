/ document.addEventListener("DOMContentLoaded", function () {
    //     let dogUL = document.querySelector('#dog-breeds')
    //     //Chanllenge 1
    //     fetch("https://dog.ceo/api/breeds/image/random/4")
    //         .then(response => response.json())
    //         .then(handleImageAppending)
    //     // container.append(makeImageTagElement(url))
    //     //Challenge 2
    //     fetch('https://dog.ceo/api/breeds/list/all')
    //         .then(response => response.json())
    //         .then(response => {
    //             let dogBreedsArr = Object.keys(response.message)
    //             dogBreedsArr.forEach((breed) => {
    //                 dogUL.innerHTML += `<li data-info="breed">${breed}</li>` }) })
    
    //     // challenge 3
    //     dogUL.addEventListener('click', function (event) {
    //         if (event.target.dataset.info === 'breed') {
    //             event.target.style.color = "green" } })
                
    //     let dogSelect = document.getElementById('breed-dropdown')
    //     dogSelect.addEventListener('change', (event) => {
    //         fetch('https://dog.ceo/api/breeds/list/all')
    //             .then(response => response.json())
    //         let dogBreedsArr = Object.keys(response.message)
    //         let filteredArray = dogBreedsArr.filter(breed => {
    //             return breed.startsWith(event.target.value)
    //         })
    //         dogUL.innerHTML = ""
    //         filteredArray.forEach((breed) => {
    //             dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
    //         })
    //     })
    // })
    
    // function handleImageAppending(jsonObject) {
    //     let container = document.getElementById('dog-image-container')
    //     let arrOfDogsURLs = jsonObject.message;
    //     arrOfDogsURLs.forEach(url => {
    //         container.innerHTML += makeImageTagString(url)
    //     })
    // }
    // function makeImageTagString(url) {
    //     return `<img src="${url}"/>`
    // }
    // function handleBullets(jasonObject) {
    //     let container = document.getElementById('dog-image-container')
    // }
     //function makeImageTagElement(url) {
    //     let imageTag = document.createElement('img')
    //     imageTag.src = url
    //     return imageTag}