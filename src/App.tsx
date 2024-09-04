import { lazy } from "react";
import Layout from "./Components/Layout/Layout";
import '../src/index.css'
const UsersTable = lazy(() => import('./Components/UsersTable/UsersTable'))

function App() {
  return (
    <Layout>
      <UsersTable />
    </Layout>
  );
}

export default App;
