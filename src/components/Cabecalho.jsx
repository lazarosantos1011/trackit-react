import logo from '../assets/images/TrackIT_logo.png';

const Header = ({ onLogout, showLogout = false }) => (
  <header id="header">
    <div className="header__logo-container">
      <img src={logo} alt="Logo do TrackIT" id="logo" />
      <h1>TrackIT</h1>
    </div>
    {showLogout && (
      <button id="logout_btn" onClick={onLogout}>Sair</button>
    )}
  </header>
);

export default Header;