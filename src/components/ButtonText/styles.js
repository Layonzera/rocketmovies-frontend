import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 0.8rem;
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  line-height: 2.1rem;
  font-weight: 400;
  border: none;
  width: fit-content;
`
