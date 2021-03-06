import React, { useEffect, useState } from "react";
import "../assets/css/styles.css";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Qblock from "../assets/components/qblock";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import QUp from "../assets/img/qUp.svg";
import QDown from "../assets/img/qDown.svg";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Questions = () => {
  const [quiz, setQuiz] = useState([]);
  const [sid, setSid] = useState(0);
  const [eid, setEid] = useState(1);
  const [btnName, setBtn] = useState("Next");
  const [answer, setAnswer] = useState([]);
  const [comment, setComment] = useState("");
  const [showComment, setshowComment] = useState(true);

  const handleCheckbox = (e) => {
    let data = answer;
    console.log(data);
    if (e.target.checked) {
      data.push(e.target.value);
      setAnswer(data);
    } else if (answer != null) {
      console.log("removed", answer);
      setAnswer(answer.filter((item) => item !== e.target.value));
    }
    // console.log(answer);
  };
  const onChangeComment = (e) => {
    // console.log(data);
    // data.push(e.target.value);
    setComment(e.target.value);
  };

  const nxtBtnClick = () => {
    answer.push("cmt" + comment);
    if (sid == 3) {
      setshowComment(false);
    }
    let ques = quiz.slice(sid, eid);
    let adata = answer;
    let data = ques[0].question;
    localStorage.setItem(data, adata);
    setAnswer([]);
    setComment("");
    // adata = null;
    console.log("------data----", adata);
  };

  const history = useHistory();

  const routeChange = () => {
    let path = `/Dashboard`;
    history.push(path);
  };

  const routeChangeHome = () => {
    let path = `/`;
    history.push(path);
  };

  useEffect(() => {
    getquiz();
  }, []);

  const getquiz = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setQuiz(data);
  };

  const classes = useStyles();

  return (
    <div>
      <img src={QUp} id="bgu" alt="" />
      <img src={QDown} id="bgd" alt="" />
      <Button
        size="medium"
        variant="contained"
        className={classes.margin}
        disableElevation
        style={{ backgroundColor: "transparent", color: "#000000" }}
        startIcon={<KeyboardBackspaceIcon />}
        onClick={() => {
          if (sid < 5 && eid < 6) {
            setEid(eid - 1);
            setSid(sid - 1);
          }
          if (sid == 0) {
            routeChangeHome();
          }
          console.log(eid, sid);
        }}
      >
        Back
      </Button>

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 my-auto">
              {quiz.slice(sid, eid).map((quiz) => (
                <Qblock
                  question={quiz.question}
                  answers={quiz.answers}
                  info={quiz.info}
                  show={showComment}
                  handleCheckbox={handleCheckbox}
                  onChangeComment={onChangeComment}
                />
              ))}
              <div
                className="comment"
                style={{ display: showComment ? "block" : "none" }}
              >
                <input
                  type="text"
                  value={comment}
                  name="uComment"
                  placeholder="Type Comment..."
                  onChange={(e) => onChangeComment(e)}
                />
              </div>
              <div className="nxtButton">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#EA745B", color: "#ffffff" }}
                  startIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    if (sid < 4 && eid < 5) {
                      setEid(eid + 1);
                      setSid(sid + 1);
                    }
                    if (sid == 3) {
                      setBtn("Finish");
                    }
                    if (sid == 4) {
                      routeChange();
                    }
                    nxtBtnClick();
                    console.log(eid, sid);
                  }}
                >
                  {btnName}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Questions;
