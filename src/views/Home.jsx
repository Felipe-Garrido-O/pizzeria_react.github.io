import React, { useContext} from 'react';
import Head from '../components/Head';
import Grids from '../components/Grids';
import Context from '../Context';


export default function Home() {

 
  const {listaPizza} = useContext(Context);

  return (
    <div>

    <Head/> 
    <Grids listaPizza={listaPizza}/> 

    </div>
  );
}
