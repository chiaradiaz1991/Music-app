import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

// query
import { ARTISTS_QUERY } from "../../operations/queries/query";

// store
import { addArtistData, addArtistList } from "../../store";
import { connect } from "react-redux";

// components
import Loading from "../../Components/Loading";
import Error404 from "../../Components/Error404";

const HomePage = (props) => {
  const [searchArtist, setSearchArtist] = useState('');
  const [lookupArtist, setLookupArtist] = useState('');
  const [getArtists, { error, called, loading, data }] = useLazyQuery(
    ARTISTS_QUERY,
    {
      variables: { artist: lookupArtist },
    }
  );

  if (called && loading) return <Loading />;

  const handleChange = (event) => setSearchArtist(event.target.value);
  const handleData = (data) => {
    const { dispatch } = props;
    dispatch(addArtistData(data));
  };

  const handleClick = () => {
    setLookupArtist(searchArtist);
    getArtists();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleDataArtists = () => {
    const { dispatch } = props;
    dispatch(addArtistList(data));
  };

  return (
    <div className="HomeContainer">
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="Search Artists..."
          value={searchArtist}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <button className="searchButton" onClick={() => handleClick()}>
          Search
        </button>
      </div>
      <div className="artistsListContainer">
        <div className="artistsList">
          {error ? (
            <Error404 />
          ) : (
            <>
              {data?.search?.artists.nodes.map((data, index) => {
                return (
                  <Link className="artistListLink" to={`/detail/${data.id}`}>
                    <div
					key={`${data.id}-index`}
                      onClick={() => {
                        handleData(data);
                        handleDataArtists();
                      }}
                    >
                      {data.name}
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect()(HomePage);
