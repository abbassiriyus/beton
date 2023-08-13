import React, { Component } from 'react';
import '../css/Zakazbeton.css';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import {FaCalculator} from'react-icons/fa'
export default class Zakazbeton3 extends Component {
  render() {
    return (
      <div className='beton_div' > <p className='beton_write' >Количество</p>
  
<div className="beton_page3">
  <div className="beton_p1">
<div class="range2">
<p className='beton_om' >0<span>м3</span> </p>
      <input className='beton_ran' type="range" />
      </div>
  </div>
  <div className="beton_p2">
  <p className='beton_umri' >Не знаете количество?</p>
  <p className='beton_umri2' >Рассчитайте онлайн в калькуляторе</p>
  <button className='beton_sariq' > <h3><FaCalculator/></h3>  Калькулятор</button>
  </div>
</div>


       <div className="beton_linee12"> <p className='beton_nomer' >3<span>/9</span></p>
        <div className='beton_line' >
          <div className='beton_line232' ></div>
         </div></div>
      
         <div className="beton_button">
          <div className="beton_button1"> <h3><BsArrowLeft/></h3> <a href='/zakazbeton2' > Назад</a></div>
          <div className="beton_button2"> <a href='/zakazbeton4' >Далее </a><h3><BsArrowRight/></h3></div>
  
         </div>
         </div>
    )
  }
}
