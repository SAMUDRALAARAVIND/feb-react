import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";

const MyApp = () => {
    const isUserLoggedIn = true;

    return <>
        <h1>Root Component</h1>
        {isUserLoggedIn ? <HomeScreen /> : <LoginScreen />}
    </>;
}

export default MyApp