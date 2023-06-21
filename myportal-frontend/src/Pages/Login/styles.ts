import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: #383838;
`

export const Form = styled.div`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #201d1d;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    gap: 30px 0px;

    h1 {
        color: white;
        font-size: 20px;
        font-weight: bold;
    }

    p {
        color: white;
        font-size: 14px;
        font-weight: light;
    }

    a{
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        border-bottom: none;
        transition: color 0.2s;
    }

    a:hover {
        color: #ddd
    }
`

export const ContainerSign = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px 20px;
    align-items: center;
`