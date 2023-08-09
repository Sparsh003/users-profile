import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="background-image">
      <header className="text-center">
        <h2 className="m-3 underline">
          User Record List
        </h2>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
