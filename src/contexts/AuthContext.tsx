import { supabaseGetUser } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

type authContext = { isAuthenticated: boolean; isLoading: boolean };

const AuthContext = createContext({} as authContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: supabaseGetUser,
  });

  const isAuthenticated = user?.role === "authenticated";

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
