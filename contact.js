document.addEventListener('DOMContentLoaded',() => {

document.getElementById('buttons').setAttribute('title', 'Nachricht jetzt absenden');
document.getElementById('labelName').setAttribute('title', 'Alle Felder sind Pflicht, sonst funktoniert das Absenden nicht!');
document.getElementById('labelEmail').setAttribute('title', 'Alle Felder sind Pflicht, sonst funktoniert das Absenden nicht!');
document.getElementById('labelMessage').setAttribute('title', 'Alle Felder sind Pflicht, sonst funktoniert das Absenden nicht!');
})

function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle('sideMenuHide')
}


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






