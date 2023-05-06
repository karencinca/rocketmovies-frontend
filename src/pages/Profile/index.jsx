import { useState } from "react"
import { Container, Avatar, Form } from "./styles"
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input'
import { BsArrowLeft } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { FiCamera, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom' 
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText 
                        icon={BsArrowLeft}
                        title="Voltar"
                    />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        type="file" 
                        id="avatar" 
                        onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar> 

                <Input 
                    placeholder="Nome"
                    icon={FiUser}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    icon={FiMail}
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />  

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha atual"
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />
            </Form>

        </Container>
    )
}