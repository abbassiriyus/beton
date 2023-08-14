
import React, { Component } from 'react'

import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

import '../css/Zakazbeton.css';
import fabrika from "../img/1548993561_log 1.png";
import beton from "../img/logo.png";
import logop from "../img/logop(1).png";
import skrin from "../img/Screenshot_7_lmp3jpq1 1.png";
import right from "../img/fluent_arrow-fit-16-filled.png";
import water from "../img/ph_drop-fill.png";
import zashita from "../img/bxs_shield.png";
import qor from "../img/Vector.png"
var data1=[{
  id:0,
  image:"https://betonplus.com.ua/wp-content/uploads/2021/04/prodazha-beton-foto-1.png",
  title:"Бетон"
},{
  id:0,
  image:"../img/cement 1(1).png",
  title:"Пескобетон"
},{
  id:0,
  image:"../img/183973062b952e05464d21c9f08676f9 1.png",
  title:"Строительный раствор"
}]



export default class Zakazbeton extends Component {
  state={
    page:0,
    first_select:{}
  }
  first_button=()=>{
if(this.state.first_select!=={}){
this.setState({page:1})
}
  }
  render() {
    return (
      <div style={{display:"flex",justifyContent:"center"}}>
    {this.state.page===0?(
    <div className='beton_div' ><p className='beton_write' >Что необходимо?</p>
    <div className='beton_card' >
   
  {data1.map((item,key)=>{
return  <div className='beton_mini1' >
<div className='beton_galochka' >
    <input className='galochka' type="checkbox" />
</div>
<div className='beton_img' ><img src={item.image} alt="" /> <p className='beton_nj' >{item.title}</p> </div>
</div>

  })}
 
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
    <button className="beton_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
    <button className="beton_button2"> <a onClick={()=>{this.first_button()}} >Далее </a><h3><BsArrowRight/></h3></button>
   </div>
   </div>):(<></>)}  
   {this.state.page==1?(<div>

      <div className='beton_div2' >   <p className='beton_write' >Производитель</p>
<div className="beton_chiziq">
<div class="range">
  <div className="beton_range">
    <p className='beton_mb' >М50</p>
    <p className='beton_mb' >М200</p>
    <p className='beton_mb' >М400</p>
  </div>
      <input type="range"  id="range2" class="range-input" />
      </div>
<div className="beton_table">
<table id="customers">
  <tr>
    <th>Производитель</th>
    <th>Марка</th>
    <th>Опции</th>
    <th>Цена</th>
  </tr>
  <tr>
    <td><img src={fabrika} alt="" /></td>
    <td className='m2' >М200</td>
    <td className='m3' > Наименование опции</td>
    <td className='m2' >2 000</td>
  </tr>
  <tr>
    <td><img src={beton} alt="" /></td>
    <td className='m2' >М200</td>
    <td>Наименование опции</td>
    <td className='m2' >2 000</td>
  </tr>
  <tr>
    <td><img src={logop} alt="" /></td>
    <td className='m2' >М200</td>
    <td>Наименование опции</td>
    <td className='m2' >2 000</td>
  </tr>
  <tr>
    <td><img src={skrin} alt="" /></td>
    <td className='m2' >М200</td>
    <td>Наименование опции</td>
    <td className='m2' >2 000</td>
  </tr>
</table>
<div className="beton_pod">
<div className="beton_logo">
<img src={right} alt="" />
<select className='beton_podd' name="" id="">
  <option className='beton_podd' value="">
  Подвижность
  </option>
  <option className='beton_podd' value="">
  Подвижность
  </option>
</select>
</div>
<div className="beton_logo">
 <img src={water} alt="" /> 
<select className='beton_podd' name="" id="">
  <option className='beton_podd' value="">
  Гидрофобная добавка
  </option>
  <option className='beton_podd' value="">
  Гидрофобная добавка
  </option>
</select>
</div>
<div className="beton_logo">
<img src={zashita} alt="" />
<select className='beton_podd' name="" id="">
  <option className='beton_podd' value="">
  Фиброволокно
  </option>
  <option className='beton_podd' value="">
  Фиброволокно
  </option>
</select>
</div>
<div className="beton_logo">
<img src={qor} alt="" />
<select className='beton_podd' name="" id="">
  <option className='beton_podd' value="">
  Противоморозная <br />
добавка
  </option>
  <option className='beton_podd' value="">
  Противоморозная <br />
добавка
  </option>
</select>
</div>
</div>
</div>
</div>
 <div className="beton_linee1"> <p className='beton_nomer' >2<span>/9</span></p>
  <div className='beton_line' >
    <div className='beton_line23' ></div>
   </div></div>
   <div className="beton_button">
    <div className="beton_button1"> <h3><BsArrowLeft/></h3> <a onClick={()=>{this.setState({page:0})}} > Назад</a></div>
    <div className="beton_button2"> <a href='/zakazbeton3' >Далее </a><h3><BsArrowRight/></h3></div>
   </div>
   </div>

   </div>):(<></>)}  
    </div>  

    )
  }
}
