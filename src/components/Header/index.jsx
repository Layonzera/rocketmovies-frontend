import { Container } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />

        <div>
          <div>
            <Link to="/profile">
              <button>Adryann Layon</button>
            </Link>
            <Link to="/">
              <button>sair</button>
            </Link>
          </div>

          <Link to="/profile">
            <button>
              <img src="https://www.github.com/Layonzera.png" alt="User's picture" />
            </button>
          </Link>
        </div>
    </Container>
  )
}