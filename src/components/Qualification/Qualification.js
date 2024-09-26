import React, { useState } from 'react'
import "./qualification.css"

export default function Qualification() {
    const[toggleState, setToggleState]=useState(1);

    const togggleTab=(index)=>{
        setToggleState(index);
    }

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualificatioin</h2>
            <span className="section__subtitle">My Educational Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                    className={
                        toggleState === 1 ? "qualification__button  qualification__active button--flex" :
                        "qualification__button  button--flex "
                        }
                        onClick={()=>togggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap qualificatioin__icon"></i>Eduaction
                    </div>

                    <div 
                    className={
                        toggleState === 2 ? "qualification__button  qualification__active button--flex" :
                        "qualification__button  button--flex "
                        }
                        onClick={()=>togggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualificatioin__icon"></i>{" "}
                        Projects
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Content 1 */}
                    <div className={
                                    toggleState === 1 ?
                                    "qualification__content qualification__content-active" :
                                    "qualification__content"
                                 }>
                        {/* data 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th Secondary School Certificate (SSC)</h3>
                                <span className="qualification__subtitle">Shet Chaturlala Ganpatchand Vidhymandir, Lengare</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2016
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* data 2 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">12th Higher Secondery Education (HSC)</h3>
                                <span className="qualification__subtitle">Balwant College, Vita</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  2017 - 2018
                                </div>
                            </div>
                        </div>

                        {/* data 3 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachlore of Computer Application (BCA)</h3>
                                <span className="qualification__subtitle">Adarsh College, Vita</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  2018 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* data 4 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Master of Computer Application (MCA)</h3>
                                <span className="qualification__subtitle">Yashoda Technical Campus, Satara</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>    2021 - 2023
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Content 2 */}

                    <div className={
                                    toggleState === 2 ?
                                    "qualification__content qualification__content-active" :
                                    "qualification__content"
                                 }>
                        {/* data 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Brain Tumor Detection & classifiction</h3>
                                <span className="qualification__subtitle">(MCA Project)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - 2023
                                    <p className='qualification__subtitle'>
                                           In this machine learning project, we build classifier to detect the
                                        brain tumar (if any) from the MRI scan images. it is evendent is a
                                        brinary classifiction problem.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* data 2 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Online Parking Reservation System</h3>
                                <span className="qualification__subtitle">(MCA Project)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  2021 - 2022
                                    <p className='qualification__subtitle '>
                                          The purpose of this project is to ease the process of parking trough
                                          Web Application. in this we mainly concenttrate on parking slot in the buildinf,
                                          hotel.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* data 3 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Application</h3>
                                    <i className="uil uil-calendar-alt"></i>2021 - 2023 <br />
                                <span className="qualification__subtitle"><b>Tic-Tac-Toe</b></span>
                                <div className="qualification__calendar">
                                    <p className='qualification__subtitle '>
                                        We will create a Tic-Tac-Toe game using javascript. we will be uisng validatation 
                                        checks tko implement the game features.
                                    </p>

                                    

                                </div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"><b>Portfolio Website</b></span>
                                <div className="qualification__calendar">
                                  
                                    <p className='qualification__subtitle '>
                                        We will create a Tic-Tac-Toe game using javascript. we will be uisng validatation 
                                        checks tko implement the game features.
                                    </p>

                                    

                                </div>
                            </div>
                            

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* data 4 */}
                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Brain Tumar Classification & Detection</h3>
                                <span className="qualification__subtitle">AI College Project</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 202jljj1-2023
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </section>
    )
}
