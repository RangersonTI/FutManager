
import { Rotas } from './routes'
import { GlobalStyle } from './shared/global/style'
import { AuthenticationProvider } from './shared/hook/useAuthentication'
import { HeaderProvider } from './shared/hook/useHeader';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthenticationProvider>
      <HeaderProvider>
        <ToastContainer
          closeOnClick={false}
          pauseOnHover
          limit={5000}
          theme='colored'
        />
        <GlobalStyle/>
        <Rotas/>
      </HeaderProvider>
    </AuthenticationProvider>
  )
}

export default App
