import { useToast } from "@/components/ui/use-toast";
import { supabaseCreateOrder, orderPostData } from "@/services/apiOrders";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useCreateOrder() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: createOrder, isPending: isLoading } = useMutation({
    mutationFn: (orderData: orderPostData) => supabaseCreateOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast({
        description: "Order created successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });

  return { createOrder, isLoading };
}

export { useCreateOrder };
