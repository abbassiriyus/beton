import React, { Component } from 'react'
import '../css/Zakazbeton.css';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import group from "../img/Group.png";
import group1 from "../img/Group(1).png"
import group2 from "../img/Group(2).png"
import group3 from "../img/Group(3).png"
export default class Zakazbeton5 extends Component {
  render() {
    return (
      <div className='beton_div' > <p className='beton_write' >Тариф</p>
  
 <div className="beton_phu1">
<div className="beton_ari1">
<div className="beton_uxshad">
<img className='beton_yemad' src={group} alt="" />
<div class="checkbox">
    <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"/>
    <label for="color-1"></label>
  </div>
</div>
<div className="beton_kamaz">
<img src={group1} alt="" />
<p className='beton_eko' >Эконом</p>
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
<img src={group2} alt="" />
<p className='beton_eko' >Стандарт</p>
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
<img src={group3} alt="" />
<p className='beton_eko' >Экспресс</p>
</div>
</div>

 </div>
             <div className="beton_linee120"> <p className='beton_nomer' >5<span>/9</span></p>
              <div className='beton_line' >
                <div className='beton_line2323' ></div>
               </div></div>
            
               <div className="beton_button">
                <div className="beton_button1"> <h3><BsArrowLeft/></h3> <a href='/zakazbeton4' > Назад</a></div>
                <div className="beton_button2"> <a href='/zakazbeton6' >Далее </a><h3><BsArrowRight/></h3></div>
        
               </div>
               </div>


      )
  }
}
