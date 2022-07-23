import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

const API = "https://movienodejass.herokuapp.com/mobiles";

function App() {
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    fetch(`${API}`)
    .then((data) => data.json())
    .then((mbs) => setMobiles(mbs));
  },[]);

  return (
		<div className="App">
			<div className="phone-list-container">
				{mobiles.map((mb) => (
					<Phone key={mb._id} mobile={mb} />
				))}
			</div>
		</div>
	);
}

function Phone({ mobile }) {
	return (
		<div className="phone-container">
			<img className="phone-picture" src={mobile.img} alt={mobile.model} />
			<h2 className="phone-name">{mobile.model}</h2>
			<p className="phone-company">{mobile.company}</p>
		</div>
	);
}

export default App;
