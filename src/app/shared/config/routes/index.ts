
const URL_BASE = ""

const CADASTRAR = "cadastrar"

const Login = `${URL_BASE}/login`;

const Inicio = `${URL_BASE}/inicio`

const Partida = `${URL_BASE}/partida`

const Horario = `${URL_BASE}/horario`

const Jogador = `${URL_BASE}/jogador`

const Usuario = `${URL_BASE}/usuario`

const TipoUsuario = `${URL_BASE}/tipo-usuario`

const Punicao = `${URL_BASE}/punicao`

const FormaDePagamento = `${URL_BASE}/forma-de-pagamento`

const ContaAReceber = `${URL_BASE}/contas-a-receber`

// ROTAS DE CADASTRO

const CadastrarPartida = `${Partida}/${CADASTRAR}`

const CadastrarHorario = `${Horario}/${CADASTRAR}`

const CadastrarJogador = `${Jogador}/${CADASTRAR}`

const CadastrarUsuario = `${Usuario}/${CADASTRAR}`

const CadastrarTipoUsuario = `${TipoUsuario}/${CADASTRAR}`

const CadastrarPunicao = `${Punicao}/${CADASTRAR}`

const CadastrarFormaDePagamento = `${FormaDePagamento}/${CADASTRAR}`

const CadastrarContaAReceber = `${ContaAReceber}/${CADASTRAR}`
export const Rota = {
    ContaAReceber,
    FormaDePagamento,
    Horario,
    Inicio,
    Jogador,
    Login,
    Partida,
    Punicao,
    TipoUsuario,
    Usuario,
    CadastrarContaAReceber,
    CadastrarFormaDePagamento,
    CadastrarHorario,
    CadastrarJogador,
    CadastrarPartida,
    CadastrarPunicao,
    CadastrarTipoUsuario,
    CadastrarUsuario,
}