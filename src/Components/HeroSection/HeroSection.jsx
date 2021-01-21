import React, { useState } from 'react';
import ColorCard from '../ColorCard/ColorCard';
import Modal from '../Modal/Modal';
import NavBar from '../NavBar/NavBar';
import "./HeroSection.css";
import {SiIconify} from 'react-icons/si'
import {GiUsaFlag} from 'react-icons/gi'
import { FaFontAwesomeFlag } from "react-icons/fa";
import {HiFlag} from 'react-icons/hi'
import Footer from '../Footer/Footer';

const HeroSection = () => {
    const [showmodal, setShowmodal] = useState(true) ;
    const removeModal = ()=> {
        setShowmodal(false)
    }
    return (
        <>
        <div className="">
                
            <section className="hero__area">
         
         <div className="hero__container">
             <NavBar/>
             {showmodal && <Modal showModal={removeModal} />}
             <div className="color-flex">
             <ColorCard
             one='#1abc9c' two='#2ecc71' there='#3498db' four='#9b59b6' five='#34495e' six='#16a085' seven='#27ae60' eight='#2980b9' nine='#8e44ad' ten='#2c3e50'
             eleven ='#f1c40f' twelve='#e67e22' thirteen='#e74c3c' fourteen='#ecf0f1' fifteen='#95a5a6' sixteen='#f39c12' seventeen='#d35400'
             eighteen='#c0392b' nineteen='#bdc3c7' twenty='#7f8c8d' title='Flat UI Palette v1' path='/palette/defo' icon={<SiIconify style={{fontSize:'25px'}} />}
             
             />
             <ColorCard
             one='#b00707' two='#2a6512' there='#cccccc' four='#a29bfe' five='#dfe6e9' six='#f42a41' seven='#006a4e' eight='#0984e3' nine='#aaaaaa' ten='#b2bec3'
             eleven ='#081e83' twelve='orange' thirteen='#f1ede1' fourteen='lime' fifteen='#8334ce' sixteen='#fdcb6e' seventeen='#85ed8b'
             eighteen='#d63031' nineteen='#e84393' twenty='#2d3436' title='Bangladesh Palette' path='/palette/bd' icon={<HiFlag style={{fontSize:'20px'}} />}
             
             />
             <ColorCard
             one='#f6e58d' two='#ffbe76' there='#ff7979' four='#badc58' five='#dff9fb' six='#f9ca24' seven='#f0932b' eight='#eb4d4b' nine='#6ab04c' ten='#c7ecee'
             eleven ='#7ed6df' twelve='#e056fd' thirteen='#686de0' fourteen='#30336b' fifteen='#95afc0' sixteen='#22a6b3' seventeen='#be2edd'
             eighteen='#4834d4' nineteen='#130f40' twenty='#535c68' title='Aussie Palette' path='/palette/au' icon={<FaFontAwesomeFlag style={{fontSize:'15px'}} />}
             
             />

             </div>
             {/* ====================== extra bar */}
             <div className="extra-bar">
                 <h1>GA Alternative</h1>
                 <h1>Build fluid sites</h1>
                 <h1>Stock Assets</h1>
             </div>

             {/* =======================color-flex  */}
             <div className="color-flex">
             <ColorCard
             one='#00a8ff' two='#9c88ff' there='#fbc531' four='#4cd137' five='#487eb0' six='#0097e6' seven='#8c7ae6' eight='#e1b12c' nine='#44bd32' ten='#40739e'
             eleven ='#e84118' twelve='#f5f6fa' thirteen='#7f8fa6' fourteen='#273c75' fifteen='#353b48' sixteen='#c23616' seventeen='#dcdde1'
             eighteen='#718093' nineteen='#192a56' twenty='#2f3640' title='British Palette' path='/palette/bp' icon={<SiIconify style={{fontSize:'25px'}} />}
             
             />
             <ColorCard
             one='#eccc68' two='#feca57' there='#ff6b6b' four='#48dbfb' five='#1dd1a1' six='#f368e0' seven='#ff9f43' eight='#ee5253' nine='#0abde3' ten='#10ac84'
             eleven ='#00d2d3' twelve='#54a0ff' thirteen='#5f27cd' fourteen='#c8d6e5' fifteen='#576574' sixteen='#01a3a4' seventeen='#2e86de'
             eighteen='#341f97' nineteen='#8395a7' twenty='#222f3e' title='Canadian Palette' path='/palette/cp' icon={<GiUsaFlag style={{fontSize:'20px'}} />}
             
             />
             <ColorCard
             one='#eccc68' two='#ff7f50' there='#ff6b81' four='#a4b0be' five='#57606f' six='#ffa502' seven='#ff6348' eight='#ff4757' nine='#747d8c' ten='#2f3542'
             eleven ='#7bed9f' twelve='#70a1ff' thirteen='#5352ed' fourteen='#ffffff' fifteen='#dfe4ea' sixteen='#2ed573' seventeen='#1e90ff'
             eighteen='#3742fa' nineteen='#f1f2f6' twenty='#ced6e0' title='Chinese Palette' path='/palette/cn' icon={<FaFontAwesomeFlag style={{fontSize:'15px'}} />}
             
             />

             </div>
             {/* =======================color-flex  */}
             <div className="color-flex">
             <ColorCard
             one='#FFC312' two='#C4E538' there='#12CBC4' four='#FDA7DF' five='#ED4C67' six='#F79F1F' seven='#A3CB38' eight='#1289A7' nine='#D980FA' ten='#B53471'
             eleven ='#EE5A24' twelve='#009432' thirteen='#0652DD' fourteen='#9980FA' fifteen='#833471' sixteen='#EA2027' seventeen='#006266'
             eighteen='#1B1464' nineteen='#5758BB' twenty='#6F1E51' title='Datch Palette' path='/palette/dp' icon={<SiIconify style={{fontSize:'25px'}} />}
             
             />
             <ColorCard
             one='#eccc68' two='#feca57' there='#ff6b6b' four='#48dbfb' five='#1dd1a1' six='#f368e0' seven='#ff9f43' eight='#ee5253' nine='#0abde3' ten='#10ac84'
             eleven ='#00d2d3' twelve='#54a0ff' thirteen='#5f27cd' fourteen='#c8d6e5' fifteen='#576574' sixteen='#01a3a4' seventeen='#2e86de'
             eighteen='#341f97' nineteen='#8395a7' twenty='#222f3e' title='French Palette' path='/palette/fp' icon={<GiUsaFlag style={{fontSize:'20px'}} />}
             
             />
             <ColorCard
             one='#fc5c65' two='#fd9644' there='#fed330' four='#26de81' five='#2bcbba' six='#eb3b5a' seven='#fa8231' eight='#f7b731' nine='#20bf6b' ten='#0fb9b1'
             eleven ='#45aaf2' twelve='#4b7bec' thirteen='#a55eea' fourteen='#d1d8e0' fifteen='#778ca3' sixteen='#2d98da' seventeen='#3867d6'
             eighteen='#8854d0' nineteen='#a5b1c2' twenty='#4b6584' title='German Palette' path='/palette/gp' icon={<FaFontAwesomeFlag style={{fontSize:'15px'}} />}
             
             />

             </div>
           
             {/* =======================color-flex  */}
             <div className="color-flex">
             <ColorCard
             one='#FEA47F' two='#25CCF7' there='#EAB543' four='#55E6C1' five='#CAD3C8' six='#F97F51' seven='#1B9CFC' eight='#F8EFBA' nine='#58B19F' ten='#2C3A47'
             eleven ='#B33771' twelve='#3B3B98' thirteen='#FD7272' fourteen='#9AECDB' fifteen='#D6A2E8' sixteen='#6D214F' seventeen='#182C61'
             eighteen='#FC427B' nineteen='#BDC581' twenty='#82589F' title='Indian Palette' path='/palette/in' icon={<SiIconify style={{fontSize:'25px'}} />}
             
             />
             <ColorCard
             one='#f3a683' two='#f7d794' there='#778beb' four='#e77f67' five='#cf6a87' six='#f19066' seven='#f5cd79' eight='#546de5' nine='#e15f41' ten='#c44569'
             eleven ='#786fa6' twelve='#f8a5c2' thirteen='#63cdda' fourteen='#ea8685' fifteen='#596275' sixteen='#574b90' seventeen='#f78fb3'
             eighteen='#3dc1d3' nineteen='#e66767' twenty='#303952' title='Russian Palette' path='/palette/ru' icon={<GiUsaFlag style={{fontSize:'20px'}} />}
             
             />
             <ColorCard
             one='#303952' two='#706fd3' there='#f7f1e3' four='#34ace0' five='#33d9b2' six='#2c2c54' seven='#474787' eight='#aaa69d' nine='#227093' ten='#218c74'
             eleven ='#cd6133' twelve='#ff793f' thirteen='#d1ccc0' fourteen='#ffb142' fifteen='#ffda79' sixteen='#b33939' seventeen='#cd6133'
             eighteen='#84817a' nineteen='#cc8e35' twenty='#ccae62' title='Spanish Palette' path='/palette/es' icon={<FaFontAwesomeFlag style={{fontSize:'15px'}} />}
             
             />

             </div>
             {/* =======================color-flex  */}
             <div className="color-flex">
             <ColorCard
             one='#ef5777' two='#575fcf' there='#4bcffa' four='#34e7e4' five='#0be881' six='#f53b57' seven='#3c40c6' eight='#0fbcf9' nine='#00d8d6' ten='#05c46b'
             eleven ='#ffc048' twelve='#ffdd59' thirteen='#ff5e57' fourteen='#d2dae2' fifteen='#485460' sixteen='#ffa801' seventeen='#ffd32a'
             eighteen='#ff3f34' nineteen='#808e9b' twenty='#1e272e' title='Swedish Palette' path='/palette/se' icon={<SiIconify style={{fontSize:'25px'}} />}
             
             />
             <ColorCard
             one='#cd84f1' two='#ffcccc' there='#ff4d4d' four='#ffaf40' five='#fffa65' six='#c56cf0' seven='#ffb8b8' eight='#ff3838' nine='#ff9f1a' ten='#fff200'
             eleven ='#32ff7e' twelve='#7efff5' thirteen='#18dcff' fourteen='#7d5fff' fifteen='#4b4b4b' sixteen='#3ae374' seventeen='#67e6dc'
             eighteen='#17c0eb' nineteen='#7158e2' twenty='#3d3d3d' title='Turkish Palette' path='/palette/tr' icon={<GiUsaFlag style={{fontSize:'20px'}} />}
             
             />
              <ColorCard
             one='#55efc4' two='#81ecec' there='#74b9ff' four='#a29bfe' five='#dfe6e9' six='#00b894' seven='#00cec9' eight='#0984e3' nine='#6c5ce7' ten='#b2bec3'
             eleven ='#ffeaa7' twelve='#fab1a0' thirteen='#ff7675' fourteen='#fd79a8' fifteen='#636e72' sixteen='#fdcb6e' seventeen='#e17055'
             eighteen='#d63031' nineteen='#e84393' twenty='#2d3436' title='Amirican Palette' path='/palette/us' icon={<GiUsaFlag style={{fontSize:'20px'}} />}
             
             />
            

             </div>
              {/* ====================== extra bar */}
              <div className="extra-bar">
                 <h1>Tweet and share your love for Flat Ui Colors</h1>
                 <button>tweet</button>
             </div>
         </div>
         <Footer/>
     </section>
    
        </div>
        </>
    )
}

export default HeroSection
