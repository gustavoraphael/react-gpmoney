import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransacionModal: () => void;
}
export function Header({onOpenNewTransacionModal} : HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="gp money" />
                <button type="button" onClick={onOpenNewTransacionModal}>New transaction</button>
            </Content>
        </Container>
    );
}
