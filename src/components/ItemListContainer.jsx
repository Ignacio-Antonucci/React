import{useEffect, useState} from "react"
import Container from 'react-bootstrap/Container';

import {useParams} from "react-router-dom"
import { products } from '../data/products';
import { ItemList } from "./ItemList";
import { getFirestore, getDoc, doc } from "firebase/firestore";



export const ItemListContainer = (props)=> {
    
    const [items, setItems] = useState([])
    
    const {id} = useParams()

useEffect(()=> {
    const db= getFirestore()
    const refDoc= doc(db,"items", "GhKMGSV16yMASOz8E4YM")

    getDoc(refDoc).then((snapshot)=>{
        console.log({id: snapshot.id, ...snapshot.data})
    })
},[])



    useEffect(()=>{

        const mypromise = new Promise((resolve,reject) => 
    { 
         setTimeout(()=>{
            resolve(products)
        },2000) 
    })
    mypromise.then((response)=>{
        if(!id){
            setItems(response)
        }else{
            const filterBycategory = response.filter(
                (item)=> item.category === id )
            setItems(filterBycategory)
        }
    } )
},[id])


    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            <ItemList items={items} />
        </Container>
    )
}