function verification() {
    /* CONSTANTS */
    const date = new Date()
    const year = date.getFullYear()
    const birth = document.getElementById('birth')
    const yearBirth = birth.value
    const age = year - yearBirth
    const result = document.getElementById('res')
    /* ERROR, IF AGE > 200 OR AGE < 0 */
    if (age >= 200 || age < 0){
        result.innerHTML = `Inválido. Por favor, atualize a página.`
        result.style.color= 'red'
    } else{
        const gender = document.getElementsByName('sex')
        result.style.height = 'auto'
        final.style.textAlign = 'center'
        img.style.padding = '0.25rem'
        /* MAN */
        if (gender[0].checked) {
            final.innerHTML = `Detectamos Homem com ${age} anos.`
            if (age <= 10){
                img.src = 'assets/foto-bebe-m.png'
            } else if (age <= 30){
                img.src = 'assets/foto-jovem-m.png'
            } else if (age <= 60) {
                img.src = 'assets/foto-adulto-m.png'
            } else {
                img.src = 'assets/foto-idoso-m.png'
            }
            /* WOMAN */
        } else if (gender[1].checked) {
            final.innerHTML = `Detectamos Mulher com ${age} anos.`
            if (age <= 10){
                img.src = 'assets/foto-bebe-f.png'
            } else if (age <= 30){
                img.src = 'assets/foto-jovem-f.png'
            } else if (age <= 60) {
                img.src = 'assets/foto-adulto-f.png'
            } else {
                img.src = 'assets/foto-idoso-f.png'
            }
        }
    }
}
