const form = document.getElementById("form")
const reservas = document.getElementById("reservas")

document.addEventListener('DOMContentLoaded',()=>{
  async  function ListarUsuarios() {
    const resposta = await fetch('http://localhost:8080')
    const dados = await resposta.json()

   console.log(dados)
     dados.forEach(Dados => {
        const div = document.createElement('div')

        div.innerHTML = ` 
           <div class="card-info">
                        <div class="info">
                            <h3>Nome: <span class = "dados">${Dados.name}<spanm/>  </h3> 
                            <h3>cpf:<span class = "dados">${Dados.cpf}<spanm/></h3>  
                            <h3>dias: <span class = "dados">${Dados.dia}<span/></h3> 
                            <h3>quantidade de pessoas: <span class = "dados">${Dados.quantidade}<spanm/></h3> 
                        </div>
            </div>`
                    reservas.appendChild(div)
      });
 
    
   }
   ListarUsuarios()
})

form.addEventListener('submit',async (e)=>{
    e.preventDefault()

    const pegarDados = new FormData(form)

    const dados = {
        name: pegarDados.get("name"),
        cpf: pegarDados.get("cpf"),
        dia: pegarDados.get("dia"),
        quantidade: pegarDados.get("quantidade")
    }

    const resposta = await fetch("http://localhost:8080",{
        method : "POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(dados)
    })

    const resultado = resposta.json()
    form.reset()
})

