/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';




class MyLogin extends PolymerElement {
    static get template() {
        return html `
        <!---css-->
      <style include="shared-styles">
        
        
        .login{
          background:green;
          color:white;
          width:150px;
          height:30px
          border-radius:50px;

        }
        .login:hover {
          background-color: red;
        }

        .signup{
          background:green;
          color:white;
          width:150px;
          height:30px;
         
          }

          .signup:hover {
          background-color: red;
        }

        .card{
          width:50%;
          height:50%;
          padding:50px;
       font-size:10px;
       border-radius:20px;
       text-align:center;
       margin-top:5%;
       background:white;
        }
        
        
       
   
      </style>


    
      <center>
        
        
        <!----app location---->
        <app-location route="{{route}}" ></app-location>
        <center>
        
         </center>
        <div class="card">
        <br>
        <h1>Welcome to UniqueHire Education!!</h1>
        

        <!---paper input for user name--->
        <paper-input UserName label="UserName" id="username" value="{{UserName}}"></paper-input>
        <!---paper input for user password--->
        <paper-input type="password" Password label="Password" id="password" value="{{Password}}"></paper-input>
        
            

        
         <br><br>

         <!---paper button for login--->
        <paper-button raised class="login" on-click="handleClick"><b>LOGIN</b></paper-button>
        


        <br>
        
        <!---paper button for signup--->
        <h4>Didn't have an account?</h4>&nbsp;<paper-button raised class="signup" on-click="handleClick2"><b>SIGNUP</b></paper-button>
        
        

        </div>
     
        
       
        
     
      </center>
      <br><br><br>

      
    `;

    }



    /**route path for login */
    handleClick() {


        if (this.UserName == '' && this.Password == '') {
            alert("Please enter Username and Password");
        } else if (this.UserName == 'Manishankar' && this.Password == 'mani@123') {
            this.set('route.path', '/home');

        } else {
            alert("please enter correct Username and Password");
        }
        location.reload();
    }


    /**route path for signup */
    handleClick2() {
        this.set('route.path', '/registration');

    }

}

window.customElements.define('my-login', MyLogin);