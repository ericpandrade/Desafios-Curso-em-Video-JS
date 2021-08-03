function mudarHora() {
    const data = new Date()
    const hora = data.getHours()
    const img = document.getElementById('turno')
    const title = document.getElementById('title')
    const footer = document.getElementById('footer')
    horas.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 13) {
        img.src= 'https://vidaorganizada.com/wp-content/uploads/2020/01/Captura-de-Tela-2020-01-04-a%CC%80s-11.47.43.png'
        document.body.style.background = '#FFEE88'
        title.style.color = '#172121'
        footer.style.color = '#172121'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'https://cdn.olhares.com/client/files/foto/big/942/9423633.jpg'
        document.body.style.background = '#F96F5D'
    } else {
        img.src = 'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400'
        document.body.style.background = '#1D263B'
    }
}