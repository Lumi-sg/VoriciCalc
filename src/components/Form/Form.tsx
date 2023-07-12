
import "./Form.css";

const Form = () => {
	return (
		<div className="topForm">
			<div className="SocketsContainer">
				<h3>Total Sockets</h3>
				<input
					type="text"
					name="sockets"
					id="sockets"
				/>
			</div>
			<div className="RequirementsContainer">
				<h3>Requirements</h3>
				<input
					type="text"
					name="requirements"
					className="requirementsRED"
				/>
				<input
					type="text"
					name="requirements"
					className="requirementsGREEN"
				/>
				<input
					type="text"
					name="requirements"
					className="requirementsBLUE"
				/>
			</div>
			<div className="DesiredColorsContainer">
				<h3>Desired Colors</h3>
				<input
					type="text"
					name="requirements"
					className="requirementsRED"
				/>
				<input
					type="text"
					name="requirements"
					className="requirementsGREEN"
				/>
				<input
					type="text"
					name="requirements"
					className="requirementsBLUE"
				/>
			</div>
		</div>
	);
};

export default Form;
