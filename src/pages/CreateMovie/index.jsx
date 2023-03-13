import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Content>
        <main>
          <ButtonText title="Voltar" />

          <div>
            <h2>Novo Filme</h2>

            <div className='input-wrapper'>
              <Input placeholder='Título' />
              <Input placeholder='Sua nota(de 0 a 5)' />
            </div>

            <Textarea placeholder="Observações" />

            <div className="movieitem">
              <h3>Marcadores</h3>
              <div>
                <MovieItem value="react" />
                <MovieItem isNew placeholder="Novo marcador" />
              </div>
            </div>

            <div className="buttons">
              <Button title="Excluir filme"/>
              <Button title="Salvar alterações"/>
            </div>

          </div>
        </main>
      </Content>

    </Container>
  )
}