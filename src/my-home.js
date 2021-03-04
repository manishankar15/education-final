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
import '@polymer/iron-image/iron-image.js';



class MyHome extends PolymerElement {
    static get template() {
        return html `

        <!----css---->
        
      <style include="shared-styles">
        
        
       
        
        .log{
          background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(../images/img1.jpg)no-repeat;
        
          background-size: cover;
          padding:18%;
          border-radius:10px;
         
          object-fit: fill;
          }

        /**button */

        .btn{
          position: absolute;
    top: 68%;
    right: 42%;
    
    border-radius: 15px;
    color: white;
    background-color: #3494E6;
    text-transform: uppercase;
    padding: 10px;
    font-weight: bold;
}
         
/*  content   */
.writer h3{
     font-family:  sans-serif;
     
     text-transform: uppercase;
     color: white;
           
    
     text-align: center;
}

/**button hover */
.btn:hover{
  background: green;
}
/**footer */
footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
     margin-top: 500px;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(0,0,0,0.1);
    
}

footer p {
    margin: 1px 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida  Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

/**navbar css */
.wrapper {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: #343436;
}

nav {
  display: flex;
  width: 90%;
}

ul li a {
  margin-left: 1.5em;
}

a.logo {
  margin-right: auto;
}

ul {
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
  color: #ffffff;
  position: relative;
  font-size: 1.25em;
}

a::after {
  content:"";
  top: 80%;
  border-bottom: 2px solid #F8E71C;
  transition: all 0.35s;
  position: absolute;
}

a:hover::after {
  transition: all 0.35s;
}

a::after {
  right: 50%;
  left: 50%;
}

a:hover::after {
  right: 0;
  left: 0;
}

@media (max-width: 1024px) {
  .wrapper {
    height: auto;
  }
  
  nav {
    flex-direction: column;
    align-items: center;
  }
  
  a.logo {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-right: 0px;
  }
  
  ul {
    width: 100%;
    margin-bottom: 1em;
    justify-content: flex-start;
  }
  
  ul li a {
    margin-left: 0px;
  }
}

@media (max-width: 768px) {
  a.logo {
    margin: 1.5em;
    width:100%;
    
  }
 
  .navmenu {
    
    flex-direction:flex-end;
  }
  ul {
    
    flex-direction: column;
  }
  
  ul li {
    display:flex;
    margin: -0.5em;
    text-align: center;
    flex-direction: column;
  }
  
  ul li a {
    margin-left: 0px;
  }
}

@media only screen and (max-width: 880px) {
           
           .btn{
           
             top: 82%;
            right: 20%;
           }
           ul {
            display: flex;
  flex-direction: column;
  }
          }
          
 </style>

      <!----app location---->
     <app-location route="{{route}}"></app-location>
     <!---navbar--->
     <div class="wrapper">
  <nav>
    <a href="#" class="logo">UniqueHire Education</a>
    <div class="navmenu">
    <ul>
      <li>
      <a name="home" href="[[rootPath]]home"><paper-button >Home</paper-button></a>
      </li>
      <li>
      <a name="vision" href="[[rootPath]]vision"><paper-button >Vision</paper-button></a>
      </li>
      <li>
      <a name="courses" href="[[rootPath]]courses"><paper-button >Courses</paper-button></a>
      </li>
      <li>
      <a name="dashboard" href="[[rootPath]]dashboard"><paper-button >Dashboard</paper-button></a>
      </li>
      <li>
      <a name="logout" href="[[rootPath]]login"><paper-button >logout</paper-button></a>
      </li>
    </ul>
    </div>
  </nav>

  </div>  
            
      <div class="log">
      
      <!--iron image for adding image--->
     <iron-image sizing="contain" class="img" alt="The Polymer logo." src="../images/img1.jpg" ></iron-image>
     

      
  <div class="writer">
        <h3> "We Ensure better education <br>for a better world"</h3> 

       <!---paper button is for adding a button--->
        <paper-button raised class="btn" on-click="handleClick"><b>SEE HOW WE ARE DIFFERENT</b></paper-button>
      
            
          
     
      </div>
      
       
      </div>
      <!--footer-->
      <footer>
  <p>
        Copyright &copy;,UniqueHireEducation
     
    </p>
</footer>

    `;

    }

    /**for route path of the linking page */
    handleClick() {
        this.set('route.path', '/vision');
    }

}

window.customElements.define('my-home', MyHome);