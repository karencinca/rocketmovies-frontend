import { Container } from "./styles";

export function ButtonText({ icon: Icon, title }) {
    return (
        <Container type="button">
            {Icon && <Icon size={16} />}
            {title}
        </Container>
    )
}