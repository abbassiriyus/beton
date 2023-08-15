import React, {useEffect,useState} from 'react'
import '../css/Login.css'


export default function Login() {
    const [page ,setPage]= useState(1)
    
  return (
    <div className='login_page'>
         <div className="login-kotta">
            <div className="teper-login">
            <div className="login-ichi">
                   <h1>Вход в личный кабинет</h1>
                <div className="login_butoon">
                    <button id='login_but1' onClick={()=>setPage(2)}>Войти</button>
                    <button id='login_but2' onClick={()=>setPage(3)}>Зарегестрироваться</button>
                </div>
                   </div>
            </div>
         </div>
    </div>
  )
}
