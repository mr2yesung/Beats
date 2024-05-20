import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-4 sm:flex-row md:px-6">
      <p className="text-xs text-foreground/60">
        &copy; {new Date().getFullYear()} Beats. All rights reserved.
      </p>

      <div className="flex gap-4 sm:ml-auto sm:gap-6">
        <Button asChild variant="ghost">
          <Link to="/policy" className="text-xs">
            Terms of Service
          </Link>
        </Button>

        <Button asChild variant="ghost">
          <Link to="/policy" className="text-xs">
            Privacy
          </Link>
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
