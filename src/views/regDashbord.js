import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "../assets/css/styles.css";
import DoneIcon from "@material-ui/icons/Done";
import Dash from "../assets/img/dash.svg";
import Adashblock from "../assets/components/adashblock";

const Dashboard = () => {
  const [quizDash, setQuiz] = useState([]);
  useEffect(() => {
    getquiz();
  }, []);

  const getquiz = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setQuiz(data);
  };

  //   const q1A = [];
  var q1Ans = quizDash.slice(0, 1);
  let q1A = ["We are not concerned about employees leaving"];
  var q1 = localStorage
    .getItem(
      "When an employee leaves what is/are the biggest concern/s Organizations face various issues when employees leave?"
    )
    .split(",")
    .filter(Boolean);
  //   console.log(q1A);

  //   const q2A = [];
  var q2Ans = quizDash.slice(1, 2);
  let q2A = ["They are sharing information perfectly"];
  var q2 = localStorage
    .getItem(
      'What prevents employees from sharing information? It"s usually hard for employees to share information because it takes effort and the benefits are not clear'
    )
    .split(",")
    .filter(Boolean);
  //   console.log(q2A);

  //   const q3A = [];
  var q3Ans = quizDash.slice(2, 3);
  let q3A = [
    "By enforcing vacations where the employee can’t communicate with the company",
    "By moving employees to a different location where employee can communicate with company",
  ];
  var q3 = localStorage
    .getItem(
      "How do you test how the company will function in the absence of the key employee? These tests are a valuable exercise to understand the resilience of the organization under stress"
    )
    .split(",")
    .filter(Boolean);
  //   console.log(q3A);

  //   const q4A = [];
  var q4Ans = quizDash.slice(3, 4);
  let q4A = [
    "We train and motivate employees to share information",
    "We have processes and systems to share information",
    "We make knowledge sharing a part of the annual/quarterly evaluation process",
  ];
  var q4 = localStorage
    .getItem(
      "What is being done by the company to ensure that knowledge about company processes are shared?"
    )
    .split(",")
    .filter(Boolean);
  //   console.log(q4A);

  //   var q5A = [];
  var q5Ans = quizDash.slice(4, 5);
  let q5A = [
    "CEO / Owner / Investor",
    "Manager",
    "Non Managerial Employee",
    "Student",
  ];
  var q5 = localStorage
    .getItem("What best describes you?")
    .split(",")
    .filter(Boolean);
  //   console.log(q5A);
  q1.pop();
  q2.pop();
  q3.pop();
  q4.pop();
  q5.pop();
  return (
    // <header className="masthead" style={{ paddingTop: "20px" }}>
    <div>
      <img src={Dash} id="bgdash" alt="" />
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-8 mx-auto">
            <div className="RegBox">
              <div className="Title">
                <h3>
                  We’ll send the{" "}
                  <div style={{ color: "#FF715D", display: "inline" }}>
                    diagnostic
                  </div>{" "}
                  to your email
                </h3>
              </div>
              <div className="form mx-auto">
                <form>
                  <div className="group-input">
                    <label>Name</label>
                    <input
                      type="text"
                      name="uName"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="group-input">
                    <label>Email</label>
                    <input
                      type="email"
                      name="uEmail"
                      pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$"
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>
                  <div className="group-input">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      required
                      name="uPhone"
                      placeholder="0712345678"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="site-btn login-btn"
                    variant="contained"
                    style={{ backgroundColor: "#EA745B", color: "#ffffff" }}
                    startIcon={<DoneIcon />}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="dashboard col-lg-12 mx-auto">
            <h2>Dashboard</h2>
            <div className="mainQ">
              <div className="qSection col-lg-4">
                <div className="questionBlock">
                  <h4>
                    When an employee leaves what is/are the biggest concern/s
                    Organizations face various issues when employees leave?
                  </h4>
                </div>
                <div className="answerBlock">
                  {q1.map((object, index) => (
                    <Adashblock answers={object} index={index} correctA={q1A} />
                  ))}
                </div>
              </div>
              <div className="qSection col-lg-4">
                <div className="questionBlock">
                  <h4>
                    What prevents employees from sharing information? It\"s
                    usually hard for employees to share information because it
                    takes effort and the benefits are not clear
                  </h4>
                </div>
                <div className="answerBlock">
                  {q2.map((object, index) => (
                    <Adashblock answers={object} index={index} correctA={q2A} />
                  ))}
                </div>
              </div>
              <div className="qSection col-lg-4">
                <div className="questionBlock">
                  <h4>
                    How do you test how the company will function in the absence
                    of the key employee? These tests are a valuable exercise to
                    understand the resilience of the organization under stress
                  </h4>
                </div>
                <div className="answerBlock">
                  {q3.map((object, index) => (
                    <Adashblock answers={object} index={index} correctA={q3A} />
                  ))}
                </div>
              </div>
              <div className="qSection col-lg-4">
                <div className="questionBlock">
                  <h4>
                    What is being done by the company to ensure that knowledge
                    about company processes are shared?
                  </h4>
                </div>
                <div className="answerBlock">
                  {q4.map((object, index) => (
                    <Adashblock answers={object} index={index} correctA={q4A} />
                  ))}
                </div>
              </div>
              <div className="qSection col-lg-4">
                <div className="questionBlock">
                  <h4>What best describes you?</h4>
                </div>
                <div className="answerBlock">
                  {q5.map((object, index) => (
                    <Adashblock answers={object} index={index} correctA={q5A} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </header>
  );
};

export default Dashboard;
