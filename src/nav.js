import React from 'react';

import { AiFillHome } from 'react-icons/ai';
import { FaCoffee } from 'react-icons/fa';
import { routes } from './App';
import Spacer from './spacer';

const iconSize = '40';
const iconColor = 'white';

const NAV_WIDTH = 100;

const Nav = ({ onIconPress }) => {
  const [position, setPosition] = React.useState(-NAV_WIDTH);

  React.useEffect(() => {
    setPosition(0);
  }, []);

  const pages = [
    {
      label: 'Home',
      component: (
        <AiFillHome
          size={iconSize}
          color={iconColor}
          onClick={() => onIconPress(routes.home)}
        />
      ),
    },
    {
      label: 'Blog',
      component: (
        <FaCoffee
          size={iconSize}
          color={iconColor}
          onClick={() => onIconPress(routes.blog)}
        />
      ),
    },
  ];

  return (
    <div style={{ ...style.container, left: position }}>
      {pages.map((page) => {
        return (
          <div style={style.row}>
            {page.label} <Spacer width={10} /> {page.component}
          </div>
        );
      })}
    </div>
  );
};

const style = {
  container: {
    position: 'absolute',
    zIndex: 999,
    backgroundImage: 'linear-gradient(to right, black, purple)',
    width: NAV_WIDTH,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    paddingRight: 20,
    border: 'solid 5px black',
    transition: 'left ease 0.5s',
  },
  row: {
    color: 'grey',
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
  },
};

export default Nav;
