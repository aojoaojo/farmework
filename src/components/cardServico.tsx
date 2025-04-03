export interface CardServicoProps {
    title: string;
    description?: string;
    imgSrc: string;
    link?: string;
}

export function CardServico({ description, imgSrc, link = "#", title }: CardServicoProps) {
    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="d-flex flex-column justify-content-center h-100">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="d-block btn btn-success" style={{ width: "8rem" }}>Saiba mais</a>
                </div>
            </div>
        </div>)
}