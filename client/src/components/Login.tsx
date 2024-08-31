import './style.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <div className='center loginScreen'>
            <div id='loginBox'>
                <div>
                    <h1>One Password</h1>
                </div>
                <div>
                    <h2>Log IN</h2>
                </div>
                <div className='loginElements'>
                    <input type="email" name="" id="loginEmail" placeholder='Email ID' />
                </div>
                <div className='loginElements'>
                    <input type="password" name="" id="loginPassword" placeholder='Password'/>
                </div>
                <div className='loginElements center'>
                    <input type="button" value="Login" id="loginButton"/>
                </div>

                <div>
                    <h4>Don't have any account? <Link to="/signup"> Sign Up</Link></h4>
                </div>
            </div>
        </div>
    </>
  )
}
