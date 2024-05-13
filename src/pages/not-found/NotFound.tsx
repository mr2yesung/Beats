import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-primary/10 px-4 md:px-6">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold tracking-tight">404</h1>
        <p className="mt-2 text-lg font-medium">
          Oops, the page you are looking for could not be found.
        </p>
        <Button className="mt-4" asChild>
          <Link to={"/"} replace>
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
