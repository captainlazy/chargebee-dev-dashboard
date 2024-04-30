import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/shared/Layout";
import { Dashboard } from "./components/Dashboard";
import { WhatsNew } from "./components/WhatsNew";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >  
          <Route index element={<Dashboard/>} />  
          <Route path="new" element={<WhatsNew/>} />  
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
