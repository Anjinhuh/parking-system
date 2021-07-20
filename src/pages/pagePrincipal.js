

import React, { useState } from 'react'

import headerLogo from '../img/parking.png'
import api from '../script/script.js'




export default  function PagePrincipal(){
    const [data, setData] = useState({
        marca: '',
        modelo: '',
        placa: '',
        cor: ''
    })
    const [veiculo, setVeiculo] =  useState()


     async function carregarVeiculos(){
         api.get('/veiculosPatio')
        .then(res =>{
             const veiculoData = res.data
             veic(veiculoData)
             setVeiculo(veiculoData)           
             console.log('Carregado!') 
         })
         .catch(erro =>{
             console.log(erro)
         })
     }
    const veic = (veiculo) => {
        const cont = document.getElementById('click')
         veiculo.forEach(e =>{
             const marcaVei = document.createElement('p')
             marcaVei.innerHTML = `Marca veiculo: ${e.marca}`
             cont.appendChild(marcaVei)             
         })
     }


    // const criaListaDinamica = ( veiculos ) => {
    //     const ulAlunos = document.getElementById('loki')
    //     veiculos.map(veiculo => {
    //         const listaAluno = document.createElement('li')
    //         listaAluno.innerHTML = `Nome: ${veiculo.marca}`
    //         ulAlunos.appendChild(listaAluno)
    //         console.log(veiculo)
    //     })
    // }
        
    


    function handleInputChange(event){
        const newData ={...data}
        newData[event.target.name] = event.target.value;
        setData(newData)
        console.log(newData)
      }

    async function handleFormSubmit(event){
        event.preventDefault()
        
       const res = api.post('http://localhost:3001/cadastro', data )
           res ? console.log('ok' + data) : console.log('Não foi!')
    }
        return(
            
            <div className="App" onLoad={carregarVeiculos}>
                <header className="header">
                <img src={headerLogo} alt="Header Logo" className="img-header"/>
                <p className="text-header"> Controle de estacionamento </p>
                </header>
                
                <form method="POST" className="div-inputs">
                    <input type="text" id="Marca"  name="marca" onChange={handleInputChange}  placeholder="Marca" />
                    <input  type="text" id="Modelo" name="modelo"onChange={handleInputChange}  placeholder="Modelo" />
                    <input type="text"  id="Placa"  name="placa"onChange={handleInputChange} placeholder="Placa" />
                    <input type="text"  id="Cor"   name="cor" onChange={handleInputChange} placeholder="Cor" />
                    
                    
                </form>
                <div className="div-button" onClick={ handleFormSubmit }>
                        <button >Cadastrar</button>
                </div>
                <div className="div-button" id="click" onClick={ veic }>
                        <button >Carregar veiculos</button>
                </div>
                
                

               
            </div>
            
       
    
    )
}
