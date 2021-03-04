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
import '@polymer/paper-card/paper-card.js';



class MyDashboard extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
      
        .container-fluid{
          margin-top:100px;
          margin-bottom:30px;
        }
       
    
/*--total students---*/


 .card-text1 {
	color:blue;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:140px;
 }	

 div{
   display:flex;   /**The flex property sets the flexible length on flexible items. */
   align-items:initial;/**The align-items property specifies the default alignment for items inside the flexible container. */
  
    flex-wrap: wrap;/**The flex-wrap property specifies whether the flexible items should wrap or not. */
    
 }
 
  /*--students opted java---*/ 
 .card-text2 {
	color:green;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:100px;
 }	
 	

  /*--students opted javascript---*/ 
 .card-text3 {
	color: pink;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:100px;
 }	
 

/*--students opted html---*/ 
.card-text4 {
	color: yellow;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:100px;
 }	
 
 
 /*--students opted css---*/ 
 .card-text5{
	color: orange;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:100px;
 
 } 
 
 /*--students opted angular---*/ 
 .card-text6 {
	color: lightblue;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:120px; 
 	
 } 


 /*--students opted nodejs---*/  
.card-text7 {
	color: purple;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:100px;
 
 } 
 

  
  
  
  /*--faculty details---*/ 
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: white;
}
.card-content{
  height:300px;
  width:300px;
}
footer {
    background-color: #222;
    color: black;  
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

 
   <!----app location---->
   <app-location route="{{route}}"></app-location>
<!--nav bar--->
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

    
      
      <div class="container-fluid"> 
  <div class="row">
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">total number of students in class</h3>
          <p class="card-text1" >100</p>
        </div>
      </div>
    </div>


    <!----students opted java---->
        <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted Java</h3>
          <p class="card-text2" >55</p>
        </div>
      </div>
    </div>

    <!----students opted javascript---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted JavaScript</h3>
          <p class="card-text3" >45</p>
        </div>
      </div>
    </div>
	<br>

  <!----students opted html---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted HTML</h3>
          <p class="card-text4" >40</p>
        </div>
      </div>
    </div>

<!----students opted css---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted CSS</h3>
          <p class="card-text5" >40</p>
        </div>
      </div>
    </div>

    <!----students opted angular---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted Angular</h3>
          <p class="card-text6">36</p>
        </div>
      </div>
    </div>

    <!----students opted nodejs---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted NodeJS</h3>
          <p class="card-text7" >33</p>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br><br><br><br>

   <!----registered aspirants---->
   
	<table id="customers">
  
       <thead bgcolor="lightblue" class="thead"><!---use to group header content in a html table-->
          <tr>
            <th scope="col">Name</th><!---The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows.   ---->
            <th scope="col">E-mail</th>
            <th scope="col">phone number</th>
          </tr>
        </thead>
	<tbody>	
  <tr>
     <!--data storing-->
			<td>{{registerData.firstname}}</td>
            <td>{{registerData.Email}}</td>
            <td>{{registerData.phonenumber}}</td>
  </tr>
  <tr>
			<td>{{registerData.firstname}}</td>
            <td>{{registerData.Email}}</td>
            <td>{{registerData.phonenumber}}</td>
  </tr>
  <tr>
            <td>shanakar</td>
            <td>shankar@gmail.com</td>
            <td>8999988888</td>
  </tr>
  <tr>
			<td>Manishankar</td>
            <td>manishankar@gmail.com</td>
            <td>9099878908</td>
  </tr>
  <tr>
			<td>kudipudishankar</td>
            <td>kudipudishankar@gmail.com</td>
            <td>678906567</td>
  </tr>
  <tr>
			 <td>kudipudimani</td>
            <td>kudipudimani@gmail.com</td>
            <td>7890987656</td>
  </tr>

  </tbody>
</table>

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


}

window.customElements.define('my-dashboard', MyDashboard);