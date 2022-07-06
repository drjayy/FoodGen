import './Page.css';
import Home from './Home.jsx';
import GPS from './assets/tabler-icons/gps.svg';
import GitHub from './assets/tabler-icons/brand-github.svg';
import Bookmarks from './assets/tabler-icons/bookmarks.svg';
import Plant from './assets/tabler-icons/plant.svg';

/**
 * Main Page for FoodGen
 * @returns A React Page component.
 */
function Page() {
  return (
    <div className="page">
      <header className="page header">
        <div className='page header left'>
          <img src={GPS} alt="GPS Logo" height={30} width={30} />
          <h1>FoodGen</h1>
        </div>
        <div className='page header right'>
          <a href='https://github.com/drjayy/FoodGen'><img src={GitHub} alt="GitHub Logo" height={25} width={25} /></a>
          <img src={Bookmarks} alt="Bookmarks Logo" height={25} width={25} />
          <img src={Plant} alt="Plant Logo" height={25} width={25} />
          
        </div>
      </header>
      <div className='page body'>
        <Home />
      </div>
      <footer className="page footer">
        <small>© Copyright 2022 DrJayy. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default Page;
