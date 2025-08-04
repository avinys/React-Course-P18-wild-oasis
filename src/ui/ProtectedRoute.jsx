import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
	height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ProtectedRoute({ children }) {
	// 1. Load the authenticated user
	const { isPending, isAuthenticated } = useUser();
	const navigate = useNavigate();

	// 3. If there is no authenticated user, redirect to login page
	useEffect(() => {
		if (!isAuthenticated && !isPending) {
			navigate("/login");
		}
	}, [isAuthenticated, isPending, navigate]);

	// 2. While loading, show a spinner
	if (isPending)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);

	// 4. If there is a user, render the app
	if (isAuthenticated) return children;
}

export default ProtectedRoute;
