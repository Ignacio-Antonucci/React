import { CartWidget } from "./CartWidget"

export const NavBar = () =>{
    return <header>
        <nav>
            <h1>Mi Modelo</h1>
            <ul>
                <li><a href=""></a>Camperas</li>
                <li><a href=""></a>Pantalones</li>
                <li><a href=""></a>Remeras</li>
            </ul>
        </nav>
        <CartWidget />
    </header> 
}