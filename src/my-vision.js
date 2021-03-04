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



class MyVision extends PolymerElement {
    static get template() {
        return html `

        <!---css--->
      <style include="shared-styles">
         
  
            /**image and content */
           .about{
            background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6));
            object-fit: fill;
           
        } 
        .about h2{
             font-family: Arial Black;
             text-align: center;
             margin-bottom:115px;
             
             color: white;
             font-weight: bold;
            
        }
        
        
        .about h4{
             font-family: Times New Roman;
             text-align: center;
             font-size: 25px;
             color: white;
        }
        
        /**content */
        .about1 h1{
            
             font-family: Times New Roman;
             text-align: center;
             font-weight: bold;
             font-size: 45px;
             
             color: black;
             text-align: center;
        }
        
             
        .about1 h4{
        
            margin-left: 4%;
        }
        
        /**button */
        .container {
            position: absolute;
            font-weight: bold;
             color: white;
            background-color: rgb(255, 81, 0);
            text-align: center;
            text-transform: uppercase;
            top: 13%;
            right: 45%;
            height:35px;
            width:130px;
            
            border-radius:8px;
           
        }
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
/**footer */
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
  }
  
  ul {
    flex-direction: column;
  }
  
  ul li {
    margin: -0.5em;
    text-align: center;
  }
  
  ul li a {
    margin-left: 0px;
  }
}
@media (max-width: 768px) {
  .container{
    margin-top:250px;
    right: 28%;
  }
        
        
        
      </style>
      <!----navbar ---->
    <div class="wrapper">
  <nav>
    <a href="#" class="logo">UniqueHire Education</a>
    
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
  </nav>

  </div>  
     
      <!--first image--->
      <div class="about">
      
      
          
          
          <br>
          <br>
          <!--papper button is to add button-->
          <paper-button raised class="container" on-click="handleClick"><b>OUR MISSION</b></paper-button><br>
                
               </h2>
               <h2>Helping students achieve their best</h2>
  
              <h4> 
                  We empower students to accomplish their goals by providing an outstanding curriculum<br> and the highest-quality instructors in the industry. </h4>
          </p> 
          </div>
          <br><br><br><br><br><br>
  
  
          <!---content---->
          <div class="about1">
          <h1> Students do their best when they have the <br> best teachers</h1>
          <h4 style="text-align: center;">We prepare students to understand and contribute success in a rapidly changing society, thus making the world a better place. We will ensure that our students develop the skills and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.</h4>
         </div>
        
        <!-footer-->
         <footer>
  <p>
        Copyright &copy;,UniqueHireEducation
     
    </p>
</footer>
          
    `;

    }



}

window.customElements.define('my-vision', MyVision);