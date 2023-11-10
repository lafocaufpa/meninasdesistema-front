import { ContainerFooter } from "./styles";

export function Footer() {
    return (
        <ContainerFooter>
                <div className="container_links">
                    <div className="container_suporte">
                        <h3>Suporte</h3>
                        <ul>
                            <li><a href="#">E-mail</a></li>
                            <li><a href="#">Contatos</a></li>
                        </ul>
                    </div>
                    <div className="container_redessociais">
                        <h3>Redes Sociais</h3>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copy">
                    <p>Copyrigth © 2023 Universidade Federal do Pará</p>
                </div>

        </ContainerFooter>
    )
}