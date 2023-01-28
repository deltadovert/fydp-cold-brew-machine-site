import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Hamborger = ({ onPress }) => {
    const [color, setColor] = React.useState(colors.unpressed);

    return <div style={style.container}>
        <GiHamburgerMenu 
            size='50'
            color={color}
            onClick={onPress}
            onMouseDown={() => setColor(colors.pressed)}
            onMouseUp={() => setColor(colors.unpressed)}
        />
    </div>
}

const colors = {
    'unpressed': 'white',
    'pressed': 'rgba(255,255,255,0.6)'
}

const style = {
    container: {
        position: 'absolute',
        left: 50,
    }
}

export default Hamborger;