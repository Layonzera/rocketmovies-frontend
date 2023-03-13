import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BG_TAG};
  border: none;
  border-radius: 0.8rem;
  height: 4.8rem;
  padding: 1.6rem 3.2rem;
  margin: 1.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  line-height: 2.1rem;
  font-feature-settings: 'liga' off;

  &:disabled {
    opacity: 0.5;
  }
`
