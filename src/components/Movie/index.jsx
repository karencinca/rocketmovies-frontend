import { Link } from 'react-router-dom'
import { Container } from "./styles";
import { Tag } from '../Tag'
import { Rate } from '../Rate';

export function Movie({ data, ...rest }) {
    return (
        <Container {...rest}>
            <Link to={`/details/${data.id}`}>
                <span className='title'>{data.title}</span>
            </Link>
            
                <Rate data={data} />

            <p>
                {data.description}
            </p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }  
                </footer>

            }
        </Container>
    )
}

