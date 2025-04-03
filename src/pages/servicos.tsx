import { CardServico } from "../components/cardServico";
import imgRegador from "../assets/sist_regad.jpeg";
import imgFish from "../assets/fish-food.jpeg";

export function Servicos() {
    return (
        <div className="d-flex">
            <CardServico
                title="Regador Automatizado"
                description="Muito útil no dia-a-dia.
            Auxilia na redução do desperdício de água"
                imgSrc={imgRegador}
                link="#"
            />
            <CardServico
                title="Alimentador Automatizado de Peixes"
                description="Muito útil no dia-a-dia.
                Auxilia na redução do desperdício de ração,
                além de permitir que o peixe se alimente mesmo quando você não está em casa"
                imgSrc={imgFish}
                link="#"
            />
        </div>
    )
}