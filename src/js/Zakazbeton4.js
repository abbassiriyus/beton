import React, { Component } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
export default class Zakazbeton4 extends Component {
  render() {
    return (
        <div className='beton_div' > <p className='beton_write' >Количество</p>
  
    
        
        
               <div className="beton_linee12"> <p className='beton_nomer' >4<span>/9</span></p>
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
