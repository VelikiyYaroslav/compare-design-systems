import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AtlasianDesign } from './AtlasianDesign';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/AtlasianDesign" element={<AtlasianDesign />}  />
          <Route index element={<Navigate to="/AtlasianDesign" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
