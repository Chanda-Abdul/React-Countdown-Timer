import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { MdDirectionsBike } from "react-icons/md";

export default function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("December 31, 2021 10:00:00").getTime();
    // countDownDate = countDownDate.setDate(69)

    interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60* 24)/(1000*60*60)));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60))/(1000* 60));
      const seconds = Math.floor((timeLeft % (1000 * 60))/1000);
     
      if(timeLeft < 0) {
        //stop timer
        clearInterval(interval.current)
      } else {
        setTimerDays(days > 9 ? days : `0${days}`);
        setTimerHours(hours > 9 ? hours : `0${hours}`);
        setTimerMinutes(minutes > 9 ? minutes : `0${minutes}`);
        setTimerSeconds(seconds > 9  ? seconds : `0${seconds}`);
      }

      
    }, 1000);
  };
  //component did mount
  useEffect(() => {
    startTimer();
    return clearInterval(interval.current);
  });

  return (
    <div className="App">
      <section className="timer-container">
        <section className="timer">
          <div>
            <MdDirectionsBike className="timer-icon" />
          </div>
          <h2>Countdown to Peloton Delivery</h2>
          <p>only a few more days until your peloton Bike+ arrives!</p>

          <p className="content">
            Get pumped, you'll be able to clip in to your very own peloton Bike+
            very soon!
          </p>

          <p className="content">
            It wont be long now, in a few days you will be able to take your
            first ride and make your way to the top of the Leaderboard.
          </p>

          <div className="timer-box">
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}
