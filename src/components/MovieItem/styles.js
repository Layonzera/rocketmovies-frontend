import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? 'trasparent' : theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_HEADER};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.PLACEHOLDER}` : 'none'};
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 5.6rem;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_HEADER};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }
  }
`
