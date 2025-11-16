import { Rota, storage } from "../config"

const paraLogin = () =>{
    sessionStorage.removeItem(storage.TOKEN);
    window.location.href = `${Rota.URL_BASE}${Rota.Login}`;
}

export const Redirecionar = { paraLogin }