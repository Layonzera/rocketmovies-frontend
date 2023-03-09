import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
    border: none;
    border-radius: 1rem;
    height: 5.6rem;
    padding: 1.9rem 2.4rem;
    color: ${({ theme }) => theme.COLORS.HEADER_DESC_COLOR};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }

    > svg {
      margin-left: 1.6rem;
    }
  }
`
