import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
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
				<AddCabin />
			</Row>
		</>
	);
}

export default Cabins;
