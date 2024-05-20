import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";
import { Button } from "../ui/button";
import UserIcon from "../icons/UserIcon";
import CartIcon from "../icons/CartIcon";

function Header() {
  return (
    <header className="container px-4 py-4 md:px-6">
      <div className="mx-auto flex items-center justify-between">
        <Link to="/">
          <LogoIcon />
        </Link>

        <div className="flex items-center gap-4">
          <Button variant={"ghost"} className="px-2">
            <UserIcon />
          </Button>

          <Button variant={"ghost"} className="px-2">
            <CartIcon />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
