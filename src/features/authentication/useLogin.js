import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export function useLogin() {
	const navigate = useNavigate();
	const { isPending: isLoggingIn, mutate: login } = useMutation({
		mutationFn: ({ email, password }) => loginApi({ email, password }),
		onSuccess: () => {
			navigate("/dashboard");
		},
		onError: (err) => {
			console.log("ERROR", err);
			toast.error("Provided email or password were incorrect");
		},
	});

	return { isLoggingIn, login };
}
