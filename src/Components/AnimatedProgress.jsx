import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";



export const HtmlAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#F06529`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const BootAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 85) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#7511f6`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const TailwindAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 90) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#16becb`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const SassAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 75) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#cc6699`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const CssAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 90) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#264de4`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const JsAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 85) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    },40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#F0DB4F`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const ReactAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 85) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    },40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#61dafb`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const GitAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 80) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    },40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#f1502f`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};

export const BackAnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const repeatInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 70) {
          clearInterval(repeatInterval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <CircularProgressbar
      strokeWidth={9}
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathTransition: "none",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `#F05340`,
        textColor: "#fff",
        trailColor: "transparent",
        rotation: 0.28,
      })}
    />
  );
};



