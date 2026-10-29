import AuthProvider from './context/AuthContext.tsx'
import AppRouter from './router/index.tsx'

const App = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default App
