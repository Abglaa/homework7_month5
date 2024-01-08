import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';

function NavBar() {
    const {amountOfProducts} = useSelector(state => state.cartReducer)
    return (
        <ul>
            <li>
                <NavLink to="/">Main</NavLink>
            </li>
            <li>
                <NavLink to="products">Products</NavLink>
            </li>
            <li>
                <NavLink to="cart">cart</NavLink>
            </li>
            <li>
                <span>&#9993;{amountOfProducts}</span>
            </li>
        </ul>
    );
}

export default NavBar;