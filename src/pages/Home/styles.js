import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  > header {
    grid-area: header;
    width: 100%;
    padding: 2.4rem 12.3rem;
    display: flex;
    align-items: center;
    gap: 6.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};

    h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.2rem;
    }

    input {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
      border: none;
      border-radius: 1rem;
      height: 5.6rem;
      padding: 1.9rem 2.4rem;
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }

    div {
      display: flex;
      gap: 0.8rem;
      align-items: center;
      width: 19.8rem;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        button {
          color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 1.8rem;
          background-color: transparent;
          border: none;
        }

        button:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
          background-color: transparent;
          border: none;
        }
      }

      button {
        background-color: transparent;
        border: none;

        img {
          width: 6.4rem;
          height: 6.4rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
        }
      }
    }
  }
`
