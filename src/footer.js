const Footer = () => {
    const style = {
        container: {
            width: '100%',
            height: 40,
            position: 'relative',
            bottom: 0,
        },
        text: {
            position: 'absolute',
            right: 20,
            bottom: 0,
            color: 'black',
            textShadow: 'none',
            fontSize: 15,
        }
    }

    return <div style={style.container}>
        <div style={style.text}>2022 Elijah O'Leary</div>
    </div> 
}

export default Footer;