import { useState,useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Items from '../Items'

import './index.css'

const Home = () => {
    const [dataList,setDataList] = useState([])
    const [dataJoke,setJoke] = useState([])
    const [popTrigger,setPop] = useState(false)
    const getData = async () =>{
       const url = 'https://api.chucknorris.io/jokes/categories'
       const options ={
        method:"GET",
              headers: {
                  'Content-Type': 'application/json',
                  accept: 'application/json',
                },
       }
       const response = await fetch(url,options)
       const data = await response.json()
       console.log(data)
       if (response.ok === true) {
        setDataList(data)
        
       }

    }

    const getjokes = async(id) => {
      const url = `https://api.chucknorris.io/jokes/random?category=${id}`
      const options ={
        method:"GET",
              headers: {
                  'Content-Type': 'application/json',
                  accept: 'application/json',
                },
       }
       const response = await fetch(url,options)
       const data = await response.json()
       console.log(data)
       if (response.ok === true){
        setJoke(data)
        setPop(true)
       }
    }

    const onClosePop = () => {
      setPop(false)
    }

    const onclickNextJoke = (id) => {
      getjokes(id)
    }
    const onClickJokeData = (id) => {
      getjokes(id)
     } 


    useEffect(() => {
        getData()
    },[])

    return(
        <div className='bg-container'>
          <h1 className="main-heading">Chuck Norries</h1>
         { popTrigger === true ? <div  >
          <Popup   trigger={<button className="btn-next">Open Jokes</button>} modal >
        <div>
          <h1 className="heading">{dataJoke['categories']}</h1>
          <h2 className="heading">{dataJoke['value']}</h2>
          <button onClick={() => onclickNextJoke(dataJoke['categories'])} className="btn-next">Next Joke</button>
          <button onClick={onClosePop} className="btn-next">Close</button>
        </div>
      </Popup>
      </div> : ''}
        <ul className="ul-containe" >
          {dataList.map(eachData => (
            <Items onClickJoke={onClickJokeData} key={eachData} itemDetails={eachData}/> 
          ))}
          </ul>
        </div>
        
    )
}

export default  Home