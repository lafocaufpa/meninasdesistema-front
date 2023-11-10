import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <nav className="nav">
                <h2>Logo</h2>
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/events">Eventos</a></li>
                        <li><a href="/members">Membros</a></li>
                        <li><a href="/about">Sobre</a></li>
                    </ul>
                </div>
            </nav>
        </HeaderContainer>
    )
}