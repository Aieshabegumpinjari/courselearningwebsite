import React from "react";
//import { useNavigate } from "react-router-dom";
import  './contact.css';
function Contact(){
    return(
        <div>
            <html>
                <body>
                    <header className="header">
                        <section className="flex">
                            <div  style={{backgroundColor:"red"}}><h2 style={{fontFamily:"TimesnewRoman",textAlign:"center",fontStyle:"oblique",fontPalette:"light",fontVariant:"full-width",fontFamily:"monospace",fontSize:"50px",textSizeAdjust:"auto",color:"honeydew"}}>OUR CONTACT</h2><hr></hr>
                            <p style={{fontSize:"20px",textAlign:"end"}}><a href="/homenew">Home</a> <a href="/profilenew">profile</a></p>
                            <img src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="></img>
              </div>
              </section>
              </header>
              <div className="side-bar"> 
              </div>
              <section className="contact">
                <div className="row">
                  <form action="" method="post">
                    <h3>GET IN TOUCH</h3>
                    <input type="text" placeholder="Enter your Name" name="Name" required maxLength="50"className="box"></input>
                    <input type="Email" placeholder="Enter your Email" name="Email" required maxLength="50"className="box"></input>
                    <input type="Number" placeholder="Enter your Number" name="Number" required maxLength="50"className="box"></input>
                    <textarea name="msg" className="box" placeholder="Enter your Message" required maxLength="100"cols="30" rows="10"></textarea>
                    <input type="submit" value="send Message" className="inline-btn" name="submit"></input>
                     
                  </form>

                </div>
                <div className="box">
                  <i className="fas fa-phone"></i>
                  <h3>phone Number</h3>
                  <a href="tel:1234567890">123-456-7890</a>
                  <a href="tel:1112223333">111-222-3333</a>

                </div>
                <div className="box">
                  <i className="fas fa-envelope"></i>
                  <h3>Email Address</h3>
                  <a href="mailto:Sunshine@gmail.com">Sunshine@gmail.com</a>
                  <a href="mailto:anashbhai@gmail.com">anashbhai@gmail.com</a>

                </div>
                <div className="box">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>Office Address</h3>
                  <a href="#">flat no.1,a-1 building, jogeshwari,mumbai,india - 400104</a>
                    
                </div>
                
              </section>
              <footer className="footer">
                &copy; copyright @ 2022 by <span>mr.web.designer</span> | all rights reserved!

              </footer>
            
              
              
            
        </body>
      </html>
    </div>
  );
}
export default Contact;