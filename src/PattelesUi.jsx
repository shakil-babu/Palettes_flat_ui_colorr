import React from 'react'
import {BrowserRouter, Route , Switch , Redirect} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage'
import BsPalette from './Components/Palettes/BritishPalette/BsPalette';
import CdPalette from './Components/Palettes/CanadianPalette/CdPalette';
import Chinese from './Components/Palettes/ChinesePalette/Chinese';
import AuPalette from './Components/Palettes/Common/AustraliaPalette/AuPalette';
import Defo from './Components/Palettes/DefoPalette/Defo'
import UsPalette from './Components/Palettes/UsPalette/UsPalette';
import Datch from './Components/Palettes/DatchPalette/Datch'
import French from './Components/Palettes/FrenchPalette/French';
import German from './Components/Palettes/GermanPalette/German';
import Indian from './Components/Palettes/Inidan'
import Russian from './Components/Palettes/Russian'
import Spanish from './Components/Palettes/Spanish'
import Swedish from './Components/Palettes/Swedish';
import Turkish from './Components/Palettes/Turkish';
import Bangladesh from './Components/Palettes/Bangladesh'
import './Components/Palettes/Common/Common.css'
import Subscribe from './Components/Pages/HomePage/Subscribe'
import Submit from './Components/Pages/HomePage/Submit';
import About from './Components/Pages/HomePage/About';

const PattelesUi = () => {
    return (
        <>
            <BrowserRouter>
               <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/palette/defo' component={Defo}/>
                    <Route path='/palette/us' component={UsPalette}/>
                    <Route path='/palette/au' component={AuPalette} />
                    <Route path='/palette/bp' component={BsPalette} />
                    <Route path='/palette/cp' component={CdPalette} />
                    <Route path='/palette/cn' component={Chinese} />
                    <Route path='/palette/dp' component={Datch} />
                    <Route path='/palette/fp' component={French} />
                    <Route path='/palette/gp' component={German} />
                    <Route path='/palette/in' component={Indian} />
                    <Route path='/palette/ru' component={Russian} />
                    <Route path='/palette/es' component={Spanish} />
                    <Route path='/palette/se' component={Swedish} />
                    <Route path='/palette/tr' component={Turkish} />
                    <Route path='/palette/bd' component={Bangladesh} />
                    <Route path='/subscribe' component={Subscribe}/>
                    <Route path='/submit' component={Submit}/>
                    <Route path='/about' component={About}/>
               </Switch>
            </BrowserRouter>
        </>
    )
}

export default PattelesUi
