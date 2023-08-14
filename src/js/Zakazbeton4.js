import React, { Component } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import kartaa from "../img/solar_streets-map-point-bold.png"
export default class Zakazbeton4 extends Component {
  render() {
    return (
        <div className='beton_div' > 
  <p className='beton_write1' >Куда?</p>
    <div className="beton_p4">
<div className="beton_pager">
<div className="beton_surch">
<input className='beton_input' type="text" placeholder='Введите адрес' />
<h3 className='beton_search' ><BiSearch/></h3>
</div>
<div className="beton_karta">
  <img className='beton_rasm' src={kartaa} alt="" />
  <p className='beton_otkrit' >Открыть карту</p>
</div>
</div>

<div className="beton_pager2">
<div className="beton_hkj">
<p className='beton_xcv' >В скольки километрах от дороги <br /> находится Ваш участок?</p>
<p className='beton_xcv1' >0</p>
<input className='beton_boox' type="range" name="" id="" />

<p className='beton_xcv' >Имеются ли препятствия для большой машины 
на пути подъезда к вашему участку?</p>

<p className='beton_xcv' >Ширина проезда (м)</p>
<p className='beton_xcv1' >0</p>
<input className='beton_boox' type="range" name="" id="" />
<p className='beton_xcv' >Ограничения по высоте (м)</p>
<p className='beton_xcv1' >0</p>
<input className='beton_boox' type="range" name="" id="" />
</div>
</div>


    </div>
        
        
               <div className="beton_linee09"> <p className='beton_nomer' >4<span>/9</span></p>
                <div className='beton_line' >
                  <div className='beton_line2322' ></div>
                 </div></div>
              
                 <div className="beton_button">
                  <div className="beton_button1"> <h3><BsArrowLeft/></h3> <a href='/zakazbeton3' > Назад</a></div>
                  <div className="beton_button2"> <a href='/zakazbeton5' >Далее </a><h3><BsArrowRight/></h3></div>
          
                 </div>
                 </div>
    )
  }
}
