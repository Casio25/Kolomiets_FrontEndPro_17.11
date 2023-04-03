import {Header} from "./Header";
import { Navbar } from "./SideMenu";

import "./App.css";
import {Main} from "./Main"
function App() {
  return (
    <>
      <Header title="My App">
        <Navbar />
      </Header>
      <Main />
    </>
  );
}

export default App;
