import elijah from './assets/elijah-oleary.png';
import george from './assets/george-liu.png';
import nathan from './assets/nathan-klassen.png';
import william from './assets/william-shi.png';
import Spacer from './spacer';
import Fade from 'react-reveal/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';

const OurTeam = ({ show }) => {
  const isDesktop = useMediaQuery('(min-width:800px)');
  const useSmallImg = useMediaQuery('(max-width:500px)');
  console.log(`isMobile ${isDesktop}`);

  const team_members = {
    "Elijah O'Leary": {
      img: elijah,
    },
    'George Liu': {
      img: george,
    },
    'Nathan Klassen': {
      img: nathan,
    },
    'William Shi': {
      img: william,
    },
  };

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: show ? 1 : 0,
      paddingLeft: 20,
      paddingRight: 20,
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
      textAlign: 'center',
    },
    group: {
      display: 'grid',
      gridTemplateColumns: isDesktop ? 'auto auto auto auto' : 'auto auto',
    },
    team_member_container: {
      width: useSmallImg ? 120 : 160,
      paddingLeft: 20,
      paddingRight: 20,
    },
    image: {
      width: useSmallImg ? 120 : 160,
      height: useSmallImg ? 120 : 160,
      border: '5px solid',
      borderImageSlice: 1,
      borderImageSource: 'linear-gradient(to right, black, purple)',
    },
    text: {
      fontSize: 20,
      textTransform: 'capitalize',
    },
  };

  return (
    <Fade when={show}>
      <div style={style.container}>
        <div style={style.header}>Our Team</div>
        <div style={style.detailsContainer}>
          <div style={style.details}>
            We're four UW mechatronics students who are passionate about
            engineering and good tasting coffee!
          </div>
        </div>
        <Spacer height={20} />
        <div style={style.group}>
          {Object.entries(team_members).map(([key, value]) => {
            return (
              <div style={style.team_member_container}>
                <img src={value.img} alt={key} key={key} style={style.image} />
                <div style={style.text}>{key}</div>
                <Spacer height={20} />
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default OurTeam;
