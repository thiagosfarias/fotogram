import React from 'react'
import { Album, Bar, Info, Menu, Photo, SideBar, User, UserInfo } from '../styles'
import photo from '../../assets/photo-1554080353-a576cf803bda.jpg'
import profile_pic from '../../assets/selfie.jpg'
import share from '../../assets/share.png'
import upload from '../../assets/upload.png'

const Profile = props => {
    return (
        <>
            <Bar>
                <User>
                    <img src={profile_pic} alt="" />
                    <UserInfo>
                        <h3>User 001</h3>
                        <h4>Saint Louis</h4>
                    </UserInfo>
                </User>

                <Menu>
                    <a href="/" className="nav">Nova Foto</a>
                    <a href="/" className="nav">Configurações</a>
                    <a href="/" className="nav">Logout</a>
                </Menu>
            </Bar>

            <Album>
                <Info>
                    <article>
                        <h1>Album Title</h1>
                        <h3>Notes that I like to write about this album, and how special it is form me, so I want to share it with you guys</h3>
                        <p>With Love, User 001</p>
                    </article>
                </Info>
                <Photo>
                    <img src={photo} alt="" />
                </Photo>
                <SideBar>
                    <img src={upload} alt="" />
                    <img src={share} alt="" />
                </SideBar>
            </Album>



        </>
    )
}

export default Profile