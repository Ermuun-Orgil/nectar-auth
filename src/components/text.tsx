import styled from 'styled-components/native';

type TextProps = {
    color: string
    size: number | string
    weight: 'strong' | 'bold' | 'normal'
    align: 'center' | 'left' | 'right'
    letterSpacing: string
}

const MappingToFontWeight = {
    strong: '900',
    bold: '600',
    normal: '400',
}



export const Text = styled.Text<TextProps>`
    color: ${props => props.color};
    font-size: ${props => props.size ? props.size : "12px"};
    font-weight: ${props => props.weight ? MappingToFontWeight[props.weight] : "400"};
    text-align: ${props => props.align ? props.align : "left"};
    letter-spacing: ${props => props.letterSpacing || "0.1px"};
`