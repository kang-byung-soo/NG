import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../features/main/home/home';
import BrandRegister from '../features/main/brandregister/brandregister'
import AboutUs from '../features/main/aboutus/aboutus'
import SearchNft from "../features/main/searchnft/searchnft"
import MyNft from "../features/main/mynft/mynft"
import MyNftDetail from "../features/main/mynft/detailnft"

import CompanyMain from '../features/company/main/page';
import CompanyRegister from '../features/company/register/register';
import Products from '../features/company/products/products';
import Detail from '../features/company/detail/detail';
import Product from '../features/company/product/product'

import AdminMain from '../features/admin/main/AdminMain';
import Approve from '../features/admin/approve/Approve';
import Deny from '../features/admin/deny/Deny';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Main/> } />
        <Route exact path="/aboutus" element={ <AboutUs/> } />
        <Route exact path="/searchnft" element={ <SearchNft/> } />
        <Route exact path="/mynft" element={ <MyNft/> } />
        <Route exact path="/mynft/:serialNo" element={ <MyNftDetail/>} />
        <Route exact path="/brandregister" element={ <BrandRegister/> } />


        <Route exact path="/company" element={ <CompanyMain/>}/>
        <Route exact path="/company/register" element={ <CompanyRegister/> }/>
        <Route exact path="/company/products" element={ <Products/>}/>
        <Route exact path="/company/products/:productCode" element={ <Detail/>}/>
        <Route exact path="/company/products/:productCode/:productNum" element={ <Product/>}/>

        
        <Route exact path="/admin" element={<AdminMain/>}/>
        <Route exact path="/admin/approve" element={<Approve/>}/>
        <Route exact path="/admin/deny" element={<Deny/>}/>
      </Routes>
    </Router>
  );
}

export default App;
