document.addEventListener('DOMContentLoaded',() => {

document.getElementById('buttons').setAttribute('title', 'Nachricht jetzt absenden');
document.getElementById('labelName').setAttribute('title', 'Alle Felder sind Pflicht, sonst funktoniert das Absenden nicht!');
document.getElementById('labelEmail').setAttribute('title', 'Alle Felder sind Pflicht, sonst funktoniert das Absenden nicht!');
document.getElementById('labelMessage').setAttribute('title', 'Alle Felder sind Pflicht, sonst funktoniert das Absenden nicht!');

//function toggleMenu(sideMenu) {
    //document.getElementById(sideMenu).classList.toggle('sideMenuShow');
    //document.getElementById(sideMenu).classList.toggle('sideMenuClass');
//}

//function toggleMenu(sideMenu) {
//    const element = document.getElementById(sideMenu);
//    if (element) {
//        element.classList.toggle('sideMenuShow');
//        element.classList.toggle('sideMenuClass');
//    } else {
//        console.warn(`Element mit ID "${sideMenu}" nicht gefunden.`);
//    }
//}
//})
function toggleMenu(sideMenu) {
    console.log(`toggleMenu aufgerufen mit ID: ${sideMenu}`);
    const element = document.getElementById(sideMenu);
    if (element) {
        console.log('Element gefunden:', element);
        element.classList.toggle('sideMenuShow');
        element.classList.toggle('sideMenuClass');
        console.log('Klassen wurden umgeschaltet.');
    } else {
        console.warn(`Element mit ID "${sideMenu}" nicht gefunden.`);
    }}
})

function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xdkowbzo", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}






