
import { Rotas } from './routes'
import { GlobalStyle } from './shared/global/style'
import { AuthenticationProvider } from './shared/hook/useAuthentication'
import { HeaderProvider } from './shared/hook/useHeader';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './shared/hook/useModal';

function App() {
  return (
    <AuthenticationProvider>
      <ModalProvider>
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
      </ModalProvider>
    </AuthenticationProvider>
  )
}

export default App
