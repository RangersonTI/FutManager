
const paraNumero = (value:string) =>{
    if(!value) return ""

    return value.replace(/\[^0-9]/,"");
}

export const Mascarar = {
    paraNumero
}