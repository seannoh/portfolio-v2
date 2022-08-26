import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { About, Contact, Portfolio, Resume } from "../pages";

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Main() {
  const [currentPage, setCurrentPage] = useState("about");
  
  useEffect(() => {
    const urlpage = window.location.href.split("#")[1];
    if(urlpage){
      setCurrentPage(urlpage)
    } 
  }, [])

  function renderPage() {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      default:
        return;
    }
  }

  return (
    <>
    <Container maxWidth="md" sx={{paddingTop: '85px', margin: '5px auto'}}>
      <Typography variant="h3" sx={{color: 'white', textAlign: 'center'}}>Hi there! I'm Sean</Typography>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </Container>
    <Footer />
    </>
  );
}
