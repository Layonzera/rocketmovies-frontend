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
  grid-area: content;
  margin: 4rem 12.3rem 15rem;

  > main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-height: 40rem;
    overflow-y: auto;
    text-align: justify;

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 0.5rem;
    }

    > div:first-child {
      max-width: 36.8rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      h2 {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1.9rem;
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
        color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};

        svg {
          width: 2rem;
          height: 2rem;
        }
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;

          img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
          }

          p {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 1.9rem;
            color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};
            text-align: justify;
          }

          svg {
            color: ${({ theme }) => theme.COLORS.PINK};
          }
        }
      }
    }

    > p {
      padding-right: 1.6rem;
    }
  }
`
