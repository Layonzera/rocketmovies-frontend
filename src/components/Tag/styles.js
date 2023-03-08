import styled from 'styled-components'

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BG_TAG};
  color: ${({ theme }) => theme.COLORS.TEXT_TAG};
  height: 2.4rem;
  margin-right: 0.8rem;
  padding: 0.5rem 1.6rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.4rem;
  border-radius: 0.8rem;
`
