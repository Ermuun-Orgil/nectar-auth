import styled from 'styled-components/native';

type ButtonProps = {
    color: string
    height: number | string
    width: number | string
    align: 
    letterSpacing: string
}

export const Button = styled.TouchableOpacity<TextProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #53B175;
    border-radius: 17px;
`