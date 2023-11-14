import { Item } from "./item"

export const ItemList = ({items}) =>{
return (<div className= "d-flex">{items.map((item) => (<Item  key= { item.id}item={item}/>))}</div> )
}