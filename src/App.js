import "./App.css";
import Information from "./components/Information";
import Numbers from "./components/Numbers";
import Register from "./components/Register";

function App() {
	return (
    <div className="App">
			<div className="content">
          <img className="content__background" src="./images/background.png" alt=""/>
          <div className="content__wrapper">
          <nav>
            <ul>
              <li>
                <Register />
              </li>
            </ul>
          </nav>
          <div className="content__copy">
            <img src="./images/logo.png" alt="logo" />
            <Information
              header="FIGMA AFRICA International Conference"
              date="December 6 - 8, 2018"
              copy="Kigali Conference Centre Kimihurura Roundabout"
              sales="*Limited seats available"
            />

          </div>
        </div>
			</div>

			<div className="content__context">
				<h2 className="content__header">OUR CONFERENCES IN NUMBERS</h2>
				<Numbers />
			</div>
		</div>
	);
}

export default App;
