import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {About, Contact, Portfolio, Resume} from "./pages"

export default function Container() {

    const [currentPage, setCurrentPage] = useState('');

    function renderPage() {
        switch (currentPage) {
            case 'About':
                return <About/>
            case 'Contact':
                return <Contact/>
            case 'Portfolio':
                return <Portfolio/>
            case 'Resume':
                return <Resume/>
            default:
                return;
        }
    }
    

    return (
        <div>
            <h2>Hi there!</h2>
            <Header setCurrentPage={setCurrentPage}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}