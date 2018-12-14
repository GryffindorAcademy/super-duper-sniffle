import React, { Component } from "react";
import Footer from "../Footer.jsx";
import kelvinStory from "../../images/kelvinStory.jpg";
import ScrollToTop from "../ScrollToTop.jsx";

export default class Kelvin extends Component {
  constructor(props) {
    super(props);
  }
  /////////////////////////////////////
  // Text always goes in a P element //
  /////////////////////////////////////
  render() {
    return (
      <div>
        <ScrollToTop />
        <div className="kelvinHeader">
          <div className="kelvinHeader__background">
            <div className="kelvinHeader__title">Hi, I'm Kelvin Voke</div>
          </div>
        </div>
        <div className="kelvinStory">
          <img className="kelvinStory__picture" src={kelvinStory} />
          <div className="kelvinStory__containerQuestions">
            <div className="kelvinStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="kelvinStory__containerQuestions--subtext1">
              I got interested in computers because I was able in getting
              knowledge and skills in computers such as words ,PowerPoint's,
              excel and many others. These have enabled me to know how to write
              words document such as CVs and also word presentations. Also i got
              interested in computers because now i am able to search and google
              topics in google which are linked to my course of electrical
              engineer and also creating my own website.
            </div>
            <div className="kelvinStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently
              working on?
            </div>
            <div className="kelvinStory__containerQuestions--subtext2">
              Currently I am a mentor of two kids which I am giving them those
              skills in computers that I was earlier. Now I am currently working
              hard in helping my mentees to have the skills and knowledge in
              computers.
            </div>
          </div>

          <div className="kelvinStory__container">
            <div className="kelvinStory__container--text">
              <div className="annStory__container--myStory">
                This is my story
              </div>
              I was born in Nyeri in central Kenya. I am twenty years old. I was
              born in a family of six whom they consist of my mum and my four
              other siblings (two brothers and two sisters together with I). I
              joined my primary education in Mutonga Primary School a school
              located in our village. My mum faced very many challenges and
              difficulties because of lack of money and she was unable to pay
              for fees because many of the time there was no jobs which lead
              even some days we could sleep hungry. One day a friend of Mogra
              came to our village and saw the challenges that my mum was
              undergoing and asked me the reason why I was not going to school.
              I explained to him the reason why I was not going to school. He
              organised on how I would go to Mogra children’s home so as to
              continue with my education. I came in Mogra in 2014 and started my
              secondary education until I finished my secondary education course
              in last year from which I got a D+ in my KCSE exams. I thank Mogra
              because it have taught me to live in moral life and to reach where
              to where I am now. I have stayed about five months since graduated
              from high school. I want to pursue a course in certificate in
              electrical engineering which will take approximately two years in
              Nairobi Technical Training Institute. After that I will join
              diploma for another two years. I want to have a big company that
              will give better services in electrical works and skills and also
              teaching other upcoming generations in the skills. Currently I
              have achieved a certificate in both primary and secondary
              certificate. I have also achieved skills in computer studies in
              excel, word, powerpoints, essay presentation, creating of
              websites. Which will be important in my career goals through
              googling important important topics on my course. I also need fees
              because we have insufficient fund for us to continue in our
              education so as my dream to be an electrical engineer will become
              true and also to have my career goal must have finished my course.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
