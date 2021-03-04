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



class AllCourse extends PolymerElement {
    static get template() {
            return html `

        <!---css--->
      <style is="custom-style">
       
       
/*main display*/


.label{
	text-align: center;
	font-size: 2.5em;
	font-family: 'Alegreya SC', serif;
	color: black;
    margin-top:80px;
}
.course-items{
	display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

/*individual item containers*/
.about-item{
	margin: 0;
	padding: 20px;
}
.about-item-title {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: black;
	font-family: 'Kulim Park', sans-serif;
    margin-bottom: 15px;
}
.box{
	height: 100px;
	width: 100px;
}

.about-item-details {
    display: flex;
    align-items: center;
    padding: 5px;
  }
/*buttons*/
.btn {
    text-align: center;
    font-size:15px;
   
	color: #fff;

    background-color: #24a0ed ; 
    border: none;
    border-radius: .3em;
    font-weight: bold;
    width:150px;
}
/**footer */
footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
     margin-top: 520px;
     margin-bottom: -2px;
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

</style>
<!---iron image css-->
<custom-style>
  <style is="custom-style">
    .shop-item-image {
       height: 200px;
	width: 200px;
    }
  </style>
</custom-style>

  <!----app location---->
  <app-location route="{{route}}"></app-location>
<!---navbar--->
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

      <!---heaading--->
      <div class="main-display">
      
      <h1 class="label">Courses we offer!!</h1>

      <!----individual course java---->
      <div class="course-items">
          <div class="about-item">
              <span class="about-item-title"><u>Java</u></span>
              <div class="box">

              <!--iron image for adding image--->
              <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/java.png"></iron-image>
   
              </div>
              <br><br><br><br><br>
              
              <!---paper button is for adding a button--->    
              <paper-button raised class="btn" on-click="handleClick"><b>View Details</b></paper-button>
              
          </div>


          <!----individual course javascript---->
          <div class="about-item">
              <span class="about-item-title"><u>JavaScript</u></span>
              <div class="box">
                 <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/javascript.png"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
                <!---paper button is for adding a button---> 
              <paper-button raised class="btn" on-click="handleClick2"><b>View Details</b></paper-button>
              </div>
          </div>


          <!----individual course html---->
          <div class="about-item">
              <span class="about-item-title"><u>HTML</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/html.png"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button--->  
              <paper-button raised class="btn" on-click="handleClick3"><b>View Details</b></paper-button>
              </div>
          </div>
      </div>
      


      <!----individual course css---->
      <div class="course-items">
          <div class="about-item">
              <span class="about-item-title"><u>CSS</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/css.png"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button--->   
              <paper-button raised class="btn" on-click="handleClick4"><b>View Details</b></paper-button>
              </div>
          </div>

          <!----individual course angular---->
          <div class="about-item">
              <span class="about-item-title"><u>Angular</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/angular6.jpg"></iron-image>
              </div><br><br><br><br><br>
             
              <!---paper button is for adding a button--->    
              <paper-button raised class="btn" on-click="handleClick5"><b>View Details</b></paper-button>
              
          </div>


          <!----individual course node js---->
          <div class="about-item">
              <span class="about-item-title"><u>Node JS</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/node1.jpeg"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button---> 
              <paper-button raised class="btn" on-click="handleClick6"><b>View Details</b></paper-button>
              </div>
          </div>
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
        this.set('route.path', '/java');
    }



    handleClick2() {
        this.set('route.path', '/javascript');
    }

    handleClick3() {
        this.set('route.path', '/html');
    }

    handleClick4() {
        this.set('route.path', '/css');
    }

    handleClick5() {
        this.set('route.path', '/angular');
    }

    handleClick6() {
        this.set('route.path', '/node');
    }

}

window.customElements.define('all-course', AllCourse);