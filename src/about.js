import React from "react";
import { useNavigate } from "react-router-dom";
let About=()=>{
    let n=useNavigate()
    let Gohome=()=>{
        n('/')
    }
    let Goabout=()=>{
        n('/About')
    }
    let GoCourses=()=>{
        n('/Courses')
    }
    

    return(
       
        <div>
          <center>  <h1> Education, all solution for your business</h1></center>
<h3>Having hands on experience in the field since 2015, Amypo would be your perfect digital partner which can understand your business needs. We have highly experienced digital experts who would streamline your evolution in the right direction. We are providing training services through our highly experienced software developers.

“We build thoughtful identities and experiences to elevate and empower organisations“</h3>
<img src="http://amypo.com/wp-content/uploads/2022/12/pic37-1024x576.jpg"></img>
<h1>The perfect equation of ideas.</h1>
<h3>Our main aim is to provide complete assistance to our clients in achieving their targets. Kindly scroll down to know our methodology of working.</h3>
<h3>1.
Companionship
We become a part of your journey by discussing, planning and being a part of your team to achieve great results.</h3><hr></hr>
<h3>2.
Observant
We listen to our clients and work closely with them to understand their needs.</h3><hr></hr>
<h3>3.
Future
We believe in strong and continous relationships. We aim to become a trusted partner of our clients, not just a service provider.</h3><hr></hr>
3.
Future
<h3>We believe in strong and continous relationships. We aim to become a trusted partner of our clients, not just a service provider.</h3><hr></hr>
<h3>4.
Dedication
Amypo commits to clients with international standards, production, time efficiency and adaptable framework that bonds with clients in all circumstances.</h3><hr></hr>
Our Expertise
One
Enterprise Web App
Our experience enables us to develop the best of interactive web apps that will keep your prospective clients engaged.

Enterprise Mobile App
Amypo’s finest developers would build you world class responsive apps increasing your rate of conversion drastically.

Two
Enterprise UI/UX
We combine qualitative and quantitative research along with your feedback to understand your user and give them the best UI/UX.

Enterprise Web Arts
Our creative team is sure to impress your users with the latest designs.

Three
Corporate Training
Lorem ipsum dolor sit amet, consec tetur adipiscing elit.

Academic Training
Lorem ipsum dolor sit amet, consec tetur adipiscing elit.

LET’S WORK!

Explore the hidden ideas
Get Started
Contact Us

We build thoughtful identities and experiences to elevate and empower organizations.

Contacts
mani@amypo.com
+91 8508507666
Coimbatore | Banglore
Feedback
Quicklinks
Home
About
Services
Careers
Contact Us
Copyright © 2022 Amypo Technologies

Dribbble Facebook Behance Youtube
        </div>
    


            
        
        
            
  )  
}
export default About;


