import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';
`

export const Content = styled.div`
  margin: 4rem 12.3rem;

  > main {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 5rem;

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4rem;

      h2 {
        font-size: 3.6rem;
        font-weight: 500;
        line-height: 4.7rem;
        color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
      }

      .movieitem {
        display: flex;
        flex-direction: column;

        > h3 {
          font-size: 2rem;
          line-height: 2.6rem;
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR_CARD};
          font-weight: 400;
          margin-bottom: 2.4rem;
        }

        > div {
          width: 100%;
          background-color: ${({ theme }) => theme.COLORS.BG_MARK};
          padding: 1.6rem;
          border-radius: 0.8rem;
          height: 8.8rem;
          display: flex;
          align-items: center;
          gap: 2.4rem;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        button:nth-child(1) {
          background-color: ${({ theme }) => theme.COLORS.BG_MARK};
          color: ${({ theme }) => theme.COLORS.PINK};
        }
      }
    }
  }
`
