
import "./App.scss";
import HomeComponent from "./view/home";
import React from "react";
import Footer from "./shared/footer";
import background from "../src/assets/background.jpg"


function App() {
  return (
    <React.Fragment>
      <div className="App" style={{ backgroundImage: `url(${background})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <HomeComponent />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
