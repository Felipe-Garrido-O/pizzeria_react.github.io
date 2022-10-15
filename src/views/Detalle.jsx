import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../Context';


export default function Detalle() {

  const { id } = useParams();

  const { listaPizza, agregarCarrito } = useContext(Context);

  const producto = listaPizza.filter((e) => e.id === id);

  return (
    
     <div className='container'>
     <div className="card mb-3 p-1" >
     <div className="row g-0" >
     <div className="col-md-4" key={producto[0].id}>
     <img src={producto[0].img} className="img-fluid rounded-start" alt="imagen pizza" />
     </div>
     <div class="col-md-8">  
      <div className="card-body">
       <h5 className="card-title">{producto[0].name}</h5>
       <hr></hr>
       <ul>
       {producto[0].ingredients.map((i)=> (
         <li> {i} </li>
       )
       )}  
       </ul>  
       <h5>Descripcion</h5>
       <p>{producto[0].desc}</p> 
       <div className='d-flex justify-content-between align-items-center'>
       <p>Precio: ${producto[0].price.toLocaleString("es-CL")}</p>
       <button  onClick={()=> agregarCarrito(producto[0])} className="btn btn-primary">Añadir</button>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>      
        
    );
}
