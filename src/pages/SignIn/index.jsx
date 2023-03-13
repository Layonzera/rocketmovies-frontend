import { Container, Form, Background } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assitir</p>

        <h2>Faça seu login</h2>
        <Input type="text" placeholder='E-mail' icon={FiMail} />
        <Input type="password" placeholder='Senha' icon={FiLock} />

        <Button title="Entrar" />
        <a href="/">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}