import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import Fade from 'react-reveal/Fade';
import model from './assets/model.png';
import Spacer from './spacer';

const Hype = ({ displayState }) => {
  const useBigText = useMediaQuery('(min-width: 500px)');
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    setFade(true);
    if (displayState != 3) {
      setTimeout(() => {
        setFade(false);
      }, 1500);
    }
  }, [displayState]);

  const style = {
    text: {
      fontWeight: 'bold',
      fontSize: useBigText ? 40 : 30,
      paddingLeft: 20,
      paddingRight: 20,
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    icon: {
      fontSize: 100,
    },
    img: {
      transform: 'scale(1.2)'
    }
  };

  const displayText = () => {
    switch (displayState) {
      case 0:
        return (
          <div style={style.column}>
            <div>Love Cold Brew?</div>
            <div style={style.icon}>☕️</div>
          </div>
        );
      case 1:
        return (
          <div style={style.column}>
            <div>Love Automation?</div>
            <div style={style.icon}>🦾</div>
          </div>
        );
      case 2:
        return "Then you're gonna love this...";
      case 3:
        return (
          <div>
            <div>
              Meet the world's first ever automatic + schedulable cold brew
              machine
            </div>
            <Spacer height={40} />
            <img src={model} style={style.img} />
          </div>
        );
    }
  };

  return (
    <Fade when={fade}>
      <div style={style.text}>{displayText()}</div>
    </Fade>
  );
};

export default Hype;
