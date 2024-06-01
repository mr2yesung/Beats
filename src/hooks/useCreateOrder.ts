import { useToast } from "@/components/ui/use-toast";
import { supabaseCreateOrder, orderData } from "@/services/apiOrders";
import { useMutation } from "@tanstack/react-query";

function useCreateOrder() {
  const { toast } = useToast();

  const { mutate: createOrder, isPending: isLoading } = useMutation({
    mutationFn: (orderData: orderData) => supabaseCreateOrder(orderData),
    onSuccess: () => {
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
