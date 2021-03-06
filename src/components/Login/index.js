import React from 'react';
import { useHistory } from 'react-router';
import './index.scss';

function Login(){
    const history = useHistory();
    const goToHome = () =>{
        history.push('/homepage')
    }
    const goToRegister = () =>{
        history.push('/register')
    }
    return(<div>


<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
          <h1 className="title title-login">Login</h1>   
            <div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required/>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required/>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox"/>
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success" onClick={goToHome}>
                Login
              </button>
              <button class="button is-success" onClick={goToRegister}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>)
}

export default Login;