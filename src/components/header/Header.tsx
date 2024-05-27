import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";
import { Button } from "../ui/button";
import UserIcon from "../icons/UserIcon";
import Cart from "./Cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useLogout } from "@/hooks/useLogout";

function Header() {
  const { isAuthenticated } = useAuth();
  const { logout, isLoading } = useLogout();

  return (
    <header className="container px-4 py-4 md:px-6">
      <div className="mx-auto flex items-center justify-between">
        <Link to="/">
          <LogoIcon />
        </Link>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="px-2">
                <UserIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent side="bottom" align="end" className="px-1">
              {isAuthenticated ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to={"/orders"}>Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => logout()}
                    disabled={isLoading}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to={"/signup"}>Create Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={"/login"}>Sign In</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;
