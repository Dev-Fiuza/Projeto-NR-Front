import { Link, useLocation } from "react-router-dom";
import { ContainerLink } from "./styles";

function MenuLink(props){
    
    const caminhoAtual = useLocation().pathname;

    return(
        <ContainerLink>
            <Link to={props.caminho}>
                <p className={`${caminhoAtual === props.caminho ? 'linkAtual' : 'link'}`}>
                    {props.children}
                </p>
            </Link>
        </ContainerLink>
    )
}

export default MenuLink;