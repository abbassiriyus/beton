import React from 'react'
import Navbar from './Navbar'
import "../css/home.css"
import IMG1 from "../img//баннер.png"
import IMG2 from "../img/Group 100.png"
import IMG3 from "../img/Group 62.png"
import IMG4 from "../img/Group 259.png"
import IMG5 from "../img/Group 261.png"
import IMG6 from "../img/Group 258.png"
import IMG7 from "../img/Group 260.png"
import IMG8 from "../img/Group 262.png"
import IMG9 from "../img/2 1548993563.png"
import IMG10 from "../img/Mask group (2).png"
import IMG11 from "../img/Mask group (3).png"
import IMG12 from "../img/497ab60ab79f80d6177faa511e5df442 2.png"
import IMG13 from "../img/Mask group (4).png"
import IMG14 from "../img/Mask group (5).png"
import IMG15 from "../img/2GIS_logo 1.png"
import IMG16 from "../img/Слой_x0020_1.png"
import IMG17 from "../img/101 1.png"
import IMG18 from "../img/Phone Location.png"
import IMG19 from "../img/AdobeStock_70069013 1.png"
import IMG20 from "../img/QR Code.png"

import {BsChevronRight} from "react-icons/bs"
import Zakazbeton from './Zakazbeton'

export default function Home() {
  return (
    <div>
        <div className="seriy">
        <Navbar/>
        <div className="rek">
            <img src={IMG1} alt="" />
        </div>
        <div className="beton_z">
            <div className="beton_sar">
                <img className='img1' src={IMG2} alt="" />
                <span>Заказ бетона</span>
            </div>
            <Zakazbeton/>
        </div>
        <div className="beton_z">
            <div className=" beton_sar1">
                <img className='img1' src={IMG2} alt="" />
                <span>О сервисе в  цифрах</span>
            </div>
         
        </div>
        <div className="beton_z_span">
            <span>Убедительные факты и цифры говорят сами за себя. 
                    Вот лишь несколько примеров:</span>
        </div>
        <div className="biton_hed">
            <div className="bit_hed1">
                <img src={IMG3} alt="" />
                <img src={IMG4} alt="" />
                <img src={IMG5} alt="" />
            </div>
            <div className="bit_hed2">
                <img className='img2' src={IMG6} alt="" />
                <img src={IMG7} alt="" />
                <img src={IMG8} alt="" />
            </div>
        </div>
        </div>
        <div className="beton_mashina">
            <div className="bet_mashina1">
                <div className="bet_mash1">
                    <div className="bet_mash11">
                    <h1>Немного 
                        о нас</h1>
                    </div>
                </div>
                <div className="bet_mash2">
                    <h3 className='p'>О сервисе</h3>
                    <p className='p1'>Сервис «БЕТОН ТАКСИ» предоставляет вам ряд уникальных преимуществ. Во-первых, это обеспечение оперативной поставки бетона, позволяющей сэкономить время и деньги без отставания от графика строительства. Во-вторых, это гарантия высокого качества бетона, поскольку поставки осуществляются только с заводов проверенных поставщиков.</p>
                    <p className='p2'>Читать полностью <BsChevronRight className='pp2'/></p>
                </div>
            </div>
            <div className="bet_mash3">
            <img className='img3' src={IMG9} alt="" />

            </div>
        </div>
        

       <div className="seriy1">
       <div className="beton_homiy">
            <h1>Наши партнеры</h1>
        </div>

        <div className="beton_homiy1">
            <div className="img5"><img src={IMG10} alt="" /></div>
            <img src={IMG11} alt="" />
            <img src={IMG12} alt="" />
            <img src={IMG13} alt="" />
            <div className="img4"><img src={IMG14} alt="" /></div>
        </div>

        <div className="beton_analiz">
            <div className="bet_ana1">
                <div className="bet_ana11">
                    <img src={IMG15} alt="" />

                    <div className="bet_ana_1">
                        <span className='s3'>4,8</span>
                            <div class="rating-result">
                                <span class="active"></span>	
                                <span class="active"></span>    
                                <span class="active"></span>  
                                <span class="active"></span>    
                                <span></span>
                            </div>
                    </div>

                </div>
                <div className="bet_ana11">
                    <img src={IMG16} alt="" />

                    <div className="bet_ana_1">
                        <span className='s3'>4,8</span>
                            <div class="rating-result">
                                <span class="active"></span>	
                                <span class="active"></span>    
                                <span class="active"></span>  
                                <span class="active"></span>    
                                <span class="active"></span>
                            </div>
                    </div>

                </div>
                
            </div>
            <div className="bet_ana2">
                <span className='s4'>С другой стороны постоянный количественный рост и сфера 
                    нашей активности требуют от нас анализа соответствующий 
                    условий активизации. Повседневная практика показывает,
                     что постоянный количественный рост и сфера нашей активности
                      играет важную роль в формировании форм развития<div className="br"></div>
                       Равным образом укрепление и развитие структуры
                        представляет </span>

               <div className="bet_ana22">
                <span>#245 заводов</span>
                <span className='s5'>#своя аттестованная лаборатория</span><br className='br2'/>
                <span className='s6'>#свой транспорт</span><br className='br1'/>
                <span>#свои швинги</span>
                </div>         
            </div>
        </div>
       </div>
        <div className="seriy">

            <div className="biton_klent">
                <div className="bit_kent1">
                    <img className='img6' src={IMG17} alt="" />
                </div>
                <div className="bit_kent2">
                    <div className="bit_kent_1">
                        <h1>Наши приемущества</h1>
                        <div className="bit_kent_but">
                            <button className='b3'>Для физических лиц</button>
                            <button className='b4'>Для юридических лиц</button>
                        </div>
                    </div>
                    <div className="bit_kent_2">
                        <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq11">
                            <img src={IMG18} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                            <h3>Заказ без забот.</h3>
                            <span>Наш сервис доставки бетона предлагает ту же простоту и удобство взаимодействия, как и заказ пиццы по телефону. Это максимально легкий и быстрый процесс.</span>
                        </div>
                        </div>
                    </div>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq1">
                            <img  src={IMG19} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                            <h3>Полный контроль.</h3>
                            <span>Полностью контролируем процесс выполнения заказа по поставке бетона. Вы можете следить за поставкой в режиме онлайн, ходом работ, включая заливку, и быть уверены в том, что заказ будет выполнен в полном объеме.</span>
                        </div>
                        </div>
                    </div>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG20} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                            <h3>Все в одном месте.</h3>
                            <span>У нас вы найдете все, что вам нужно – бетон, строительный раствор, пескобетон. Если вам требуется особый состав, то мы сделаем запрос у наших поставщиков.</span>
                        </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>

    </div>
  )
}
