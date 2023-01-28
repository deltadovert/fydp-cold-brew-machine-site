import './App.css';
import React from 'react';
import Header from './header';
import Home from './home';
import Blog from './Blog';
import Footer from './footer';
import Nav from './nav';

export const routes = {
  home: <Home />,
  blog: <Blog />,
};

function App() {
  const [route, setRoute] = React.useState(routes.home);
  const [navExpanded, setNavExpanded] = React.useState(false);

  React.useEffect(() => {
    setNavExpanded(false);
  }, [route])

  return (
    <div className="App">
      <Header onNavExpand={() => setNavExpanded((state) => !state)} />
      {navExpanded ? <Nav onIconPress={setRoute} /> : null}
      {route}
      <Footer />
    </div>
  );
}

export default App;
