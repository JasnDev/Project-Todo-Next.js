export default function Counters({itemCount, uncheckedCount}){

    return(
        <div> 
        <span>Contador de Itens: <span>{itemCount}</span></span>
        
        <span> Não checados: <span>{uncheckedCount}</span></span>
        </div>
    );
};                                 