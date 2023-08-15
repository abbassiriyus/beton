
import React, { Component } from 'react'

import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

import '../css/Zakazbeton.css';


var data1=[{
  id:0,
  image:"../img/m350 1.png",
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
    {this.state.page===0?(<div>
      <div className='beton_div'  >
      <p className='beton_p1' >Что необходимо?</p>
      {data1.map((item,key)=>{
  return <div className="beton_div2">
    <div className="beton_mini">
     <div className="beton_galochka"> 
                <input  type="checkbox" id="reading" className='checkbox-field' />
               <label for="reading" className='checkbox-label' ></label></div>
     <div className="beton_img">
    <img src={item.image} alt="" />
    </div>
   <p>{item.title}</p>
  </div>
 
   </div>
    })}
 
  
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
  <button  className='beton_button1' > <h3><BsArrowLeft/></h3>Назад</button>
  <button  className='beton_button2' >Далее<h3><BsArrowRight/></h3></button>
</div>
 </div>):(<></>)}  
  {this.state.page==1?(<div>



   </div>):(<></>)}  
    </div>  

    )
  }
}
