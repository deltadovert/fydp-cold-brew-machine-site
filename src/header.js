import uw from './assets/university-of-waterloo.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hamborger from './hamborger';

const Header = ({ onNavExpand }) => {
  const isDesktop = useMediaQuery('(min-width: 800px)');
  const showUW = useMediaQuery('(min-width:500px)');

  const style = {
    container: {
      width: '100%',
      position: 'sticky',
      top: 0,
      height: 140,
      backgroundImage: 'linear-gradient(to right, black, purple)',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '5px solid black',
      zIndex: 69,
    },
    image: {
      width: isDesktop ? 100 : 80,
      height: isDesktop ? 100 : 80,
      position: 'absolute',
      right: isDesktop ? 60 : 20,
    },
    text: {
      color: 'white',
      fontSize: isDesktop ? 40 : 30,
      fontWeight: 'bold',
    },
    subtext: {
      fontSize: isDesktop ? 20 : 15,
      color: '#bb00bb',
    },
  };

  return (
    <div style={style.container}>
      <Hamborger onPress={onNavExpand} />
      {showUW ? <img src={uw} style={style.image} /> : null}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={style.subtext}>☕️ FYDP Group 26 🦾</div>
        <div style={style.text}>Cold Brew Machine</div>
      </div>
    </div>
  );
};

export default Header;
