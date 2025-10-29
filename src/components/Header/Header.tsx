import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import { BUTTON_TEXT } from "../../constasnts.ts";

const Header = () => {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <header className="header">
      <Logo />
      <Button buttonText={BUTTON_TEXT.LOGOUT} onClick={handleLogout} />
    </header>
  );
};

export default Header;