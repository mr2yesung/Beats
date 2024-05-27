import { useToast } from "@/components/ui/use-toast";
import { supabaseLogin } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useLogin() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      supabaseLogin({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });

  return { login, isLoading };
}

export { useLogin };
