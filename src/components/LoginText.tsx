type LoginTextProps = {
  isSignUp?: boolean;
};

function LoginText({ isSignUp = false }: LoginTextProps) {
  return (
    <div className="grid gap-2 text-center">
      <h1 className="text-3xl font-bold">{isSignUp ? "Sign Up" : "Login"}</h1>
      <p className="text-balance text-foreground/60">
        {isSignUp
          ? "Enter your email below to sign up"
          : "Enter your email below to login to your account"}
      </p>
    </div>
  );
}

export default LoginText;
