import Button from "./evento/Button"

function Eventos({numero}){
    function meuEvento(){
        console.log(`Opa! Fui ativado  ${numero}`)
    }
    return(
      <>
        <p>Clique para disparar um evento</p>
        <Button event={meuEvento} text='Primeiro Evento'/>
      </>
    )
}

export default Eventos