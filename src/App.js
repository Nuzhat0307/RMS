import './App.css';
import AddProduct from './Admin/AddProduct/AddProduct';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Admin/DashboardComponent/Dashboard';
import ProductList from './Admin/ViewProducts/ProductList';

function App() {
  // const products = [
  //   {
  //     name: 'Butter Chicken',
  //     rating: 4.5,
  //     price: 200,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWr-YP263Cl5I5f5a0G4RsqdFfHpBCO2u-uQ&s',
  //   },
  //   {
  //     name: 'Chicken Biryani',
  //     rating: 4.2,
  //     price: 220,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWr-YP263Cl5I5f5a0G4RsqdFfHpBCO2u-uQ&s',
  //   },
  //   {
  //     name: 'Chicken Lollipop',
  //     rating: 4.4,
  //     price: 180,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWr-YP263Cl5I5f5a0G4RsqdFfHpBCO2u-uQ&s',
  //   },
  //   {
  //     name: 'Chicken Fried Rice',
  //     rating: 4.5,
  //     price: 220,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWr-YP263Cl5I5f5a0G4RsqdFfHpBCO2u-uQ&s',
  //   },
  // ];

  // const Foods = {
  //   biriyani: products,
  //   icecreams: {},
  //   friedrice: {}
  // }

  return (
    <Router>
      {/* <div>
        <div className='row orange padding margin-bottom'>
          <div className='col m12'>
            <p className='text-white text-xlarge'>MenuOne</p>
          </div>
        </div>
        <div className='row padding'>
          <h3>Non Veg</h3>
          {products.map((product) => <SingleBoxProduct product={product} />)}
        </div>
      </div> */}
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path='/ProductList' element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
