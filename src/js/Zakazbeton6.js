import React, { Component } from 'react'
import '../css/Zakazbeton.css';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
export default class Zakazbeton6 extends Component {
  render() {
    return (
      <div className='beton_div' > 
      <p className='beton_write1' >Когда?</p>
   
<div className="beton_pagm">
  <div className="beton_sot1">
<div className='beton_bot' >Как можно быстрее</div>
<div className="beton_bot2">Сегодня</div>
<div className='beton_bot3' >Предварительный заказ</div>
<input className='beton_oq' type="checkbox" />
<p className='beton_razbit' >Разбить заказ на части</p>
</div>
</div>

            <div className="beton_page6">
<div className="beton_soat1">


<div className="beton_sot2">
<div className="beton_hot">9:00 - 12:00</div>
<div className="beton_hot">12:00-15:00</div>
<div className="beton_hot">15:00-18:00</div>
<div className="beton_hot">18:00-21:00</div>

</div>
</div>
<div className="beton_soat2">

</div>

            </div>
            
                   <div className="beton_linee09"> <p className='beton_nomer' >6<span>/9</span></p>
                    <div className='beton_line' >
                      <div className='beton_line2322' ></div>
                     </div></div>
                  
                     <div className="beton_button">
                      <div className="beton_button1"> <h3><BsArrowLeft/></h3> <a href='/zakazbeton5' > Назад</a></div>
                      <div className="beton_button2"> <a href='/zakazbeton7' >Далее </a><h3><BsArrowRight/></h3></div>
              
                     </div>
                     </div> 
    )
  }
}
