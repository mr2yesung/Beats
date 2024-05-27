import { useToast } from "@/components/ui/use-toast";
import { supabaseLogout } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: supabaseLogout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/", { replace: true });
      toast({
        description: "Signed out successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });

  return { logout, isLoading };
}

export { useLogout };
