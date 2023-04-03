import { AddDevil, SortResult} from "./Functions";
import { useRef, useState } from 'react';

import './App.css';

function App() {
  const devilRef = useRef(null);
  const CoolRef = useRef(null);
  const MondayRef = useRef(null);
  const [result, setResult] = useState(null);

  const handleResultClick = () => {
    const maxElement = SortResult(devilRef.current, CoolRef.current, MondayRef.current);
    setResult(maxElement);
  }
  return (
    <>
      <div className="SmileContainer">
        <span ref={devilRef} id="devil" value={0}>&#128520;</span>
        <span ref={CoolRef}id="cool" value={0}>&#128526;</span>
        <span ref={MondayRef}id="monday" value={0}>&#128528;</span>
      </div>
      <div className="SmileButtons">
        <button id="addDevil" onClick={() => AddDevil(devilRef.current)}>Add +1 to Devil</button>
        <button id="addCool" onClick={() => AddDevil(CoolRef.current)}>Add +1 to Cool</button>
        <button id="addMonday" onClick={() => AddDevil(MondayRef.current)}>Add +1 to Monday</button>
      </div>
      <div className="result">
        <button id="resultButton" onClick={()=>handleResultClick()}>Result</button>
        {result && <div className="resultOutput">{result}</div>}
      </div>
    </>
  );
}

export default App;
