import Spacer from './spacer';
import Fade from 'react-reveal/Fade';

const OurMission = ({ show }) => {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      opacity: show ? 1 : 0,
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 650,
    },
    details: {
      fontSize: 20,
      color: 'black',
      textShadow: 'none',
    },
    emphasis: {
      fontSize: 20,
      color: 'black',
      textShadow: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <Fade when={show}>
      <div style={style.container}>
        <div style={style.header}>Our Mission</div>
        <div style={style.detailsContainer}>
          <div style={style.details}>
            Those of us who have tried know that making cold brew at home is no
            fun... having to be there to prepare the brew 12-16 hours ahead, and
            then be there to press it when the brewing is done.
          </div>
          <Spacer height={10} />
          <div style={style.details}>
            That's where we come in...
          </div>
          <Spacer height={10} />
          <div style={style.emphasis}>
            We're going to automate the whole thing.
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default OurMission;
