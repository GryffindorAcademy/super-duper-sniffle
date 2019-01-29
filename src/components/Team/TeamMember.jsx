import React from "react";

const TeamMember = props => {
  let { image, firstname, fullname, role, bio } = props;
  return (
    <div key={fullname} className="col-1-of-3">
      <div className="member">
        <div className="member__picture">
          <img className="member__picture--img" src={image} />
        </div>
        <div className="member__information">
          <div className="member__information--name">{fullname}</div>
          <div className="member__information--role">{role}</div>
        </div>
      </div>
      <div className="member__bio">
        <a href={`#${firstname}Popup`} className="member__bio--link">
          Bio
        </a>
      </div>
      <div id={`${firstname}Popup`} className={`${firstname}Popup`}>
        <div className={`${firstname}Popup__content`}>
          <div className={`${firstname}Popup__right`}>
            <a href="#section-team" className={`${firstname}Popup__close`}>
              &times;
            </a>
            <figure className={`${firstname}Popup__right--shape`}>
              <img
                className={`${firstname}Popup__right--img`}
                src={image}
                alt={fullname}
              />
            </figure>
          </div>
          <div className={`${firstname}Popup__left`}>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
