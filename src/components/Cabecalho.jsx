const Header = ({ onLogout, showLogout = false }) => (
  <header id="header">
    <div className="header__logo-container">
      <img src="/assets/images/TrackIT_logo.png" alt="Logo do TrackIT" id="logo" />
      <h1>TrackIT</h1>
    </div>
    {showLogout && (
      <button id="logout_btn" onClick={onLogout}>Sair</button>
    )}
  </header>
);

export default Header;