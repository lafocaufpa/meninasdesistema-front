import { Container } from "../../styles/Global.styles";
import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <Container>
                <nav className="nav">
                    <div className="nav_menu">
                        <ul className="nav_list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/events">Eventos</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/members">Members</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </HeaderContainer>
    )
}