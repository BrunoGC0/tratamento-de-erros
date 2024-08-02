let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao != "boolean") throw "Somente tipo booleano é aceito"

        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("começando a ferver a água")
            resolve()
        }else{
            const mensagemDeErro = "É necessário ligar o fogão e colocar a chaleira para ferver a aguá"
            reject(mensagemDeErro)
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) =>{
        console.log("Passo 2 Finalizado")
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) =>{
        console.log("Passo 3 Finalizado")
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) =>{
        console.log("Passo 4 Finalizado")
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true


async function iniciarProcessoDeFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomada = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomada)
    }catch(err){
        console.log(err)
    }finally{
        console.log("Finalizado o ritual de tomar café")
    }
}

iniciarProcessoDeFazerCafe()

