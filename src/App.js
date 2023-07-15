import logo from './logo.svg';
import './App.css';
import { Route, Routes,Link } from 'react-router-dom';
import Home from "../src/pages/Home"
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Layout from './Components/Layout';



function App() {
  return (
      <div>

    <Routes>
    <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/section1' element={<Section1/>}/>
        <Route path='/section2' element={<Section2/>}/>
        </Route>
        <Route path='/products' element={<Products/>}/>

        <Route path='/products/:id' element={<Detail/>}/>
      
    
     </Routes>
    
      </div>
  );
}

export default App;
