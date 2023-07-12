import Table from "./components/Table";

//theme
import "primereact/resources/themes/md-dark-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

function App() {
	return (
		<div className="AppContainer">
			<div className="bodyContainer">
				<Form />
				<Table />
			</div>
			<Footer />
		</div>
	);
}

export default App;
