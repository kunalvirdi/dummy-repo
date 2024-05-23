import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/useFetch";

import "./style.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUrl } from "../../../store/homeSlice";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

function HeroBanner() {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const url = useSelector(getUrl);

  const { data, loading } = useFetch("/movie/upcoming");

  const handleSearchQuery = (e) => {
    if (e.key !== "Enter" || query.length < 1) return;

    navigate(`/search/${query}`);
  };

  useEffect(
    function () {
      const bg =
        url.backdrop +
        data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
      setBackground(bg);
    },
    [data, url.backdrop]
  );

  return (
    <div className="heroBanner">
      <div className="backdrop-img">{!loading && <Img src={background} />}</div>

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie of tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
