import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './views/Home';
import Detalle from './views/Detalle';
import Carrito from './views/Carrito';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import Context from './Context';


function App() {
  
  const [ listaPizza, setListaPizza] = useState([]);

  const [ carrito, setCarrito] = useState([]);

  
  const consultarPizza = async () => {
    
    const response = await fetch('/pizzas.json');
    const data = await response.json();
    
    setListaPizza(data);
    
    }
 
    useEffect(() => {
      consultarPizza();
      }, []);  

      
      const agregarCarrito = ({id, price, img, name}) => {
        const seleccion = carrito.findIndex((e)=> e.id === id);
        const prodSeleccion = ({id, price, img, name, count: 1});
              
        if (seleccion >= 0) {
          carrito[seleccion].count ++ ;
          setCarrito([...carrito]);
            }else{
           setCarrito([...carrito,prodSeleccion]); 
            }
        } 

        const incrementar = (id) => {
          const sumar = carrito.find((prod) => prod.id === id);
          carrito[sumar].count ++;
          setCarrito([...carrito]);
          
         }

         const decrementar = (id) => {
          carrito[id].count--;
          setCarrito([...carrito]);
          }
         

         const borrar = () => {
         setCarrito([]);
        }

   const estados = {listaPizza, setListaPizza, carrito, setCarrito, agregarCarrito, incrementar, borrar, decrementar} ;

  return (

    <div className="App">
    
    <Context.Provider value={estados}>  
    <BrowserRouter>
    <Navbar/>

    <Routes>
   
    <Route path='/' element={<Home/>}/>
    <Route path='/pizza/:id' element={<Detalle/>}/>
    <Route path='/carrito' element={<Carrito/>}/>
    <Route path='*' element={<NotFound/>}/>
    
    </Routes>
    </BrowserRouter>
    </Context.Provider>  
    
    </div>
  );
}

export default App;
