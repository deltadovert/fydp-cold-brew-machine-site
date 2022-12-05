import Fade from 'react-reveal/Fade';

const OurProduct = ({ show }) => {
  const style = {
    container: {
      opacity: show ? 1 : 0,
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold',
    },
  };
  return (
    <Fade when={show}>
      <div style={style.container}>
        <div style={style.header}>Our Product</div>
      </div>
    </Fade>
  );
};

export default OurProduct;
