import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import EQList from './components/HomePage/EQList';
import EQDetails from './components/DetailsPage/EQDetails';
import Profile from './components/ProfilePage/Profile';

const App = () => (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<EQList />} >
            </Route>
            <Route path='/details/:id' element={<EQDetails />} >
            </Route>
            <Route path='/profile' element={<Profile />} >
            </Route>
        </Routes>
    </div>
);

export default App;