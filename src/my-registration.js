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

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import '@polymer/gold-phone-input/gold-phone-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-radio-button/paper-radio-button.js';

class MyRegistration extends PolymerElement {

    static get template() {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html `
      <style include="shared-styles">

      /**css for signup button */
      .signup{
        background:green;
        color:white;
        width:180px;
        border-radius:15px;
    }

    /**css for signin button */
    .signin{
        background:green;
        color:white;
        width:180px;
        border-radius:15px;
    }
    .signup:hover {
        background-color: skyblue;
      }
      .signin:hover {
        background-color: skyblue;
      }
      /**css for card */
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

 
   <!----app location---->
   <app-location route="{{route}}"></app-location>



         
       
     <center>
      
     <div class="card">
     <h1><u>Register Now and be a part of UniqueHire!!</u> </h1>
     <iron-form id='myForm'>
      <form is = "iron-form"   id = "form" action="/form/handler">

      <!---paper input---->
      <paper-input required auto-validate error-message="please fill UserName!" value="{{UserName}}"  label="UserName" ></paper-input>
         


      <paper-input type="email" required auto-validate error-message="please fill email!" value="{{email}}" label="Email-Id" ></paper-input>

       <!--gold phone input foe phone number--->
      <gold-phone-input required auto-validate error-message="please fill phone number!"value="{{phone}}" label="phonenumber" country-code="91" phone-number-pattern="XXX-XXXX-XXX"
       maxlength="12">
  </gold-phone-input><br><br>
  <h2>Date of Birth:
    <iron-input><input placeholder="type-date" required auto-validate error-message="please fill phone number!" type="date"></iron-input></h2>
    
         <!--paper dropdown button--->
       <paper-dropdown-menu label = " Degree" id="degree">
            <paper-listbox slot="dropdown-content">
              <paper-item >B.TECH</paper-item>
              <paper-item>MBA</paper-item>
              <paper-item>DEGREE</paper-item>
            </paper-listbox>
          </paper-dropdown-menu> &nbsp;&nbsp;&nbsp;&nbsp;
          
           <!--paper dropdown button--->
          <paper-dropdown-menu label = "Branch" value="{{branch}}">
          <paper-listbox slot="dropdown-content">
            <paper-item >EEE</paper-item>
            <paper-item>CSE</paper-item>
            <paper-item>IT</paper-item>
            <paper-item>MEC</paper-item>
            <paper-item>CIVIL</paper-item>
          </paper-listbox>
        </paper-dropdown-menu> &nbsp;&nbsp;&nbsp;&nbsp;
        
        <!--paper dropdown button--->
        <paper-dropdown-menu label = "Year Of Passing" value="{{year}}">
        <paper-listbox slot="dropdown-content">
          <paper-item >2021</paper-item>
          <paper-item>2020</paper-item>
          <paper-item>2019</paper-item>
          <paper-item>2018</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>  <br><br>

      <!--paper radio button for grnder--->
      <h2>Gender:</h2><br>
     <span><paper-radio-button><h2>Male</h2></paper-radio-button><span>
      <span><paper-radio-button><h2>Female</h2></paper-radio-button><br><br></span>

      <paper-input type="place" required auto-validate error-message="please fill city!" label="city" ></paper-input>
      <paper-input type="state" required auto-validate error-message="please fill state!" label="state" ></paper-input>
      <paper-input type="country" required auto-validate error-message="please fill country!" label="country" ></paper-input>
      <center>
        <br><br>
        <!--paper button for signin--->
      <paper-button raised class="signup" on-click="handleClick"><b>SignUp</b></paper-button>
      
      <br>
      <br>
      <br>

      <!--paper button for signin--->
      <span>Already have an account?</span>
      <paper-button raised class="signin" on-click="handleClick2"><b>SignIn</b></paper-button>
</center>

      </form>
      </iron-form>
      <div>
        </div>
        </div>
        </center>
      

    `;
    }

    static get properties() {
            return {

                firstname: {

                    type: String,
                    value: [],
                    notify: true
                },
                Email: {
                    type: String,
                    value: [],
                    notify: true
                },
                phonenumber: {
                    type: String,
                    value: [],
                    notify: true
                },
                registerData: {
                    type: Object,
                    value: [],
                    notify: true
                },


            };
        }
        //on click event
    handleClick() {


            if (this.UserName == '' && this.email == '' && this.phone == '') {
                alert("Please fill the form");
            } else {
                this.set('route.path', '/home');

            }
            //data storage
            this.registerData = {
                "firstname": this.UserName,
                "Email": this.email,
                "phonenumber": this.phone,

            }
            console.log(this.registerData);


        }
        //on click event
    handleClick2() {
        this.set('route.path', '/login');
    }
}

window.customElements.define('my-registration', MyRegistration);