import LoginForm from "@/components/LoginForm";
import LoginText from "@/components/LoginText";
import { useSignUp } from "@/hooks/useSignUp";
import LoginLayout from "@/layout/LoginLayout";

function SignUp() {
  const { signUp, isLoading } = useSignUp();

  function handleSubmit(email: string, password: string) {
    signUp({ email, password });
  }

  return (
    <LoginLayout>
      <LoginText isSignUp={true} />

      <LoginForm
        isSignUp={true}
        handleSubmit={handleSubmit}
        disabled={isLoading}
      />
    </LoginLayout>
  );
}

export default SignUp;
