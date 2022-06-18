import styled from 'styled-components'

type ContainerProps = {
  bgColor: string;
}
export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.bgColor};
  color: white;
  display: flex;
  padding: 20px;

  span {
    font-weight: bold;
  }

  .link {
    color: purple;

    &:hover {
      color: green;
    }
  }
`;

type ButtonProps = {
  bg: string;
  small?: boolean
}
export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.bg};
  font-size: ${props => props.small ? '15px' : '30px'}
`;