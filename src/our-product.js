import Fade from 'react-reveal/Fade';
import FullModel from './assets/our-product/full-model.png';
import Press from './assets/our-product/press.png';
import ModelNoPress from './assets/our-product/model-no-press.png';
import Spacer from './spacer';
import { sharedStyles } from './shared-styles';
import { useMediaQuery } from '@mui/material';
const OurProduct = ({ show }) => {
  const useSmallImg = useMediaQuery('(max-width:600px)');
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: show ? 1 : 0,
      paddingLeft: 20,
      paddingRight: 20,
      maxWidth: 650,
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
    row: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
    },
    image: { height: useSmallImg ? '220px' : '300px' },
  };
  return (
    <Fade when={show}>
      <div style={style.container}>
        <div style={sharedStyles.header}>Our Product</div>
        <div style={sharedStyles.detailsContainer}>
          <div style={sharedStyles.details}>
            With a sleek design that fits naturally in any modern kitchen and
            detachable components that make it a breeze to clean and maintain,
            this machine will take your morning routine to the next level of
            comfort and convenience.
          </div>
        </div>
        <Spacer height={'30px'} />
        <div style={style.row}>
          <img
            style={style.image}
            src={FullModel}
            alt='full model of coffee maker'
          />
          <img
            style={style.image}
            src={ModelNoPress}
            alt='model of coffee maker without press'
          />
          <img
            style={style.image}
            src={Press}
            alt='model of coffee maker press'
          />
        </div>
      </div>
    </Fade>
  );
};

export default OurProduct;
