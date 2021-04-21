import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <header>
                    <img src={logoImg} alt="gp money" />
                    <button type="button">New transaction</button>
                </header>
            </Content>
        </Container>
    );
}
