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
    margin-top: 2rem;
    width: 100px;
    height: 40px;
    border: none;
    color: #fff;
    font-weight: 300;
    background: #fc4a1a;
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

export const Album = styled.div`
    display: flex;
    margin: 20px auto;
    flex-wrap: wrap;
    width: 100vh;
    height: 70vh;
    flex-direction: row;
    background: #fff;
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 2px 2px 5px black;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    background-color: #fff;
    flex: 1 0 wrap;

    article{
        display: grid;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
        text-align: justify;
    }
`

export const Photo = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
    }
`

export const Bar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vh;
    height: 20vh;
    margin: auto;
`

export const User = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 30%;
    height: 125px;
    margin-top: 10px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 80px;
    box-shadow: 0px 0px 5px black;
    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: solid 1px #fff;
    }
`

export const UserInfo = styled.div`
    h3, h4{
        margin: 0;
        text-align: justify;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 14px;
    }
`



export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 65%;

    a.nav{
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 500;
        color: black;
        text-shadow: 2px;

        :hover{
            font-size: 1.5rem;
            color: #fff;
        }
    }
`
export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 10%;
    background-color: #fff;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        opacity: 0.5;
    }

`


