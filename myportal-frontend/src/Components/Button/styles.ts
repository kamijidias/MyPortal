import styled from 'styled-components'

export const CustomButton = styled.button`
    color: #fff;
    font-size: 20px;
    border: 30px;
    background-color: #6a6a6a6a;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;

    ${props => !props.disabled && `
        &:hover {
            background-color: #A9A9A9;
            color: #fff;
            color: 6a6a6a;
        }
    `}

    ${props => props.disabled && `
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.7
    `}
`