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
  const notify = (artist) => artist && toast(`${artist} was added to favourites!`);
  const { name, country, type, lastFM, discogs, lifeSpan, id } = props.data;
  const handleFav = (id, artist) => {
    const { dispatch } = props;
    dispatch(addFavourite(id, artist));
  };

  return (
    <div className="detailContainer">
      <ToastContainer />
      <Link className="goBack" to="/">
        <img src={back} alt="" />
        Go Back
      </Link>
      <section className="topContainer">
        <h2 className="artistField">{name}</h2>
        <button className="favButton" onClick={() => {
          handleFav(id, name)
          notify(name)
        }}>
          <img className="favIcon" src={fav} alt="fav" />
        </button>
      </section>
      <section className="lowContainer">
        <h3 className="artistField">Country</h3>
        <p className="artistContent">{country && country}</p>
        <h3 className="artistField">Type</h3>
        <p className="artistContent">{type && type}</p>
        <h3 className="artistField">Last FM</h3>
        <p className="artistContent">{lastFM && lastFM.name}</p>
        <h3 className="artistField">Counter Litener</h3>
        <p className="artistContent">{lastFM && lastFM.listenerCount}</p>
        <h3 className="artistField">Real Name</h3>
        <p className="artistContent">{discogs && discogs.realName}</p>
        <h3 className="artistField">Profile</h3>
        <p className="artistContent">{discogs && discogs.profile}</p>
        <h3 className="artistField">Start</h3>
        <p className="artistContent">{lifeSpan && lifeSpan.begin}</p>
        <h3 className="artistField">End</h3>
        <p className="artistContent">{lifeSpan && lifeSpan.end}</p>
        <h3 className="artistField">ended</h3>
        <p className="artistContent">{lifeSpan && lifeSpan.ended}</p>
      </section>
    </div>
  );
};

export default connect()(Detail);
