import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useState } from "react";
import {
  incremented,
  decremented,
  incrementedByAmount,
} from "./features/counter/counter-slice";
import { useFetchBreedsQuery } from "./features/dog/dogs-api-slice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numdogs, setNumDogs] = useState(5);

  const { data = [], isFetching } = useFetchBreedsQuery(numdogs);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incremented())}>
          count is {value}
        </button>
        <button onClick={() => dispatch(incrementedByAmount(3))}>
          count incremented by 3
        </button>
        <div>
          <p>Dogs to fetch:</p>
          <select
            value={numdogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">five</option>
            <option value="10">ten</option>
            <option value="15">fifteen</option>
            <option value="20">twenty</option>
          </select>
        </div>
        <div>
          <p>
            {/* Edit <code>src/App.tsx</code> and save to test HMR */}
            Number of dog breeds: {data.length}
          </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height="250" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
