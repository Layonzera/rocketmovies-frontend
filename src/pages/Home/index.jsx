import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <header>
        <h1>RocketMovies</h1>
        <input type="text" placeholder='Pesquisar pelo título' />

        <div>
          <div>
            <strong>Adryann Layon</strong>
            <button>sair</button>
          </div>

          <img src="https://www.github.com/Layonzera.png" alt="User's picture" />
        </div>
      </header>
      
      
    </Container>
  )
}