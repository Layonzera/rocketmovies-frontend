import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  padding: 1.9rem 0 0 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};
  border-radius: 1rem;
  border: none;
  resize: none;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }
`
