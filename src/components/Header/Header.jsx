import {useContext} from 'react';
import JobsContext from '../../context/JobsContext';
import './Header.scss';

const Header = () => {
  const gelen = useContext(JobsContext);

  return (
    <header>
      <a href='/'>
        <img
          src='https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/e/e8/PJT_Logo.png/1200px-PJT_Logo.png'
          alt='logo'
        />
      </a>
      <button onClick={gelen}>bas</button>
    </header>
  );
};

export default Header;
