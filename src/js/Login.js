import React, {useEffect,useState} from 'react'
import '../css/Login.css'
import log from '../img/log.png'
import ofis from '../img/ofis.png'
import tme from '../img/tme.png'

  function bosss(){

    }
export default function Login() {
    const [page ,setPage]= useState(1)
    const [page1,setPage1] =useState(1)
    const [page2,setPage2] =useState(3)
    const [page3,setPage3] =useState(3)

    function Page(id){
      setPage1(id)
    }
    function Bos(){
    setPage2(page1)
 
    }
  

  return (
    <div className='login_page'>
      {page2==5?((page===8?(<>
        <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(3)}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1>Регистрация</h1>
              <p>Физическое лицо</p>
              <br />
              <div className="fizika-inputla1">
              <form action="">
              <input type="text"  placeholder="Логин" required />
              <input type="password"  placeholder="Пароль" required />
              <input type="password"  placeholder="Повторите пароль" required /> <br />
              <button type='button' onClick={()=>setPage2(10)} >Зарегестрироваться</button>
              </form>
              </div>
            </div>
            </div>
         </div>
      
      </>):(<div className="login-kotta">
        <div className="teper-login5" id="yoqol">
        <div className="img-x">
          <div className="login-img">
            <img src={log} alt="" />
          </div>
          <div className="login-x" ><box-icon name='x' onClick={()=>setPage2(3)} color="#ACACAC"   size="35px"></box-icon></div>
        </div>
            <div className="fizika-litso">
              <h1>Регистрация</h1>
              <p>Физическое лицо</p>
              <br />
              <div className="fizika-inputla">
              <input type="text"  placeholder="Имя" required />
              <input type="text"  placeholder="Фамилия" required />
              <input type="text"  placeholder="Отчество" required /> 
              <input type="phone"  placeholder="Телефон" required /> 
              
              <input type="email"  placeholder="Email" /> <br />
              <button type='button' onClick={()=>setPage(8)} >Далее</button>
              </div>
            </div>
            
            
        </div>
      </div>))):(<>{page2==6?(<div id='juda-kotta'>
        <div className="login-kotta">
        <div className="teper-login6" >
        <div className="img-x1">
          <div className="login-img1">
            <img src={ofis} alt="" />
          </div>
          <div className="login-x" ><box-icon name='x' onClick={()=>setPage2(3)} color="#ACACAC"   size="35px"></box-icon></div>
        </div>
            <div className="fizika-litso1">
              <h1>Регистрация</h1>
              <p>Организация</p>
              <br />
                <div className="page-6">
                    <form action="">
                    <input type="text" placeholder='Имя' />
                    <input type="text"   placeholder='Фамилия'/>
                    <input type="text"   placeholder='Отчество'/>
                    <input type="tel" placeholder='Телефон' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='ИНН' />
                    <input type="text" placeholder='Реквизиты' />
                    </form>
                    <div className="rekvezit">
                      <div className="rekvezit-img">
                      <img src={tme} alt="" />
                      </div>
                      <div className="rekvezit-text"><p>Прикрепить документы</p></div>
                      
                    </div>
                    <div className="rekvezit-btn"><button  onClick={()=>setPage(12)}>Далее</button></div>
                </div>
                
            </div>
            
            
        </div>
      </div>
      </div> ):(<>{page2==7?("7"):(
      <>
                {page===1?(         <div className="login-kotta">
            <div className="teper-login">
            <div className="login-ichi">
                   <h1>Вход в личный кабинет</h1>
                <div className="login_butoon">
                    <button id='login_but1' onClick={()=>setPage(2)}>Войти</button>
                    <button id='login_but2' onClick={()=>setPage(3)}>Зарегестрироваться</button>
                </div>
                   </div>
            </div>
         </div>):(page===2?(<div>
          <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(1)}  size="35px"></box-icon>
              </div>
              <div className="page2-ichi">
                <h1>Вход в личный кабинет</h1>
                <div className="page2-login-inp">
                  <input type="text"  placeholder="Логин" /><br />
                  <input type="password" if placeholder="Пароль"  /><br />
                  <div className="page-2-but">
                  <button>Войти</button>
                  </div>
                  <div className="page-2-but">
                  <p>Забыли пароль?</p>
                  </div>
                </div>
              </div>
            </div>
         </div>
         </div>):(page===3?(
         <div>
          <div className="login-kotta">  
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(1)}  size="35px"></box-icon>
              </div>
              <div className="page3-ichi">
                <h1>Регистрация</h1>
                <div className="page3-form">
                  <div className="page_form-checboc">
                    <div onClick={()=>Page(5)} className="checboc-block1">
                      <input type="radio"  />
                      <p>Физическое лицо</p>
                    </div>
                  </div>
                  <div  className="page_form-checboc1">
                    <div onClick={()=>Page(6)} className="checboc-block1">
                      <input type="radio" />
                      <p>Организация</p>
                    </div>
                  </div>
                  <div className="page_form-checboc1">
                    <div onClick={()=>Page(7)} className="checboc-block1">
                      <input type="radio" />
                      <p>Водитель</p>
                    </div>
                  </div>
                  <button onClick={()=>Bos()}>Далее</button>
                </div>
                
              </div>
            </div>
         </div>
         </div>):("")))}
      </>)}</>)}</>)}{page2===10?(<div>
        <div className="login-kotta">
            
            <div className="teper-login10">
            <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage2(5)}  size="35px"></box-icon>
              </div>
                  <div className="login-10-sozla">
                    <h1>Вы успешно  <br />
зарегистрировались</h1>
<p>Зайдите в сервис используя свой логин и пароль.</p>
<button>Войти в личный кабинет</button>
                  </div>
            </div>
         </div>
      </div>):(page===12?(<div>sasASAsAs</div>):(""))}
    </div>
  )
}