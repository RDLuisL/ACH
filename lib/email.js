function sendEmail() {
    const email = 'contact@autocarehub.cl';
    const subject = 'Consulta sobre servicios';
    const body = 'Hola Auto Carehub, \n\nMe gustaría obtener más información sobre sus servicios. \n\nGracias.';
    
    // Abrir Gmail con los campos pre-rellenados
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Redirigir al usuario a Gmail
    window.open(gmailUrl, '_blank');
}
