import { CardServico } from "../components/cardServico";
import imgRegador from "../assets/sist_regad.jpeg";
import imgFish from "../assets/fish-food.jpeg";
import imgFarm from "../assets/happy-farm.jpeg";

export function Servicos() {
    return (
        <div>
            <h1 className="text-center m-3 pt-4">Serviços</h1>
            <div className="d-flex flex-wrap justify-content-center">
                <CardServico
                    title="Regador Automatizado"
                    description="Muito útil no dia-a-dia.
                Auxilia na redução do desperdício de água"
                    imgSrc={imgRegador}
                />
                <CardServico
                    title="Alimentador Automatizado de Peixes"
                    description="Muito útil no dia-a-dia.
                Auxilia na redução do desperdício de ração,
                além de permitir que o peixe se alimente mesmo quando você não está em casa"
                    imgSrc={imgFish}
                />
                <CardServico
                    title="Gestão de Fazendas"
                    description="Centro de controle para gestão de fazendas.
                Possui integração com o regador automatizado, alimentador automatizado de peixes
                e diversas outras funcionalidades que facilitam o dia-a-dia do agricultor"
                    imgSrc={imgFarm}
                />
            </div>
        </div>
    )
}