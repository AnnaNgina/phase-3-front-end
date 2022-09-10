import React from 'react';
function Footer() {
    return (
        <footer id="contact">
             <div className="footer-form">
              <p>Reach Out!</p>
              <form>
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="email"/>
                <textarea>Write something</textarea>
                <button>Submit</button>
              </form>
            </div>
        </footer>
    );
}
export default Footer;