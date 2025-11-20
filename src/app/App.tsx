
import { Rotas } from './routes'
import { GlobalStyle } from './shared/global/style'
import { AuthenticationProvider } from './shared/hook/useAuthentication'
import { AsideBarProvider } from './shared/hook/useAsideBar';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './shared/hook/useModal';

function App() {
  return (
    <AuthenticationProvider>
      <ModalProvider>
        <AsideBarProvider>
          <ToastContainer
            pauseOnHover
            limit={5000}
            theme='colored'
          />
          <GlobalStyle/>
          <Rotas/>
        </AsideBarProvider>
      </ModalProvider>
    </AuthenticationProvider>
  )
}

export default App
