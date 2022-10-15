import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';


export default function Pcards({producto}) {

const navigate = useNavigate();
const irPizza = () => {
  navigate(`/pizza/${producto.id}`);
};

const {agregarCarrito} = useContext(Context);


  return (
  <>
   <div className="card col-lg-3 col-md-6 p-1"  key={producto.id}>
   <img src={producto.img} className="card-img-top" alt="imagen pizza" />
   <div className="card-body">
     <h5 className="card-title">{producto.name}</h5>
     <hr></hr>
     <ul>
     {producto.ingredients.map((e)=> (
       <li> {e} </li>
     )
     )}  
     </ul>  
     <p>Precio: ${producto.price.toLocaleString("es-CL")}</p>
     <hr/>
     <div className='d-flex justify-content-between'>
     <button  onClick={irPizza} className="btn btn-primary">Ver Mas</button>
     <button  onClick={() => agregarCarrito(producto)} className="btn btn-danger">Añadir</button>
     </div>  
   </div>
   </div>
   </>
  );
}
