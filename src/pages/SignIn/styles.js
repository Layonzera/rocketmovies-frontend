import styled from 'styled-components'
import background from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WELCOME_TEXT};
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 400;
    margin-bottom: 4.8rem;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    margin-top: 4.2rem;
    line-height: 2.1rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`
