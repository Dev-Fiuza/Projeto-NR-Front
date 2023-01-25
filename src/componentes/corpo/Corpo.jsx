import { CorpoPagina } from "./styles";

function Corpo(props){
    return(
        <CorpoPagina>
            <p>{props.texto}</p>
        </CorpoPagina>
    )
}

export default Corpo;