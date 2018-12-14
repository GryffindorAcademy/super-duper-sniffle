import React from "react";

const Student = props => {
  let { image, name, info } = props;
  return (
    <div className="studentsContainer__eachStudent">
      <div className="studentsContainer__eachStudent--picture">
        <img src={image} />
      </div>
      <div className="studentsContainer__eachStudent--info">
        <div className="studentsContainer__eachStudent--info-title">{name}</div>
        <div className="studentsContainer__eachStudent--info-subtitle">
          {info}
          <div onClick={() => props.handleClick(name)}>
            {`Hear ${name}'s story`}
            &rarr;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
