import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './index.scss';
const {createUser} = require('../../db/dbService');

function Register(){
    const history = useHistory();

    let [username, setUserName] = useState('')
    let [password, setPassword] = useState('')


    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        history.push('/');
    }
    async function handleRegInfo(regInfo){
        const payload = {'username': username, 'password':password}
        console.log(payload)
        const user = await createUser(payload);
        console.log(user)
        return user;
    }
    return(
        <div className="register">
            <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column register-area  is-5-tablet is-4-desktop is-3-widescreen">
            
          <form action="" class="box">
          <h1 className="title title-reg">Register</h1>   
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" value={username} onChange={handleUserName} required/>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" value={password} onChange={handlePassword} required/>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
         
            <div class="field">
              <button class="button is-success btn-register" onClick={handleLogin}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Register;