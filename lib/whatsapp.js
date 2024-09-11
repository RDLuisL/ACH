// popupWhatsApp = () => {

//     let btnClosePopup = document.querySelector('.closePopup');
//     let btnOpenPopup = document.querySelector('.whatsapp-button');
//     let popup = document.querySelector('.popup-whatsapp');
//     let sendBtn = document.getElementById('send-btn');

//     btnClosePopup.addEventListener("click", () => {
//         popup.classList.toggle('is-active-whatsapp-popup')
//     })

//     btnOpenPopup.addEventListener("click", () => {
//         popup.classList.toggle('is-active-whatsapp-popup')
//         popup.style.animation = "fadeIn .6s 0.0s both";
//     })

//     sendBtn.addEventListener("click", () => {
//         let msg = document.getElementById('whats-in').value;
//         let relmsg = msg.replace(/ /g, "%20");

//         window.open('https://wa.me/+56986870079?text=' + relmsg, '_blank');

//     });

//     setTimeout(() => {
//         popup.classList.toggle('is-active-whatsapp-popup');
//     }, 3000);
// }

// popupWhatsApp();

popupWhatsApp = () => {

    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    
    let sendBtn1 = document.getElementById('send-btn-1');
    let sendBtn2 = document.getElementById('send-btn-2');
    let msgInput = document.getElementById('whats-in');
    let sendMsgBtn = document.getElementById('send-msg-btn');

    // Cerrar popup
    btnClosePopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup');
    });

    // Abrir popup
    btnOpenPopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup');
        popup.style.animation = "fadeIn .6s 0.0s both";
    });

    // Enviar mensaje a Asesor 1
    sendBtn1.addEventListener("click", () => {
        window.open('https://wa.me/+56931214829', '_blank');
    });

    // Enviar mensaje a Asesor 2
    sendBtn2.addEventListener("click", () => {
        window.open('https://wa.me/+56983269797', '_blank');
    });

    // Enviar mensaje del input
    sendMsgBtn.addEventListener("click", () => {
        let msg = msgInput.value;
        let relmsg = msg.replace(/ /g, "%20");
        window.open('https://wa.me/+56986870079?text=' + relmsg, '_blank');
    });

    // Mostrar automáticamente el popup después de 3 segundos
    setTimeout(() => {
        popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
}

popupWhatsApp();
