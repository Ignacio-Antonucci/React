import cart from '../assets/carrito.jpeg'

export const CartWidget = ()=> {
    return (
        <>
        <img src={cart} alt='Carito de compras' width={100} /> 
        <span>0 </span>
        </>
    )
}