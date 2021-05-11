import styled from 'styled-components'

export const Container = styled.div`
    width: 450px;
    height: 720px;
    background-color: #fff;
    box-shadow: 2px 2px 5px black;
    margin: 40px auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img{
        width: 120px;
        height: 120px;
    }

    h1{
        opacity: 1;
        margin: 35px auto;
        font-size: 25px;
    }

    span, a.link{
        font-size: 14px;
    }

    a.link{
        text-decoration: none;
        color: #c94b4b;
    }
`

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #c2c2c2;
    width: 300px;
    height: 25px;
    min-width: 200px;
    outline: none;

    :focus{
        border-bottom: 1px solid #828282;
    }

    ::placeholder{
        font-size: 12px;
        color: #454545;
        opacity: 0.3;
    }

    ${props => props.hasError ? "border-bottom: 1px solid red" : ""}
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Label = styled.label`
    width: 100%;
    font-size: 14px;
    text-align:left;
    letter-spacing: 0;
    color: #828282;
    margin-top: 5px;
    margin-bottom: 10px;
`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    color: #fff;
    font-weight: 300;
    background: #c94b4b;
    border-radius: 25px;
    font-family: 'Nunito', sans-serif;
    outline: none;
`

export const Error = styled.span`
    font-size: 14px;
    color: red;
    width: 100%;
    text-align:left;
`