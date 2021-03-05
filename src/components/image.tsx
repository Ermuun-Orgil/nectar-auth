import styled from 'styled-components/native';

type ImageType = {
    color: string
    flex: number
    width: string
    height: string
    border: boolean
}

export const Image = styled.Image<ImageType>`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};
    border-radius: ${props => props.border ? "18px" : "0"};
    border: ${props => props.border ? "1px solid #E2E2E2" : "0px solid #E2E2E2"};
`