import React, { useState, useRef } from 'react'
import "./contact.css"
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const [uname, setUname] = useState("null");
    const [mail, setMail] = useState("null");
    const [project, setProject] = useState("null");


    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var result = regex.test(mail);



    const form = useRef();
    const notSend = (e) => {
        e.preventDefault();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("metod called")


        if (uname === "null" || mail === "null" || project === "null") {
            if (project === "null") {
                erroAlert();

                uname === "null" ? document.getElementById("uname").style.borderColor = "red" : document.getElementById("uname").style.borderColor = " ";;
                mail === "null" ? document.getElementById("mail").style.borderColor = "red" : document.getElementById("uname").style.borderColor = " ";;
                project === "null" ? document.getElementById("project").style.borderColor = "red" : document.getElementById("uname").style.borderColor = " ";;

            }
        }
        else {
            document.getElementById("uname").style.borderColor = "green";
            document.getElementById("mail").style.borderColor = "green";
            document.getElementById("project").style.borderColor = "green";
            if (result) {
                successAlert();
                emailjs.sendForm('service_7pxysaq', 'template_bimfa0v', form.current, 'lshTdrQea3b5zn7Ra')
                    .then((result) => {
                        console.log(result.text);
                        console.log("send")

                    }, (error) => {
                        console.log(error.text);
                        console.log("not send")
                    });


            }
            else {
                Swal.fire({
                    title: 'Email Id',
                    text: 'Email Id Not Correct.',
                    icon: 'error',
                });
                document.getElementById("mail").style.borderColor = "red";
            }
        }



    };

    function successAlert() {

        Swal.fire({
            title: 'Send',
            text: 'Message Successfully Send.',
            icon: 'success'
        });

    }
    // checking all 
    function colorchange() {
        var name = document.getElementById("uname").value;
        var mail = document.getElementById("mail").value;
        var project = document.getElementById("project").value;

        name === "" ?
            document.getElementById("uname").style.borderColor = "red" :
            document.getElementById("uname").style.borderColor = "green";

        mail === "" ?
            document.getElementById("mail").style.borderColor = "red" :
            document.getElementById("mail").style.borderColor = "green";

        project === "" ?
            document.getElementById("project").style.borderColor = "red" :
            document.getElementById("project").style.borderColor = "green";
    }

    function submitData() {
        var name = document.getElementById("uname").value;
        var mail = document.getElementById("mail").value;
        var project = document.getElementById("project").value;

        name === "" ?
            document.getElementById("uname").style.borderColor = "red" :
            document.getElementById("uname").style.borderColor = "green";

        mail === "" ?
            document.getElementById("mail").style.borderColor = "red" :
            document.getElementById("mail").style.borderColor = "green";

        project === "" ?
            document.getElementById("project").style.borderColor = "red" :
            document.getElementById("project").style.borderColor = "green";
    }
    // Alters---------------------------
    function erroAlert() {

        Swal.fire({
            title: 'Something is wrong',
            text: 'All Feild are required .',
            icon: 'error',
        });

    }



    return (
        <section className="contact section" id='contact'>
            <h2 className="section__title">Get In Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk To Me</h3>

                    <div className="contact__info">
                        {/* First ... */}
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">Shubhamsutar1182@gmail.com</span>

                            <a href="mailto:shubhs1182@gmail.com.com" className="contact__button">
                                Write Me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        {/* Second */}
                        <div className="contact__card" id="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">7218287124</span>

                            <a href="https://api.whatsapp.com/send?phone=7218287124&text=Hi...,"
                                className="contact__button">
                                Write Me {" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        {/* Third */}
                        <div className="contact__card">
                            <i className="bx bx-phone-call contact__card-icon"></i>

                            <h3 className="contact__card-title">Call</h3>
                            <span className="contact__card-data"> +91 7218287124</span>

                            <a href="tel:7218287124" className="contact__button"> Call Me


                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me Message </h3>
                    {/*    inside the form tag... */}
                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag"> Yor Name</label>
                            <input
                                type="text"
                                name="uname"
                                className="contact__form-input"
                                placeholder="Insert Your Name"
                                onChange={(e) => setUname(e.target.value)}
                                onMouseEnter={() => submitData()}
                                id='uname'
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email Id</label>
                            <input
                                type="text"
                                name="mail"
                                className="contact__form-input"
                                placeholder="Insert Your Email"
                                onChange={(e) => setMail(e.target.value)}
                                id='mail'
                                onMouseEnter={() => submitData()}
                            />
                        </div>

                        <div className="contact__form-div  contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Write Your Message"
                                onClick={(e) => setProject(e.target.value)}
                                id='project'
                                onMouseEnter={() => submitData()}
                            ></textarea>
                        </div>

                        <button type='submit' onClick={() => colorchange()} className='button  button--flex'>
                            Send Message
                            <svg
                                class="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
