import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TasksForm from "./pages/TasksForm";
import TasksPage from "./pages/TasksPage";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto py-4">
        <Navbar/>
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/new" element={<TasksForm />} />
          <Route path="/edit/:id" element={<TasksForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
