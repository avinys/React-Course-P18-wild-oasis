import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import Button from "../ui/Button";

function Cabins() {
	const [showForm, setShowform] = useState(false);
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">All cabins</Heading>
				<p>TEST</p>
				{/* <img src="https://vwjvbuimhkpswdzwhpxi.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" /> */}
				<p>Filter / Sort</p>
			</Row>

			<Row>
				<CabinTable />
				<Button onClick={() => setShowform((show) => !show)}>
					Add new cabin
				</Button>
				{showForm && <CreateCabinForm />}
			</Row>
		</>
	);
}

export default Cabins;
