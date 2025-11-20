import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Inicio } from "../pages/Inicio";
import { Rota } from "../shared/config";
import { RotaPrivada } from "../shared/components/RotaPrivada";
import { Usuario } from "../pages/Usuario";

export const Rotas = () =>{
    return(
        <BrowserRouter basename={Rota.URL_BASE}>
            <Routes>
                <Route
                    path={Rota.ContaAReceber}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.FormaDePagamento}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.Horario}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.Inicio}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.Jogador}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.Login}
                    element={<Login/>}
                />

                <Route
                    path={Rota.Partida}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.Punicao}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.TipoUsuario}
                    element={<RotaPrivada componente={Inicio}/>}
                />

                <Route
                    path={Rota.Usuario}
                    element={<RotaPrivada componente={Usuario}/>}
                />

                <Route
                    path="*"
                    element={<Navigate to={Rota.Inicio} />}
                />
            </Routes>
        </BrowserRouter>
    )
}