import React from 'react';
import Pcards from './Pcards';

export default function Grids({listaPizza}) {
  return (
    <div className='row' >
    {listaPizza.map((e)=> (
     <Pcards producto={e} />  
    ))}    
    
    </div>
  )
}
