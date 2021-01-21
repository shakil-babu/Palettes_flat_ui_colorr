import React, { useState } from 'react'
import {CgArrowLongLeft} from 'react-icons/cg'
import './Common.css';
import { NavLink } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CopiedModal from '../../CopiedModal';

const Common = ({
    one,two,there,four,five,six,seven,eight,nine,ten,eleven , twelve, thirteen, fourteen, 
    fifteen, sixteen, seventeen, eighteen, nineteen, twenty, title
}) => {
    const [copy, setCopy] = useState(false);
  

    const Copy = ()=> {
        setCopy(true);
        setTimeout(() => {
            setCopy(false)
        }, 400);
    }
    return (
        <div>
            {copy && <CopiedModal/>}
            <section className="common_area">
            <div className="palette__head">
                    <div className="arrowIcon">
                       <NavLink to='/'><CgArrowLongLeft className='arr-icon'/></NavLink> <span>Back</span>
                    </div>
                    <div className="sound">
                        <h3>{title}</h3>
                    </div>
                    <div className="format">
                        <h3>Copy Format : HEX(#AA1923)</h3>
                    </div>
                   
                </div>
                <div className="color__area">
                <div className="card-color_area">
                    <div className='color_content_area' style={{backgroundColor:one, width:'20%', height:'145px'}}><CopyToClipboard text={one} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard>  <h5>{one}</h5></div>
                    <div className='color_content_area' style={{backgroundColor:two, width:'20%', height:'145px'}} ><CopyToClipboard text={two} onCopy={Copy}><h3 className={copy?'largeText':'miniText'}>{copy?'Copied':'Copy'}</h3></CopyToClipboard>  <h5>{two}</h5></div>
                    <div className='color_content_area' style={{backgroundColor:there, width:'20%', height:'145px'}} ><CopyToClipboard text={there} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard>  <h5>{there}</h5></div>
                    <div className='color_content_area' style={{backgroundColor:four, width:'20%', height:'145px'}} ><CopyToClipboard text={four} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard>  <h5>{four}</h5></div>
                    <div className='color_content_area' style={{backgroundColor:five, width:'20%', height:'145px'}} ><CopyToClipboard text={five} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard>  <h5>{five}</h5> </div>
                </div>
                <div className="card-color_area">
                    <div className='color_content_area' style={{backgroundColor:six, width:'20%', height:'145px'}} ><CopyToClipboard text={six} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard>  <h5>{six}</h5></div>
                    <div className='color_content_area' style={{backgroundColor:seven, width:'20%', height:'145px'}} ><CopyToClipboard text={seven} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard><h5>{seven}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:eight, width:'20%', height:'145px'}} ><CopyToClipboard text={eight} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{eight}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:nine, width:'20%', height:'145px'}} ><CopyToClipboard text={nine} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard><h5>{nine}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:ten, width:'20%', height:'145px'}} ><CopyToClipboard text={ten} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{ten}</h5> </div>
                </div>
                <div className="card-color_area">
                    <div className='color_content_area' style={{backgroundColor:eleven, width:'20%', height:'145px'}} ><CopyToClipboard text={eleven} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{eleven}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:twelve, width:'20%', height:'145px'}} ><CopyToClipboard text={twelve} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{twelve}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:thirteen, width:'20%', height:'145px'}} ><CopyToClipboard text={thirteen} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{thirteen}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:fourteen, width:'20%', height:'145px'}} ><CopyToClipboard text={fourteen} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard><h5>{fourteen}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:fifteen, width:'20%', height:'145px'}} ><CopyToClipboard text={fifteen} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard><h5>{fifteen}</h5> </div>
                </div>
                <div className="card-color_area">
                    <div className='color_content_area' style={{backgroundColor:sixteen, width:'20%', height:'145px'}} ><CopyToClipboard text={sixteen} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{sixteen}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:seventeen, width:'20%', height:'145px'}} ><CopyToClipboard text={seventeen} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{seventeen}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:eighteen, width:'20%', height:'145px'}} ><CopyToClipboard text={eighteen} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{eighteen}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:nineteen, width:'20%', height:'145px'}} ><CopyToClipboard text={nineteen} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard><h5>{nineteen}</h5> </div>
                    <div className='color_content_area' style={{backgroundColor:twenty, width:'20%', height:'145px'}} ><CopyToClipboard text={twenty} onCopy={Copy}><h3 className={copy?'largeText':'miniText'} >{copy?'Copied':'Copy'}</h3></CopyToClipboard> <h5>{twenty}</h5> </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Common
