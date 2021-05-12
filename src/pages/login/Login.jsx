import React, { useCallback, useEffect, useState } from 'react'
import { Button, Container, Error, Form, Input, Label } from '../styles'
import  cameraImg  from '../../assets/5-old-photo-camera-drawing-4.png'
import nameService from './../../services/validators/username';
import passwordService from './../../services/validators/password';

const Login = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({mesage: "", status: false})
    const [errorEmail, setErrorEmail] = useState({mesage: "", status: false})
    const [errorPassword, setErrorPassword] = useState({mesage: '', status: false})

    const isNameOk = _ => {
        if(!username) {
            setErrorEmail({ 
                           mesage: "Username can not be empty", 
                           status: true
                        })

            return false;
        }

        else if(!nameService(username)) {
            setErrorEmail({ 
                           mesage: "User name invalid", 
                           status: true
                        })
            return false
        }

        return true
    } 

    const isPasswordOk = _ => {
        if(!password) {
            setErrorPassword({ ...errorPassword, mesage: "Password can not be empty", status: true})
            return false;
        }

        else if(!passwordService(password)){
            setErrorPassword({...errorPassword, mesage: "Password Invalid", status: true})
            return false;
        }

        return true
    } 

    const handleInputs = useCallback(event => {
        event.preventDefault()

        setError("", false)
        setErrorEmail("", false)
        setErrorPassword("", false)

        if(!username && !password) {
            setError({mesage:"Inputs can not be empty", status: true})
            return;
        }
        else if(isNameOk(username) && isPasswordOk(password)){
            console.log("Tudo OK!")
        } else {
            console.log("Deu merda!")
        }

    }, [ username, password ])


    return (
        <>
            <Container>
                <h1>FotoGram</h1>

                <Error type="text" value={error.status ? error.mesage : ""}/>

                <Form action="login" onSubmit={handleInputs}>
                    <Label>
                            Username
                    </Label>
                    <Input 
                        type="text"
                        placeholder="@username"
                        value={username}
                        hasError={errorEmail.status}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <Error type="text" value={errorEmail.status ? errorEmail.mesage : ''} />

                    <Label>
                        Password
                    </Label>
                    <Input 
                        type="password"
                        placeholder="******"
                        value={password}
                        hasError={errorPassword.status}
                        onChange={e => setPassword(e.target.value)}
                    />
                                            
                    <Error type="text" value={errorPassword.status ? errorPassword.mesage : ""} />

                    <Button type="submit">Login</Button>

                </Form>



                <img src={cameraImg} alt="" />

                <span>Don't have an account? <a href="/register" className="link"> Register</a></span>

                <a href="/register" className="link">Forgot your password?</a>
            </Container>
        </>
    )
}

export default Login