import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Inicio } from "../pages/Inicio";
import { Rota } from "../shared/config";
import { CadastroDeJogador } from "../pages/Jogador/Cadastro";

export const Rotas = () =>{
    return(
        <BrowserRouter basename={Rota.URL_BASE}>
            <Routes>
                <Route
                    path={Rota.ContaAReceber}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.FormaDePagamento}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.Horario}
                    element={<Login/>}
                />

                <Route
                    path={Rota.Inicio}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.Jogador}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.Login}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.Partida}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.Punicao}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.TipoUsuario}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.Usuario}
                    element={<Inicio/>}
                />
                {
                    // ROTAS PARA CADASTRO
                }
                <Route
                    path={Rota.CadastrarContaAReceber}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.CadastrarFormaDePagamento}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.CadastrarHorario}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.CadastrarJogador}
                    element={<CadastroDeJogador/>}
                />

                <Route
                    path={Rota.CadastrarPartida}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.CadastrarPunicao}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.CadastrarTipoUsuario}
                    element={<Inicio/>}
                />

                <Route
                    path={Rota.CadastrarUsuario}
                    element={<Inicio/>}
                />

                <Route
                    path="*"
                    element={<Navigate to={Rota.Inicio} />}
                />
            </Routes>
        </BrowserRouter>
    )
}