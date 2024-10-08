import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import { CiShoppingCart } from "react-icons/ci";

const App = () => {
    return (
        <>
            <WelcomeMessage />
            <Header />
            <CiShoppingCart />
            <MainContent />
            <Footer />
        </>
    );
};

export default App;
