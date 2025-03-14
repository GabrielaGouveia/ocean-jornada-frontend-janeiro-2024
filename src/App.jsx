import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  

  // //Carregamento de dados via codigo

  // const item1= {
  //   name: 'Rick Sanchez',
  //   image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }

  // const item2= {
  //   name: 'Morty Smith',
  //   image:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }

  // const item3= {
  //   name: 'Summer Smith',
  //   image:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }

  // const item4= {
  //   name: 'Beth Smith',
  //   image:'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  // }
  const [itens, setItens] = useState([])
  
  //const itens =[item1,item2,item3,item4]

 


  // Carregamento de dados via API
  async function carregarDadosApi(){
    const apiUrl = 'https://rickandmortyapi.com/api/character/'

    //Preparar a requisição
   const response = await fetch (apiUrl)

   //console.log(response)



    const body =  await response.json()

    //console.log(body)

    //Extraindo propriedades results do body

    const results=body.results

    console.log(results)


    setItens(results)

   
  }

  useEffect(function () {
    // Chamando a função que carrega dados da API
    carregarDadosApi()
  }, [])
 

  

  return (
    <>
     <div className='cards'>
      {itens.map((item,i) => <Card item={item} key={i}/>)}
      </div>
    </>
  )
}

export default App
