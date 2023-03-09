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
  padding: 5rem 12.3rem 0;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 3.2rem;
      line-height: 4.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_HEADER};
    }

    button {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border: none;
      border-radius: 0.8rem;
      height: 4.8rem;
      padding: 1.6rem 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      line-height: 2.1rem;
      font-feature-settings: 'liga' off;
    }
  }

  > main {
    width: 100%;
    height: calc(100vh - 30rem);
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    overflow-y: auto;

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 0.5rem;
    }

    button {
      text-align: left;
      background-color: ${({ theme }) => theme.COLORS.BG_CARD};
      border: none;
      border-radius: 1.6rem;
      padding: 3.2rem;
      max-height: 22.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      div {
        h3 {
          color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 3.2rem;
          margin-bottom: 0.8rem;
        }
      }

      p {
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 4rem;
        line-height: 1.9rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_CARD};
      }
    }
  }
`
