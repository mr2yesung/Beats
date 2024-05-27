import { useToast } from "@/components/ui/use-toast";
import { supabaseSignUp } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useSignUp() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: supabaseSignUp,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast({
        description: "Account created successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });

  return { signUp, isLoading };
}

export { useSignUp };
