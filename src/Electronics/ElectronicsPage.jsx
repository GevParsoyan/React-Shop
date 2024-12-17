import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Classes from './ElectronicsPage.module.scss'


export default function ElectronicsPage (){

    const [state, setState] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics").then((response)=>{
            setState(response.data)
            console.log(response.data)
        })
    },[])

    return<div className={Classes["divAll"]}>
    {state.map((el,i)=>{
            return(
             <div className={Classes['productsCart']}>   
             <p className={Classes['category']}>{el.category.toUpperCase()}</p>
            <img className={Classes['images']} src={el.image}/>
            <h1 className={Classes['title']}>{el.title.substring(0,20)}...</h1>
            <p className={Classes['description']}>{el.description.substring(0,110)}...</p>
            <div className={Classes['price']}>Price:${el.price}</div>
            <button className={Classes["addButCart"]}>Add to cart</button>
            </div>
            )
             })
    }
            <div className={Classes['endDivAll']}>
                <div className={Classes['endDivTitle']}>
                      <div className={Classes["jeyversDiv"]}>Jeyvers</div>
                      <div className={Classes["apiDiv"]}>API consumed : <a  className={Classes['FakestoreLink']}href="https://fakestoreapi.com/">Fake Store API</a></div>
                      <div className={Classes["portfolioDiv"]}>Jeyi's portfolio :<a className={Classes['JeyiAdoleLink']} href="https://jeyversportfolio.netlify.app/">Jeyi Adole</a> </div>
                </div>
            </div>
    </div>
}