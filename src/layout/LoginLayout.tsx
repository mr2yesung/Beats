import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type LoginLayoutProps = {
  children: React.ReactNode;
};

function LoginLayout({ children }: LoginLayoutProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate, isLoading],
  );

  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">{children}</div>
      </div>

      <div className="hidden lg:block">
        <img
          src="/images/hero.png"
          alt="Sign in image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default LoginLayout;
