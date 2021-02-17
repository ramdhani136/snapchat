import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ChatView.css";
import { selectSelectedImage } from "./features/appSlice";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function ChatView() {
  const selectedimage = useSelector(selectSelectedImage);
  const history = useHistory();

  useEffect(() => {
    if (!selectedimage) {
    }
  }, [selectedimage]);

  const exit = () => {
    history.replace("/chats");
  };

  return (
    <div className="chatView">
      <img src={selectedimage} onClick={exit} alt="" />
      <div className="chatView__timer">
      <CountdownCircleTimer
        isPlaying
        duration={10}
        strokeWidth={6}
        size={50}
        colors={[
          ["#004777", 0.33],
          ["#F7BB01", 0.33],
          ["#A30000", 0.33],
        ]}
      >
        {({ remainingTime }) => {
          if (remainingTime === 0) {
            exit();
          }
          return remainingTime;
        }}
      </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView;
