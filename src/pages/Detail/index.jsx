import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// store
import { addFavourite } from "../../store";
import { connect } from "react-redux";

// assets
import back from "../../assets/back.png";
import fav from "../../assets/fav.png";

const Detail = (props) => {
  const notify = (artist) =>
    artist && toast(`${artist} was added to favourites!`);
  const { name, country, lastFM, discogs, id } = props.data;
  const handleFav = (id, artist) => {
    const { dispatch } = props;
    dispatch(addFavourite(id, artist));
  };

  console.log({ props });
  return (
    <div className="detailContainer">
      <ToastContainer />
      <Link className="goBack" to="/">
        <img src={back} alt="" />
        Go Back
      </Link>
      <section className="topContainer">
        <h2 className="artistField">{name}</h2>
        <button
          className="favButton"
          onClick={() => {
            handleFav(id, name);
            notify(name);
          }}
        >
          <img className="favIcon" src={fav} alt="fav" />
        </button>
      </section>
      <section className="lowContainer">
        {!!country && country !== "" && (
          <>
            <h3 className="artistField">Country</h3>
            <p className="artistContent">{country}</p>
          </>
        )}
        {!!lastFM && lastFM.listenerCount !== "" && (
          <>
            <h3 className="artistField">Counter Litener</h3>
            <p className="artistContent">{lastFM.listenerCount}</p>
          </>
        )}
        {!!discogs && !discogs?.profile !== "" && (
          <>
            <h3 className="artistField">Profile</h3>
            <p className="artistContent">{discogs.profile}</p>
          </>
        )}
      </section>
    </div>
  );
};

export default connect()(Detail);
