import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import { CiShoppingCart } from "react-icons/ci";
import EventDemo from "./components/EventDemo";
import Counter from "./components/Counter";

const App = () => {
    return (
        <>
            <WelcomeMessage />
            <Header />
            <Counter />
            <CiShoppingCart />
            <MainContent />
            <EventDemo />
            <Footer />
        </>
    );
};

export default App;
