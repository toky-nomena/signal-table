import { lazy, Suspense } from "react";
const Table = lazy(() => import("./Table"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table />
    </Suspense>
  );
}

export default App;
