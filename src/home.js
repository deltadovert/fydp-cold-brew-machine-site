import React from 'react';
import Hype from './hype';
import Footer from './footer';
import Header from './header';
import OurMission from './our-mission';
import OurProduct from './our-product';
import OurTeam from './our-team';
import Spacer from './spacer';

const Home = () => {
  const [displayState, setDisplayState] = React.useState(0);
  const DISPLAY_MS = 2200;
  React.useEffect(() => {
    setTimeout(() => {
      setDisplayState(1);
      setTimeout(() => {
        setDisplayState(2);
        setTimeout(() => {
          setDisplayState(3);
        }, DISPLAY_MS);
      }, DISPLAY_MS);
    }, DISPLAY_MS);
  }, []);

  const [showMission, setShowMission] = React.useState(false);
  const [showProduct, setShowProduct] = React.useState(false);
  const [showTeam, setShowTeam] = React.useState(false);

  const show = displayState === 3;
  React.useEffect(() => {
    if (show) {
      setShowMission(show);
      setTimeout(() => {
        setShowProduct(true);
        setTimeout(() => {
          setShowTeam(true);
        }, 1000);
      }, 1000);
    }
  }, [show]);

  return (
    <div
      style={{
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >

      <Hype displayState={displayState} />

      {show ? (
        <>
          <Spacer height={80} />

          <OurMission show={showMission} />

          <Spacer height={40} />

          <OurProduct show={showProduct} />

          <Spacer height={40} />

          <OurTeam show={showTeam} />

          <Spacer height={50} />

        </>
      ) : null}
    </div>
  );
};

export default Home;
