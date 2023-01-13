import { useSelector } from "react-redux";
import { PageSwitcher } from "./routes";

function App() {
  const state = useSelector((state) => state);
  return <PageSwitcher currentRoute={state.currentPage} />;
}

export default App;
