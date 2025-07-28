import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCabin() {
	const queryClient = useQueryClient();

	// Need query client to invalidate the data on successful mutation - re-fetch and update the data on the screen
	const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: (id) => deleteCabinApi(id),
		onSuccess: () => {
			toast.success("Cabin successfully deleted");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isDeleting, deleteCabin };
}
