import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type LoginFormProps = {
  isSignUp?: boolean;
  handleSubmit: (email: string, password: string) => void;
  disabled: boolean;
};

function LoginForm({
  isSignUp = false,
  handleSubmit,
  disabled,
}: LoginFormProps) {
  const [email, setEmail] = useState("beats@keyboard.com");
  const [password, setPassword] = useState("password");

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) return;

    handleSubmit(email, password);
  }

  return (
    <form className="grid gap-4" onSubmit={handleFormSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={disabled}>
        {isSignUp ? "Create Account" : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
