import { useState } from "react";
import React from "react";
import "./Home.css"
import Slider from 'react-slick';
function Home(){
    const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const faqData = [
    {
      question: 'Do you offer freelancers?',
      answer: 'Answer 1',
    },
    {
      question: 'What’s the guarantee that I will be satisfied with the hired talent?',
      answer: 'Answer 2',
    },
    {
      question: 'Can I hire multiple talents at once?',
      answer: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.',
    },
    {
      question: 'Why should I not go to an agency directly?',
      answer: 'Answer 4',
    },
    {
      question: 'Who can help me pick a right skillset and duration for me?',
      answer: 'Answer 5',
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return(
    <div className="home">
    <div className="home-top">
        <div className="home-text">
        <p className="first">Success stories</p>
        <p className="second">Every success journey we’ve encountered.</p>
        </div>
    </div>
    <img className="img-mid" src="./Mask group.png"></img>
    <div className="c1"><p className="val1">40%</p><p className="con1">Reduced client expenses by saving on hiring and employee costs.</p></div>
    <div className="c2"><p className="val2">$0.5<span className="span-style">Million</span></p><p className="con2">Achieved reduction in project execution time by optimising team availability</p></div>
    <div className="c3"><div className="img-div"><img src="./Frame (1).png"></img></div><div><p className="val3">10 Days</p><p className="con3">Staff Deployment</p></div></div>
    {/* <div className="cara"><p className="cara-text">Enhance fortune 50 company’s insights teams research capabilities</p></div> */}
    <div className="cara">
      <Slider {...settings}>
      <div>
        <p className="cara-text">Enhance fortune 50 company’s insights teams research capabilities</p>
      </div>
      <div>
        <p className="cara-text">Enter the Text2</p>
      </div>
      <div>
        <p className="cara-text">Enter the Text3</p>
      </div>
      </Slider>
    </div>
    <div className="bottom-container">
        <div className="container">
            <div className="text-top">
                <p className="text1">What’s on your mind</p>
                <p className="text2">Ask Questions</p>
            </div>
            <img className="img-faq" src="./Union.png"></img>
        <div className="faq">
        {faqData.map((faq, index) => (
        <div key={index}>
          <div
            className="faq-question"
            onClick={() => toggleAccordion(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className="y">
              {faq.question}
              {activeIndexes.includes(index) ? (
                <span>-</span>
              ) : (
                <span>+</span>
              )}
            </div>
          </div>
          {activeIndexes.includes(index) && (
            <div className="faq-answer">{faq.answer}</div>
          )}
          {index !== faqData.length - 1 && <hr />} {/* horizontal line */}
        </div>
      ))}
        </div>
        </div>
    </div>
    <div className="footer">
      <div className="left-footer"><p className="lf-text">© Talup 2023.All rights reserved</p></div>
      <div className="right-footer"><p className="rf-text1">Terms & Conditions</p><p className="rf-text2">Privacy Policy</p></div>
    </div>
    <div  className="empty"></div>
    </div>)
};
export default Home