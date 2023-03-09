import { Container } from './styles'

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
        <input type="text" placeholder='Pesquisar pelo título' />

        <div>
          <div>
            <button>Adryann Layon</button>
            <button>sair</button>
          </div>

          <button>
            <img src="https://www.github.com/Layonzera.png" alt="User's picture" />
          </button>
        </div>
    </Container>
  )
}