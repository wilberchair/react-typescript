import styled from 'styled-components'

type ContainerProps = {
  bgColor: string;
}
export const Container = styled.div<ContainerProps>`
  max-width: 600px;
  margin: 0 auto;
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

  @media (max-width: 500px) {
    background-color: green;
    flex-direction: column;

    span {
      color: #0000FF;
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