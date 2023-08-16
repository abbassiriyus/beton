import beton from "../img/m350 1.png";
import React, { Component } from 'react'
import cement from "../img/cement 1(1).png";
import tosh from "../img/183973062b952e05464d21c9f08676f9 1.png"
import { BsArrowLeft } from 'react-icons/bs';
import {BsArrowRight} from 'react-icons/bs';
import kich  from "../img/1548993561_log 1.png";
import logo from "../img/logo.png";
import kema from "../img/logop(1).png";
import yengi from "../img/Screenshot_7_lmp3jpq1 1.png"
import '../css/Zakazbeton.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import fliev from "../img/fluent_arrow-fit-16-filled.png";
import phu from "../img/ph_drop-fill.png";
import shield from "../img/bxs_shield.png"
import qor from "../img/Vector.png"
export default class Zakazbeton extends Component {
  state={
    page:0,
    first_select:{},
    
  }
  first_button=()=>{
if(this.state.first_select!=={}){
this.setState({page:1})
}
 }
 
render(){


  return (
    <div>
   {this.state.page===0?(
         <div>
         <div className='beton_div'  >
         <p className='beton_p1' >Что необходимо?</p>
   <div className="beton_div2">
     <div className="beton_mini">
       <div className="beton_galochka"> 
       <input  type="checkbox" id="reading" className='checkbox-field' />
     <label for="reading" className='checkbox-label' ></label></div>
   <div className="beton_img">
   <img src={beton} alt="" />
   </div>
   <p>Бетон</p>
     </div>
     <div className="beton_mini">   
     <div className="beton_galochka"> 
     <input  type="checkbox" id="writing" className='checkbox-field' />
     <label for="writing" className='checkbox-label' ></label>
     </div>
   <div className="beton_img">
   <img src={cement} alt="" />
   </div>
   <p>Пескобетон</p>
       </div> 
        <div className="beton_mini">
        <div className="beton_galochka"><input  type="checkbox" id="driwing" className='checkbox-field' />
     <label for="driwing" className='checkbox-label' ></label> </div>
        <div className="beton_img">
   <img src={tosh} alt="" />
   </div>
   <p>Строительный <br />раствор</p>
       </div> 
        <div className="beton_mini2">
        <div className="beton_galochka">
        <input  type="checkbox" id="opening" className='checkbox-field' />
     <label for="opening" className='checkbox-label' ></label>
          </div>
   <p className='beton_p' >Специальный бетон</p>
   <p className='beton_wrote' >Отправим ваш запрос <br />на все заводы</p>
       </div>
   </div>
   <div className="beton_line">
   <p>1<span>/9</span></p>
   <div className="beton_lin2">
     <div className="beton_lin3"></div>
   </div>
   </div>
   <div className="beton_but">
       <button className="beton_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
       <button className="beton_button2"> <a onClick={()=>{this.first_button()}} >Далее </a><h3><BsArrowRight/></h3></button>
      </div>
       </div>
         </div>
       ):(<></>)}
      {this.state.page==1?(
      <div>
        <div className='beton_div'  >
         <p className='beton_p1' >Производитель </p>
   <div className="beton2_div2">
  <div className="beton2_range">
    <div className="beton2_range2">
    <p>М50</p><p>М200</p><p>М400</p>
    </div>
<label for="range" className="range-label" ></label>
<input type="range" name="range" id="range" className="range-field"  />
  </div>


<div className="beton2_bir">
<div className="beton2_table1">
  
  <table id="customers">
    <tr>
      <th>Производитель</th>
      <th>Марка</th>
      <th>Опции</th>
      <th>Цена</th>
    </tr>
    <tr>
    <img src={kich} alt="" />
    <td className="beton2_td2" >М200</td>
         <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={logo} alt="" />
    <td  >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={kema} alt="" />
      <td  >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={yengi} alt="" />
    <td >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={yengi} alt="" />
    <td >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
     <tr>
    <img src={yengi} alt="" />
    <td >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={kich} alt="" />
    <td className="beton2_td2" >М200</td>
         <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={logo} alt="" />
    <td  >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={kema} alt="" />
      <td  >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={yengi} alt="" />
    <td >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
    <tr>
    <img src={yengi} alt="" />
    <td >М200</td>
      <td className="beton2_td" >Наименование опции</td>
      <td>2 000</td>
    </tr>
  </table>
  </div>

  <div>
<div className="beton2_accordion">
<Accordion classname="beton2_accordion" defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header>
          <img src={fliev} alt="" /><p>Подвижность</p>
        </Accordion.Header>
        <Accordion.Body>
     
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
    <img src={phu} alt="" />
    <p>Гидрофобная добавка</p>
        </Accordion.Header>
        <Accordion.Body>
        <div className="beton2_da">
      <div className="beton2_da2">
      <input type="radio" />
 <p>Да</p>
      </div>
<div className="beton2_da2">
  <input type="radio" />
  <p>Нет</p>
</div>
        </div>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
        <img src={shield} alt="" />
    <p>Фиброволокно</p>
        </Accordion.Header>
        <Accordion.Body>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>     <img src={qor} alt="" />
    <p>Противоморозная 
добавка</p></Accordion.Header>
        <Accordion.Body>
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
    </div>


</div>
</div>
 
   <div className="beton_line">
   <p>2<span>/9</span></p>
   <div className="beton_lin2">
     <div className="beton_lin3"></div>
   </div>
 </div>
   <div className="beton_but">
       <button className="beton_button1"> <h3><BsArrowLeft/></h3> <a onClick={()=>{this.setState({page:0})}}> Назад</a></button>
       <button className="beton_button2"> <a onClick={()=>{this.first_button()}} >Далее </a><h3><BsArrowRight/></h3></button>
      </div>
         </div>
       </div>
      ):(<></>)}

    </div>
      )
   }
   }
  
   
   

 