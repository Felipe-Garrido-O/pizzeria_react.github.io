import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';

export default function Navbar() {

  const { carrito } = useContext(Context);

  const total = carrito.reduce((valor, {price, count}) => valor + price * count, 0 );
  console.log(total)

  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
    <Link to ="/" className='text-light' style={{ textDecoration: 'none' }}>
      <h5 className='mb-0'> 🍕 Pizzeria Mamma Mia</h5>
    </Link> 
    
    <Link to="/carrito" className='text-light' style={{ textDecoration: 'none' }}>
    <h5>Carrito: ${total.toLocaleString("es-CL")}</h5> 
    </Link>
    <Link to="*" className=''></Link>
   </div> 
   </nav>
   </>

  );
}
