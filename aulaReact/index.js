const root = document.getElementById("root"); 
function Participante(props) {


const [votos, setVotos] = React.useState(0); 

function votar() {


  setVotos(votos + 1); 
}


return (
  <>
    <h1>{props.nome}</h1>
    <h2>Votos: {votos}</h2>
    <button onClick={votar}>Votar</button>
  </>
);
}


function Votacao() {
  return (
    <>
      <Participante nome="Méqui" />
      
      <Participante nome="BK" />
      
      <Participante nome="Papais" />

    </>
  );
}



ReactDOM.createRoot(root).render(<Votacao />)