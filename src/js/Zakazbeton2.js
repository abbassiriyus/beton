import React, { Component } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import fabrika from "../img/1548993561_log 1.png";
import beton from "../img/logo.png";
import logop from "../img/logop(1).png";
import skrin from "../img/Screenshot_7_lmp3jpq1 1.png";
import right from "../img/fluent_arrow-fit-16-filled.png";
import water from "../img/ph_drop-fill.png";
import zashita from "../img/bxs_shield.png";
import qor from "../img/Vector.png"
import '../css/Zakazbeton.css';

export default class Zakazbeton2 extends Component {
  render() {
    return (
<div className='beton_div' >   <p className='beton_write' >Производитель</p>
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
    <div className="beton_button1"> <h3><BsArrowLeft/></h3> <a href='/' > Назад</a></div>
    <div className="beton_button2"> <a href='/zakazbeton3' >Далее </a><h3><BsArrowRight/></h3></div>
   </div>
   </div>
    )
  }
}
