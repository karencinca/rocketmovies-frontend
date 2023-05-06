import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Content, ContentTitle } from "./styles"
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Movie } from '../../components/Movie'
import { api } from '../../services/api'
import { Input } from '../../components/Input'

export function Home() {
    const [movieNotes, setMovieNotes] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`movie_notes?title=${search}`)
            setMovieNotes(response.data)
        }

        fetchMovies()
    }, [search])

    return (
        <Container>
            <Header> 
                <Input 
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquisar pelo título"
                />
            </Header>

            
            <ContentTitle>
                <span>Meus filmes</span>
                <Link to="addmovie">
                    <Button 
                        icon={BsPlusLg}
                        title="Adicionar filme"
                    />          
                </Link>

            </ContentTitle>
            <Content>
                
                {
                    movieNotes && 
                    movieNotes.map(movieNote => (
                        <Movie key={String(movieNote.id)} 
                        onClick={() => handleDetails(movieNote.id)}
                        data={{
                            title: movieNote.title,
                            tags: movieNote.tags,
                            description: movieNote.description,
                            grade: movieNote.grade
                        }}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}