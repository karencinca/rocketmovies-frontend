import { Container, Content, GoBack } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsArrowLeft} from 'react-icons/bs'
import { TbClockHour3 } from 'react-icons/tb'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { api } from "../../services/api";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { Rate } from "../../components/Rate";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Details() {
    const [data, setData] = useState([])
    const params = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    async function handleRemove() {
        const confirm = window.confirm(`Deseja realmente remover "${data.title}"?`)

        if(confirm) {
            await api.delete(`/movie_notes/${params.id}`)
            navigate(-1)
        }
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movie_notes/${params.id}`)
            setData(response.data)
        }

        fetchMovie()
    }, [])

    return (
        <Container>
            <Header />

            <GoBack to="/">
                <ButtonText 
                icon={BsArrowLeft}
                title="Voltar"
                />
            </GoBack>


            <Content>
                <div className="title">
                    <h2>{data.title}</h2>
                    <Rate data={data}/>
                </div>

                <div className="author">
                    <img src={avatarUrl} alt={user.name} />
                    <span>Por {user.name}</span>

                    <TbClockHour3 />
                    <span>{data.updated_at}</span>
                </div>

                {
                    data.tags && data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }

                <p>
                    {data.description}
                </p>

                <Button
                    id="delete" 
                    type="button"
                    title="Excluir filme"
                    onClick={handleRemove}
                    />
            </Content>

        </Container>
    )
}