import React, { useState } from 'react'
import "./service.css"

export default function Service() {
  const [toggleState, setToggleState]=useState(0)

  const toggleTab=(index)=>{
    setToggleState(index);
  }

  return (
    <section className='service ssection' id='servieces'>
      <h2 className='section__title'>Certification</h2>
      <span className="section__subtitle">My Certification</span>

      <div className="services__container container grid">
        {/* containd 1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Java Full Stack <br/> Devloper</h3>
          </div>

          <span className="services__button" onClick={()=>toggleTab(1)} >View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)} ></i>
              <h3 className="services__modal__title">Java Full Satack</h3>
              <p className="services__modal-description">
                  Pentagone Space, Benglore.

              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Proficenet in both-end back-end technologies, with a strong graps of core and advance java concepts.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Skilled in utilizing java frameworks such as Hibernate and SpringBoot to develop robust and effective application.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                     Experienced in designing, creating and maintaining database using SQL/MySql for effective data managment.
                  </p>
                </li>
               
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                   khowledgeable in create  responsive and user-friendly UI designe using the React framework.
                  </p>
                </li>
               
              </ul>
            </div>
          </div>

        </div>

        {/* containd 2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">MS-CIT <br/></h3>
          </div>

          <span className="services__button" onClick={()=>toggleTab(2)}>View More {" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
              <h3 className="services__modal__title">MS-CIT</h3>
              <p className="services__modal-description">
               Maharashtra Sate Certificate in Information Technology
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                     Covers topics like basic computer operation, Microsoft office application,
                     Internate usages and essential digital skills.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Therotical concepts and Pratical hands-on exprience.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                   Ability to access and utilize resources effectively.
                  </p>
                </li>
                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li> */}
              </ul>
            </div>
          </div>

        </div>

        {/* containd 3 */}
        <div className="services__content">
          <div>
            {/* uil-edit */}
            <i className="uil uil-user services__icon"></i>
            <h3 className="services__title">Yuth Leadership  <br/>  Training Program </h3>
          </div>

          <span className="services__button"onClick={()=>toggleTab(3)}>View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
              <h3 className="services__modal__title">YLTP</h3>
              <p className="services__modal-description">
                Yuth Leadership Training Progrm
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Yuth leadership training program focuses on nurturing leadership qualities in young invdividuals,
                    preparing them for future roles and responsibilities.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Participants undergo training that enhances various skills, including communicationm problem solving, 
                    Decision-making and teamwork.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    The training encourages self-descovery and personal growth, helping participants become more 
                    confident.
                  </p>
                </li>
                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                     
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li> */}
              </ul>
            </div>
          </div>

        </div>


      </div> 
    </section>
  )
}
