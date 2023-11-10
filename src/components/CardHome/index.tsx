import { ContainerCard } from "./styles";
import PsUfpa from "../../assets/img/img-ps-ufpa.png"

type PropTitle = {
    title?: string;
}

export function CardHome({ title }: PropTitle) {
    return (
        <ContainerCard>
            <h2>{title}</h2>

            <div className="container_cards">
                <div className="card">
                    <img src={PsUfpa} alt="" />
                </div>
                <div className="card">
                    
                </div>
                <div className="card">
                    
                </div>
            </div>
        </ContainerCard>
    )
}