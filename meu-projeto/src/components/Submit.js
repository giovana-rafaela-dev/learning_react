import { useState } from 'react';


function Submit() {
  function CadastrarUsuario(e) {
    e.preventDefault(); /*Usado para que fique na tela do console, não que seja recarregado*/
    console.log(`Usuário ${name} foi cadastrado com a Senha ${password} `)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()


  return (
    <>
      <h1> Meu Cadastro:</h1>
      <form onSubmit={CadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite uma senha"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </>
  );
}

export default Submit;
