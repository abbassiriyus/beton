import React, { Component } from 'react'
import '../css/Zakazbeton.css';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import group from "../img/Group.png";
import laptop from "../img/Laptop.png"
import debit from "../img/Debit Card.png"
import hand from "../img/Coin In Hand.png"
import money from "../img/Money With Arrow.png"

export default class Zakazbeton7 extends Component {
  render() {
    return (
      <div className='beton_div' > 
      <p className='beton_write' >Способ оплаты</p>
   
      <div className="beton_phu12">
<div className="beton_ari1">
<div className="beton_uxshad">
<img className='beton_yemad' src={group} alt="" />
<div class="checkbox">
    <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"/>
    <label for="color-1"></label>
  </div>
</div>
<div className="beton_kamaz">
<img src={laptop} alt="" />
<p className='beton_eko' >Онлайн</p>
</div>




</div>
<div className="beton_ari1">
<div className="beton_uxshad">
<img className='beton_yemad' src={group} alt="" />
<div class="checkbox">
    <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"/>
    <label for="color-1"></label>
  </div>
</div>
<div className="beton_kamaz1">
<img src={debit} alt="" />
<p className='beton_eko1' >Перевод на карту</p>
</div>
</div>
<div className="beton_ari1">
<div className="beton_uxshad">
<img className='beton_yemad' src={group} alt="" />
<div class="checkbox">
    <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"/>
    <label for="color-1"></label>
  </div>
</div>
<div className="beton_kamaz1">
<img src={hand} alt="" />
<p className='beton_eko' >Наличные</p>
</div>
</div>
<div className="beton_ari1">
<div className="beton_uxshad">
<img className='beton_yemad' src={group} alt="" />
<div class="checkbox">
    <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"/>
    <label for="color-1"></label>
  </div>
</div>
<div className="beton_kamaz">
<img src={money} alt="" />
<p className='beton_eko' >Предоплата</p>
</div>
</div>
 </div>


            
                   <div className="beton_linee09"> <p className='beton_nomer' >7<span>/9</span></p>
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
