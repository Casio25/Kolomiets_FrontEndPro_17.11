import React, { useMemo, useState } from "react";

const list = [1, 4, 6, 7, 8, 21];

const sortList = () => {
  console.log("sort");
  return list.sort((a, b) => a - b);
};

const App = () => {
  const [update, setUpdate] = useState(false);
  const sortedList = sortList();
  // const sortedList = useMemo(() => sortList(), []);

  console.log("app render");
  return (
    <div>
      {sortedList.map((listItem) => (
        <div key={listItem}>{listItem}</div>
      ))}
      <button onClick={() => setUpdate(!update)}>Update component</button>
    </div>
  );
};

export default App;
