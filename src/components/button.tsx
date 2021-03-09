import styled from 'styled-components/native';

type ButtonProps = {
    height: number | string
    width: number | string
    letterSpacing: string
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #53B175;
    border-radius: 17px;
`