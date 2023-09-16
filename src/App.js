/* images/logo*/
import brand_logo from './images/lamasalalogo.png';
import img1 from './images/Product Name Logo.png';
import img2 from './images/Package.jpg';
import img3 from './images/natural.png';
import img4 from './images/prodimage.png';

import './App.css';
import React from 'react';
function App() {
 
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={brand_logo} className="App-logo" alt="logo" />
        <a className="active" href="#home">Home</a>
        <a href="#product">Products</a>
        <a href="#login">My Bag</a>
        <input type="text" placeholder="Search.."></input>
        <a href="#signin">Signup</a>
        <a href="#login"><i class="fa fa-fw fa-user"></i> Login</a>
      </header>
      {/********* this is second navbar  */}
          <div className="topnav">
             <a href="#">New Products</a>
             <a href="#">Receipes</a>
             <a href="#">Gallery</a>
             <a href="#">Combo Pack</a>
             <a href="#">Sort</a>
             <a href="#">Filter</a>
             <a href="#">Blog/Vlog</a>
             <a href="#">Address</a>
             <a href="#">Wishlist</a>
             <a href="#">My Profile</a>
          </div>
      <br></br>
      <div className="container">
         <div className="box-container">

          <div className="box">
            <div className='slide-container fading'>
              <div className='num-text'></div>
              <img src={img1} alt="slideimg1"></img>
              <div className='caption-text'></div>

            </div>
            <div className='slide-container fading'>
              <div className='num-text'></div>
              <img src={img2} alt="slideimg1"></img>
              <div className='caption-text'></div>
            </div>
            <div className='slide-container fading'>
              <div className='num-text'></div>
              <img src={img3} alt="slideimg1"></img>
              <div className='caption-text'></div>
            </div>
            <div className='slide-container fading'>
              <div className='num-text'></div>
              <img src={img4} alt="slideimg1"></img>
              <div className='caption-text'></div>
            </div>

            <a className='previous'  onclick="plusSlides(-1)"></a>
            <a className='next' onclick="plusSlides(1)"></a>
            
          <br></br>
          <div className='dot-circle'>
               <span class="dot" onclick="currentSlide(1)"></span>
              <span class="dot" onclick="currentSlide(2)"></span>
               <span class="dot" onclick="currentSlide(3)"></span>
               <span class="dot" onclick="currentSlide(4)"></span>
            </div>
          <p>Product Name</p>
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
               <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
           
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
             <img src={img2} alt='img1'></img>
             <p>Product Name</p>
             
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
            </div>
            <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
         
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
    
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
           
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
             <img src={img2} alt='img1'></img>
             <p>Product Name</p>
             
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
            </div>
            <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
         
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
    
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
           
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
             <img src={img2} alt='img1'></img>
             <p>Product Name</p>
             
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
            </div>
            <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
         
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
    
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
           
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
             <img src={img2} alt='img1'></img>
             <p>Product Name</p>
             
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
            </div>
            <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
         
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
    
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
          <img src={img1} alt='img1' ></img>
          <p>Product Name</p>
           
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
          </div>
          <div className="box">
             <img src={img2} alt='img1'></img>
             <p>Product Name</p>
             
            <p>Price : Rs 99/-</p>
               <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
               <button type='submit' className='btn1' href="#" >Add to Cart</button>
            <button type='submit'  className='btn2' href="#">Buy Now</button>
            </div>
             
     </div>

     <section className='product-container ' id='product'>


     </section>
   </div>   
   <footer>
<div className="footer">

  <div className="contain">


<div className="logo-title">

<img src = {brand_logo} ></img>
  <h3>AMD Group</h3>
  <h5>Mysure</h5>

</div>
  <div className="col">
    <h2>Company</h2>
    <ul>
      <li>About us</li>
      <li> Our Mission</li>
      <li>Services</li>
      <li>Services</li>
      <li>Services</li>
    </ul>
  </div>

  <div className="col">
    <h2>Resources</h2>
    <ul>
      <li>Webmail</li>
      <li>Web templates</li>
      <li>Email templates</li>
      <li>Email templates</li>
      <li>Email templates</li>
      <li>Email templates</li>
    </ul>
  </div>
  <div className="col">
    <h2>Contact</h2>
    <ul>
      <li>+91XXXXXXXX</li>
      <li>+91XXXXXXXX</li>
      <li>abc@gmail.com</li>
      <li>abc@gmail.com</li>
      <li>abc@gmail.com</li>
    </ul>
  </div>
  <div className="col address">
    <h2>Address </h2>
    <ul>
      <li>4th Main Road , 7th Cross Road , Vidyaranyapura, Mysuru, Karnataka Pin:570008</li>
  </ul>
  </div>
  <div className="col">
    <h2>Follow on </h2>
    <ul>
      <li>Instagram</li>
      <li>Facebook</li>
      <li>Google</li>
      <li>WhatsApp</li>
    </ul>
  </div>
  
<div className="clearfix"></div>
</div>
</div>
</footer>
<div className='cpy-container'>
  <h4>Designed & Developed by <strong >OlewinTechSolutions</strong></h4><br></br>
  <h3>CopyRight @ 2023</h3><br></br>
  <p>All Right-Reserved</p>
  <a href="https://olewintechsolutions.com">www.olewintechsolutions.com</a>

</div>
</div>    
  );

}
/*
let slideShowImage = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideShowImage++;
  if (slideShowImage > slides.length) {slideShowImage = 1}
  slides[slideShowImage-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
*/

export default App;



