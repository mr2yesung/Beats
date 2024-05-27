import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/LoginForm";
import LoginText from "@/components/LoginText";
import LoginLayout from "@/layout/LoginLayout";
import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";

function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  function handleSubmit(email: string, password: string) {
    login({ email, password });
  }

  return (
    <LoginLayout>
      <LoginText />

      <LoginForm disabled={isLoading} handleSubmit={handleSubmit} />

      <div className="mt-4 text-center text-sm">
        <span>Don&apos;t have an account?</span>
        <Button
          variant={"link"}
          onClick={() => navigate("/signup")}
          disabled={isLoading}
        >
          Sign up
        </Button>
      </div>
    </LoginLayout>
  );
}

export default Login;
