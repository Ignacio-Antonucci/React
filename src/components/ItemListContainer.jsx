import{useEffect, useState} from "react"
import Container from 'react-bootstrap/Container';

import {useParams} from "react-router-dom"

import { ItemList } from "./ItemList";
import { getFirestore,  collection, getDocs, query,where} from "firebase/firestore";



export const ItemListContainer = (props)=> {
    
 const [items, setItems] = useState([])
    
 const {id} = useParams()

 

useEffect(()=> {
    const db = getFirestore()
    
    const refCollection = !id 
    ? collection  (db, "items") 
    : query (collection(db, "items"), where("CategoryId" , "==" , id) )
    
    
    getDocs(refCollection).then((snapshot)=> {
        if (snapshot.size ===0) console.log('No results')
        else
    setItems(snapshot.docs.map((doc)=> {
        return{ id: doc.id, ...doc.data()}
    })
)
})
},[id]) 

useEffect(()=>{

    const mypromise = new Promise((resolve,reject) => 
{ 
     setTimeout(()=>{
        resolve(items)
    }) 
})
mypromise.then((response)=>{
    if(!id){
        setItems(response)
    }else{
        const filterBycategory = response.filter(
            (item)=> item.CategoryId === id )
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