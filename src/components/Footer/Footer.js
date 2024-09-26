import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">shubham</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link"> Home</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Project</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>
             
             <div className="footer__social">
                <a href="https://www.linkedin.com/in/shubham-sutar-60396a228"
                   className="footer__social-link" 
                   target='_blank'>
                    <i className="bx bxl-linkedin "></i>
                 </a>
                 <a href="https://instagram.com/__shubhamsutar__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
                   className="footer__social-link" 
                   target='_blank'>
                    <i className="bx bxl-instagram"></i>
                 </a>
                 <a href="https://github.com/shubham7124"
                   className="footer__social-link" 
                   target='_blank'>
                    <i className="bx bxl-github"></i>
                 </a>
             </div>
             <span className="footer__copy">
                &#169; All right reserved
             </span>
        </div>
    </footer>
  )
}
