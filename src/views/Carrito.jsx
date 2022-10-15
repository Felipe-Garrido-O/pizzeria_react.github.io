import React from 'react';
import {useContext} from 'react';
import Context from '../Context';


export default function Carrito() {
 
const {carrito, incrementar, decrementar, borrar} = useContext(Context);


const total = carrito.reduce((valor, {price, count}) => valor + price * count, 0 );

  return (
      <div className='container'> 
      <div className='carrito p-4'>
      <div className='pedido bg-light w-75 m-auto p-4'>
      <h5>Detalles del pedido</h5>
      <div className='p-3 bg-white'>
      {carrito.map((prod) => (
       <> 
      <div className='d-flex justify-content-between py-2' key={prod.id}>
      <div className='d-flex justify-content-between align-items-center'>   
      <img src={prod.img} className='' width="60" alt="imagen pizza" />
      <h6 className='mb-0 p-2'>{prod.name}</h6>
      <h6 className='mb-0 p-2 text-primary'>$ {(prod.price * prod.count).toLocaleString("es-CL")}</h6> 
      </div>
      <div className='d-flex justify-content-start'>
      <button className='btn btn-danger' onClick={() => decrementar(prod)}> - </button> 
      <b className='p-2'>{prod.count}</b> 
      <button className='btn btn-primary' onClick={()=>incrementar(prod)}> + </button> 
      <button className='btn btn-muted' onClick={()=>borrar(prod)}> x </button> 
      </div>
      </div>
      </>
      ))}  

     </div>
     <div className='mb-0 p-2 '>
      <h5>Total: ${total.toLocaleString("es-CL")}</h5>
      </div> 
    </div>
    </div>
    </div>
    
   );
}
