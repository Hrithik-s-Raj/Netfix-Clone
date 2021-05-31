import React, { useEffect } from "react";
import "./HomeScreen.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Rows from "./components/Rows";
import requests from "./Request";

function HomeScreen() {
  return (
    <div className="homescreen">
      <NavBar />
      <Banner />
      <Rows
        title="NETFLIX OROGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow
      />

      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
