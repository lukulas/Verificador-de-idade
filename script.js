function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade <= 0 && idade < 2){
                //BEBE
                img.setAttribute('src', 'bebeHomem.png')
            } else if (idade < 11){
                //CRIANCA
                img.setAttribute('src', 'homemCrianca.png')
            } else if (idade < 22){
                //ADOLECENTE
                img.setAttribute('src', 'homemAdolecente.png')
            } else if (idade < 65){
                //ADULTO
                img.setAttribute('src', 'homemAdulto.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'homemIdoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade <= 0 && idade < 2){
                //BEBE
                img.setAttribute('src', 'bebeMenina.png')
            } else if (idade < 11){
                //CRIANCA
                img.setAttribute('src', 'mulherCrianca.png')
            } else if (idade < 22){
                //ADOLECENTE
                img.setAttribute('src', 'mulherAdolecente.png')
            } else if (idade < 65){
                //ADULTO
                img.setAttribute('src', 'mulherAdulta.png')
            } else{
                //IDOSA
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}