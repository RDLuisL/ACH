function openWhatsApp(serviceType) {
    var phoneNumber = "56986870079"; // Número de teléfono en formato internacional sin "+"
    var message = "";

    switch(serviceType) {
        case 'tecnica':
            message = "¡Hola! Me gustaría obtener información sobre la revisión técnica.";
            break;
        case 'multas':
            message = "¡Hola! Me gustaría obtener información sobre la revisión de multas.";
            break;
        case 'corrales':
            message = "¡Hola! Estoy interesado en el servicio de rescate de corrales. ¿Me pueden ayudar?";
            break;
        case 'precompra':
            message = "¡Hola! Quisiera solicitar el servicio de revisión de compra. ¿Podrían proporcionarme más detalles?";
            break;
        case 'parabrisareparacion':
            message = "¡Hola! Me gustaría obtener información sobre cómo puedo reparar mi parabrisas.";
            break;
        case 'lavadoecologico':
            message = "¡Hola! Me gustaría saber como es el servicio del lavado ecológico y agendar un servicio.";
            break;
            
        case 'detailing':
            message = "¡Hola! Me gustaría saber como es el servicio de detailing y agendar un servicio.";
            break;
        case 'fullwash':
            message = "¡Hola! Me gustaría agendar un servicio Full lavado.";
            break;
            

        case 'paint':
            message = "¡Hola! Estoy interesado en cotizar un servicio de latonería y pintura ¿Me podrían ayudar?";
            break;

        case 'polishing':
            message = "¡Hola! Me gustaría agendar un servicio Pulido.";
            break;

        case 'paperglass':
            message = "¡Hola! Me gustaría cotizar precios de instalación de papel ahumado.";
            break;
        case 'papelseguridad':
            message = "¡Hola! Me gustaría cotizar precios de instalación de papel de seguridad.";
            break;
        case 'grabado':
            message = "¡Hola! Estoy interesado en el servicio de grabado de patente. ¿Cuándo podemos hacer el servicio?";
            break;
        case 'seguridad':
            message = "¡Hola! Quisiera que me dieras información acerca de sistemas de seguridad.";
            break;
        case 'luces':
            message = "¡Hola! Tengo unas ampolletas quemadas, necesito que me informes sobre su servicio de cambio de ampolletas.";
            break;
        case 'frenos':
            message = "¡Hola! Quiero información para hacerle los frenos a mi vehículo.";
            break;
        case 'aceite':
            message = "¡Hola! Necesito hacerle un cambio de aceite y filtros a mi vehículo.";
            break;
        case 'bateria':
            message = "¡Hola! Necesito cambiar la batería de mi vehículo.";
            break;
        case 'lavadoengrase':
            message = "¡Hola! Quiero información para lavar y engrasar el chasis de mi vehículo.";
            break;
        case 'motor':
            message = "¡Hola! Quiero información para lavar el motor de mi vehículo.";
            break;
        case 'ac':
            message = "¡Hola! Necesito información sobre el aire acondicionado de mi vehículo.";
            break;
        case '10k':
            message = "¡Hola! Ya han pasado 10 mil kilómetros desde el último mantenimiento que le hice a mi vehículo. Necesito información para hacerles el mantenimiento con ustedes.";
            break;
        default:
            message = "¡Hola! Me gustaría obtener más información.";
            break;
    }

    var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
