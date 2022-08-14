function exibir() {
    var msg1 = document.getElementById('msg-1')
    var msg2 = document.getElementById('msg-2')
    var photo = document.getElementById('photo')

    var data = new Date()

    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    var dsm = data.getDay()

    var hora = data.getHours()
    var min = data.getMinutes()

    //Definindo os dias da semana
    switch (dsm) {
        case 0:
            dsm = 'Domingo'
            break;
    
        case 1:
            dsm = 'Segunda-feira'
            break;
        
        case 2:
            dsm = 'Terça-feira'
            break;
    
        case 3:
            dsm = 'Quarta-feira'
            break;
        
        case 4:
            dsm = 'Quinta-feira'
            break;
        
        case 5:
            dsm = 'Sexta-feira'
            break;
        
        case 6:
            dsm = 'Sábado'
            break;
    }

    //Definindo os meses do ano
    switch (mes) {
        case 0:
            mes = '01'
            break;
    
        case 1:
            mes = '02'
            break;
        
        case 2:
            mes = '03'
            break;
    
        case 3:
            mes = '04'
            break;
        
        case 4:
            mes = '05'
            break;
        
        case 5:
            mes = '06'
            break;
        
        case 6:
            mes = '07'
            break;
        
        case 7:
            mes = '08'
            break;
        
        case 8:
            mes = '09'
            break;
    }

    //If's para concatenação
    if (dia < 10) {
        dia = '0' + dia
    }

    if (hora < 10) {
        hora = '0' + hora
    }

    if (min < 10) {
        min = '0' + min
    }

    msg1.innerHTML = `<strong>${hora}:${min}</strong><br>`
    msg2.innerHTML = `${dsm}, ${dia}/${mes}/${ano}`

    if (hora >= 0 && hora < 5) {
        //Madrugada
        photo.innerHTML = '<img src="img/madrugada.png">'
        document.body.style.background = '#272b2c'
    }
    else if (hora >= 5 && hora < 12) {
        //Manhã
        photo.innerHTML = '<img src="img/manha.png">'
        document.body.style.background = '#a28f69'
    }
    else if (hora >= 12 && hora < 18) {
        //Tarde
        photo.innerHTML = '<img src="img/tarde.png">'
        document.body.style.background = '#f08c43'
    }
    else {
        //Noite
        photo.innerHTML = '<img src="img/noite.png">'
        document.body.style.background = '#03394f'
    }
}