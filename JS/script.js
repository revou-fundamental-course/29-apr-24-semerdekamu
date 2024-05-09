//Ini javascript

// Validate Function
function validation() {
    let username = document.getElementById('form-username').value;
    console.log(username);
    if (username == '' || username == null) {
        document.getElementById('form-username').style.border = '1px solid red';
        alert('Inputan Anda Kosong, Periksa Kembali')
    } else {
        alert('Welcome' + username)
        console.log(username);
    }

    let email = document.getElementById('email').value;
    console.log(email);
    if (email == '' || email == null) {
        document.getElementById('email').style.border = '1px solid red';
        alert('Inputan Anda Kosong, Periksa Kembali')
    }
}


// Section Slide
let indexSlide = 1; // [0, 1, 2]
showSlide(1);

function nextSlide(n) {
    console.log('nextSlide: ' + n)
    showSlide(indexSlide += n);
    
}

// Slide Logic atau trigerr
function showSlide(index) {
    let listImage = document.getElementsByClassName ('banner-item');
    console.log(listImage);
    console.log('Banyaknya image: ' + listImage.length);

    // Reset SlideIndex
    if (index > listImage.length) indexSlide = 1;

    // hide all images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // Show only one image
    listImage[indexSlide - 1].style.display = 'block';

    console.log('showSlide: ' + index);
}

setInterval(() => nextSlide(1), 2000);

document.getElementById('send-button').addEventListener('click', () => validation())
document.getElementById('send-button').addEventListener('click', () => nextSlide(1))