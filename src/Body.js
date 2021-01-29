import React, {useState, useEffect, useRef} from 'react';
import './Body.css';
import Header from './Header';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import PauseCircleFilledSharpIcon from '@material-ui/icons/PauseCircleFilledSharp';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import beep from './beep.mp3';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const audioSrc = beep;
function Body({ spotify }) {

  const classes = useStyles();

  const [display, setDisplay] = useState(1 * 60);
  const [restLength, setrestLength] = useState(1 * 30);
  const [workLength, setworkLength] = useState(1 * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [onRest, setonRest] = useState(false);

  let player = useRef(null);

  useEffect(() => {
    if (display <= 0) {
      setonRest(true);
      restSound();
    } else if (!timerOn && display === restLength) {
      setonRest(false);
    }
    console.log("test");
  }, [display, onRest, timerOn, restLength, workLength]);

  const restSound = () => {
    player.currentTime = 0;
    player.play();
  };

  const formatTime = (time) => {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    return (
      (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs)
    );
  };

  const updateTime = (amount, type) => {
    if (type === "rest") {
      if ((restLength <= 10 && amount < 0) || restLength >= 60 * 60) {
        return;
      }
      setrestLength((prev) => prev + amount);
    } else {
      if ((workLength <= 10 && amount < 0) || workLength >= 60 * 60) {
        return;
      }
      setworkLength((prev) => prev + amount);
      if (!timerOn) {
        setDisplay(workLength + amount);
      }
    }
  };

  const timeControl = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onRestVariable = onRest;

    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplay((prev) => {
            if (prev <= 0 && !onRestVariable) {
              // restSound();
              onRestVariable = true;
              return restLength;
            } else if (prev <= 0 && onRestVariable) {
              // restSound();
              onRestVariable = false;
              setonRest(false);
              return workLength;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      sessionStorage.clear();
      sessionStorage.setItem("interval-id", interval);
    }
    if (timerOn) {
      clearInterval(sessionStorage.getItem("interval-id"));
    }
    setTimerOn(!timerOn);
  };

  const resetTime = () => {
    clearInterval(sessionStorage.getItem("interval-id"));
    setDisplay(1 * 60);
    setrestLength(1 * 30);
    setworkLength(1 * 60);
    player.pause();
    player.currentTime = 0;
    setTimerOn(false);
    setonRest(false);
  };

    return (
        <div className="body">
            
        <Header />
        <div className="grid-container">
        <Grid container spacing={1}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <button onClick={timeControl}>
                    {timerOn ? (
                        <PauseCircleFilledSharpIcon />
                    ) : <PlayCircleFilledSharpIcon />
                    }
                </button>
                <button onClick={resetTime}>
                    <RefreshSharpIcon/>
                </button>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>    
                <LengthComponent
            title={"Rest Length"}
            updateTime={updateTime}
            time={restLength}
            formatTime={formatTime}
            type={"rest"}
            formatTime={formatTime}
            />    
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <LengthComponent
            title={"Work Length"}
            updateTime={updateTime}
            time={workLength}
            formatTime={formatTime}
            type={"work"}
            formatTime={formatTime}
            /></Paper>
            </Grid>
            <Grid item xs={12}>
                 <Paper className={classes.paper}>
                     <h3>{onRest ? "Rest" : "Work"}</h3>
                     <h1>{formatTime(display)}</h1>
                </Paper>
            </Grid>
        </Grid>
        </div>
    <div>
    </div>
    <audio ref={(t) => (player = t)} src={audioSrc} id="beep" />
        </div>
    )
}

function LengthComponent({title, updateTime, type, time, formatTime}){
    return ( 
        <div>
            <h3>{title}</h3>
            <div className="time-sets">
                <button className="down" onClick={() => updateTime(-10, type)}>
                    {<ArrowDownwardIcon color="black"/>}
                </button>
                <h3>{formatTime(time)}</h3>
                <button className="up" onClick={() => updateTime(10, type)}>
                    {<ArrowUpwardIcon />}
                </button>

            </div>
        </div>
    );
}

export default Body;
