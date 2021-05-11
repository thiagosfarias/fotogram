import React, { useState } from 'react'
import { Button, Container, Form, Input, Label } from '../styles'
import  cameraImg  from '../../assets/5-old-photo-camera-drawing-4.png'

const Register = props => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Container>
                <h1>FotoGram</h1>
                <Form>
                    <Label>Username</Label>
                    <Input 
                        placeholder="@username" 
                        onChange={e => setUserName(e.target.value)} 
                        value={userName} />

                    <Label>Email</Label>
                    <Input 
                        placeholder="your@email.com" 
                        onChange={e => setEmail(e.target.value)} 
                        value={email} />

                    <Label>Password</Label>
                    <Input 
                        placeholder="******" 
                        onChange={e => setPassword(e.target.value)} 
                        value={password} />
                </Form>

                <Button>Register</Button>

                <img src={cameraImg} alt="" />

                <span>Already have an account? <a href="/" className="link"> Login</a></span>
            </Container>
        </>
    )
}

export default Register