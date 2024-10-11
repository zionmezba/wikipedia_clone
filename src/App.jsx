import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import { CiShoppingCart } from "react-icons/ci";
import EventDemo from "./components/EventDemo";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import CopyInput from "./components/CopyInput";
import CounterEffect from "./components/CounterEffect";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./UserContext";

const App = () => {
    return (<UserProvider>
        <UserProfile />
        <WelcomeMessage />
        <Header />
        <Counter />
        <CiShoppingCart />
        <ShoppingList />
        <Profile />
        <CopyInput />
        <CounterEffect />
        <MainContent />
        <EventDemo />
        <Footer />
    </UserProvider>
    );
};

export default App;
