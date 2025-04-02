import React, { useState, useEffect } from "react";
import styles from "./SecondsCounter.module.css";

const SecondsCounter = () => {
  const [sec, setSec] = useState(9995);
  const [secRender, setSecRender] = useState(["0", "0", "0", "0"]);
  const [paused, setPause] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {

      if(!paused){
        setSec((prev) => {
          let current = prev + 1;
          if (current === 10000) return 0;
          return current;
        });
      }
 
    }, 1000)

    return () => {
      clearInterval(interval);
    };
  }, [paused]);
  useEffect(() => {
    let renderSeconds = String(sec).padStart(4, "0").split("");
    setSecRender(renderSeconds);
  }, [sec]);

  return (
    <div className={styles.mainContaienr}>
      <div className={styles.controls}>
   
<button className="btn-primary btn" onClick={()=>setPause(prev=>!prev)}>{paused ? 'Reanudar' : 'Pausar'}</button>
      </div>
      <p>
        <span>{secRender[0]}</span>
        <span>{secRender[1]}</span>
        <span>{secRender[2]}</span>
        <span>{secRender[3]}</span>
      </p>
      <p className={styles.reflection}>
        <span>{secRender[0]}</span>
        <span>{secRender[1]}</span>
        <span>{secRender[2]}</span>
        <span>{secRender[3]}</span>
      </p>
    </div>
  );
};

export default SecondsCounter;
