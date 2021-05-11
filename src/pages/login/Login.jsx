import React, { useCallback, useEffect, useState } from 'react'
import { Button, Container, Error, Form, Input, Label } from '../styles'
import  cameraImg  from '../../assets/5-old-photo-camera-drawing-4.png'
import nameService from './../../services/validators/username';
import passwordService from './../../services/validators/password';

const Login = props => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({source: '', mesage: '', status: false})

    //verificar a possibilidade de usar useEffect nos erros para pega-los in real time

    const isNameOk = _ => {
        if(!userName) {
            setError({source: "Username", mesage: "Username can not be empty", status: true})
            return false;
        }

        else if(!nameService(userName)) {
            setError({source: "Username", mesage: "Username Invalid", status: true})
            return false
        
        }
        return true
    } 

    const isPasswordOk = _ => {
        if(!password) {
            setError({source: "Password", mesage: "Password can not be empty", status: true})
            return false;
        }

        else if(!passwordService(password)){
            setError({source: "Password", mesage: "Password Invalid", status: true})
            return false;
        }

        return true
    } 

    const handleInputs = useCallback(event => {
        event.preventDefault()
        setError('', '', false)
        if(!userName && !password) {
            setError({source: "Both", mesage:"Inputs can not be empty", status: true})
            return;
        }
        else if(isNameOk(userName) && isPasswordOk(password)){
            console.log("Tudo OK!")
        } else {
            console.log("Deu merda!")
        }
    }, [ userName, password ])


    return (
        <>
            <Container>
                <h1>FotoGram</h1>

                <Error type="text" value={error.status && error.source === "Both" ? error.mesage : ''}/>

                <Form action="login" >
                    <Label>
                            Username
                    </Label>
                    <Input 
                        type="text"
                        placeholder="@username"
                        value={userName}
                        hasError={error.status && error.source === "Username"}
                        onChange={e => setUserName(e.target.value)}
                    />

                    <Error type="text" value={error.status && error.source === "Username" ? error.mesage : ''} />

                    <Label>
                        Password
                    </Label>
                    <Input 
                        type="password"
                        placeholder="******"
                        value={password}
                        hasError={error.status && error.source === "Password"}
                        onChange={e => setPassword(e.target.value)}
                    />
                                            
                    <Error type="text" value={error.status && error.source === "Password" ? error.mesage : ''} />
                </Form>

                <Button type="submit" onClick={handleInputs}>Login</Button>

                <img src={cameraImg} alt="" />

                <span>Don't have an account? <a href="/register" className="link"> Register</a></span>

                <a href="/register" className="link">Forgot your password?</a>
            </Container>
        </>
    )
}

export default Login