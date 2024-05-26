import User from "./components/user";

function App() {
    return (
        <div>
            <h1>Users</h1>
            <User name="Madhuri" description="FSWD" />
            <User name="Padma" description="FSWDI" />
            <User name="Murthy" description="FSWDI" />
            <User name="Hemanth" description="FSWDI" />
        </div>
    );
}

export default App;
//Props -> A Data that is being passed from one component to another