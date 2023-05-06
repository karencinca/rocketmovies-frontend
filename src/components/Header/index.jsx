import { Container, Profile } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ children }) {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Link to="/">
                <span className='logo'>RocketMovies</span>
            </Link>
            
            <div className='inputbar'>
                {children}
            </div>

            <Profile>
                <div>
                    <Link to="/profile" className='name'>{user.name}</Link>
                    <Link to="/" onClick={signOut} className='signout'>Sair</Link>
                </div>
                    <Profile to="/profile">
                        <img src={avatarUrl} alt={user.name} />
                    </Profile>
            </Profile>
        </Container>
    )
}