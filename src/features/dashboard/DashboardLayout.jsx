import styled from "styled-components";
import Stats from "./Stats";
import Spinner from "../ui/Spinner";
import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import { useRecentStays } from "../features/dashboard/useRecentStays";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`;

function DashboardLayout() {
	const { isPending1, bookings } = useRecentBookings();
	const { isPending2, stays, confirmedStays } = useRecentStays();

	if (isPending1 || isPending2) return <Spinner />;
	return (
		<StyledDashboardLayout>
			<Stats bookings={bookings} confirmedStays={confirmedStays} />
			<div>Today's activity</div>
			<div>Chart stay durations</div>
			<div>Chart sales</div>
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
