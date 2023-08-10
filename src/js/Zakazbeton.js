
import React, { Component } from 'react'

import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

import '../css/Zakazbeton.css';
import 'swiper/css';
import 'swiper/css/navigation';
import kubik from "../img/m350 1.png";
import rubik from "../img/cement 1(1).png";
import tosh from "../img/183973062b952e05464d21c9f08676f9 1.png"
export default class Zakazbeton extends Component {
  render() {
    return (
      <div>
        
<div className='beton_div' ><p className='beton_write' >Что необходимо?</p>
    <div className='beton_card' >
   
   <div className='beton_mini1' >
       <div className='beton_galochka' >
           <input className='galochka' type="checkbox" />
       </div>
   <div className='beton_img' ><img src={kubik} alt="" /> <p className='beton_nj' >Бетон</p> </div>
   </div>
   <div className='beton_mini1' >
   <div className='beton_galochka' >
           <input className='galochka' type="checkbox" />
       </div>
   <div className='beton_img' ><img src={rubik} alt="" /> <p className='beton_nj'  >Пескобетон</p> </div>
   </div>
   <div className='beton_mini1' ><div className='beton_galochka' >
           <input className='galochka' type="checkbox" />
       </div>
   <div className='beton_img' ><img src={tosh} alt="" /> <p className='beton_nj2'  >Строительный <br />раствор</p> </div></div>
   <div className='beton_mini4' ><div className='beton_galochka' >
           <input className='galochka' type="checkbox" />
       </div>
       <p className='beton_yozuv' >Специальный бетон</p>
   <p className='beton_yozuv1' >Отправим ваш запрос <br />
   на все заводы</p>
   </div>
    
   </div>
 <div className="beton_linee"> <p className='beton_nomer' >1<span>/9</span></p>
  <div className='beton_line' >
    <div className='beton_line2' ></div>
   </div></div>

   <div className="beton_button">
    <div className="beton_button1"> <h3><BsArrowLeft/></h3> <span> Назад</span></div>
    <div className="beton_button2"><h3><BsArrowRight/></h3> <span>Далее </span></div>
   </div>
   </div>
  
    </div>  

    )
  }
}
