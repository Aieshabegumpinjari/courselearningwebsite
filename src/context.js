import React from "react";
import './context.css';
import { useNavigate } from "react-router-dom";
function Course(){
  var n=useNavigate()
  var goreg=()=>{
    n("/goregi")
  }
    return(
        <div>
 <body> 
<header>

    
    
  
  </header>
  
  <main>
    <div class="hero">
      <h1 onClick={goreg}>Course</h1>
      <a href="#" class="sign-in">Sign into the course dashboard here.</a>
      <p>Below are all my courses. Some are currently open for registration, others are being worked on. If a course is closed, you can sign up on the page to be notified of when it opens for registrations.</p>
    </div>
      
    <div class="grid-parent">

      <div class="grid-child">
        <h2>java</h2>
        <span> free | open </span>
        <p>A free drip course which wil ltake 21-days to complete. It goes over thinking responsively, the basics of making responsive layouts with flexbox, and media queries.</p>
        <button  onClick={goreg} class="btn">Enroll Now</button>
      </div>
      
      <div class="grid-child">
        <h2>html</h2>
        <span> premium | closed </span>
        <h5>Start writing CSS</h5>
        <p>A free drip course which wil ltake 21-days to complete. It goes over thinking responsively, the basics of making responsive layouts with flexbox, and media queries.</p>
        <button class="btn">Sign up for updates</button>
      </div>
      
      <div class="grid-child">
        <h2>Java</h2>
        <span> premium | open </span>
        <p>Getting started with flexbox is easy. A nice little display: flex and you have columns.</p>
        <p>Then it's time for the hard part: figuring out what strange combination of justifying, aligning, growing (or shrinking), you need to cobble together to get it to behave the way you need it to.</p>
        <p>This course has everything you need to take control of flexbox and start using it to create components, and layouts, with confidence.</p>
        <button   onClick={goreg}class="btn">Enroll Now</button>
      </div>
      
      <div class="grid-child">
         <h2>HTML & CSS Crash Course</h2>
        <span> free | open </span>
        <p>Hosted on Scrimba, this free course is for people who are completely new to HTML & CSS.</p>
        <p>Working up from zero, you'll be building your first multi-page sites when you are done.</p>
        <button class="btn">Enroll now</button>
      </div>
      
      <div class="grid-child">
       <h2>BootStrap</h2>
        <span> premium | open </span>
        <p>Taking off where the HTML & CSS Crash course leaves off, this course takes you from the basics of HTML & CSS and dives in deep.</p>
      <p>It covers CSS in-depth, from general styling, typography, and layouts using flexbox and grid.</p>
      <p>This course requires a membership with Scrimba.</p>
        <button class="btn">Enroll Now</button>
    </div>
      
      <div class="grid-child">
        <h2>JavaScript</h2>
        <span> premium | closed </span>
        <p>This course is a deep dive into the world of Sass, as well as advanced CSS.</p>
      <p>Starting at the very basics of Sass, slowly but surely we add new tools to our repitoire and deep dive to make sure we understand how the Sass/SCSS that we are writing is compiled into CSS the browser can understand.</p>
      <p>This isn't just about learning how Sass works, but we create real projects along the way as well.</p>
         <button class="btn">Sign up for updates</button>
      </div>
    </div>
       </main> 
    
</body> 
</div>

)
}


export default Course;