import React from "react";
import { Link } from "react-router-dom";
import { addFavourite } from "../../store";
import { connect } from "react-redux";
import back from "../../assets/back.png";
import fav from "../../assets/fav.png";
import artist from "../../assets/artist.png";

const Detail = (props) => {
  const {
    name,
    country,
    type,
    mediaWikiImages,
    lastFM,
    discogs,
    lifeSpan,
    id,
  } = props.data;
  const handleFav = (id, artist) => {
    const { dispatch } = props;
    dispatch(addFavourite(id, artist));
  };
  return (
    <div className="detailContainer">
      <section className="topContainer">
        <Link className="favButton" to="/">
            <img src={back} alt="" />
            Go Back
        </Link>
        <h2 className="artistField">Name</h2>
        <p className="artistContent">{name && name}</p>
        <button className="favButton" onClick={() => handleFav(id, name)}>
          <img src={fav} alt="fav" />
        </button>
      </section>
      <section className="lowContainer">
        <img src={artist} alt="" />
        <h3 className="artistField">Country</h3>
        <p className="artistContent">{country && country}</p>
        <h3 className="artistField">Type</h3>
        <p className="artistContent">{type && type}</p>
        <h3 className="artistField">Image</h3>
        <p className="artistContent">
          {mediaWikiImages &&
            mediaWikiImages !== null &&
            mediaWikiImages.objectName}
        </p>
        <h3 className="artistField">Last FM</h3>
        <p className="artistContent">{lastFM && lastFM.name}</p>
        <h3>Counter Litener</h3>
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
