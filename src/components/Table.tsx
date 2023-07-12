import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { arrayOfRecipe } from "../Types/Recipe";
import "./Table.css";

const Table = () => {
	const cellStyle: React.CSSProperties = { textAlign: "center" };

	return (
		<div className="tableContainer">
			<DataTable
				value={arrayOfRecipe.recipes}
				showGridlines
				size="small"
				stripedRows
				rowHover
				selectionMode="single"
				tableStyle={{ minWidth: "50rem" }}
				className="dataTable"
			>
				<Column
					field="craftType"
					header="Craft Type"
					sortable
					style={cellStyle}
				/>
				<Column
					field="averageCost"
					header="Average Cost"
					sortable
					style={cellStyle}
				/>
				<Column
					field="successRate"
					header="Success Rate"
					sortable
					style={cellStyle}
				/>
				<Column
					field="averageAttempts"
					header="Average Attempts"
					sortable
					style={cellStyle}
				/>
				<Column
					field="costPerTry"
					header="Cost Per Try"
					sortable
					style={cellStyle}
				/>
			</DataTable>
		</div>
	);
};

export default Table;
