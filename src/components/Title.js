import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  const { children, currentClass } = props;
  return (
    <>
      <div className={currentClass}>
        <h1>{children}</h1>
      </div>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  currentClass: PropTypes.string
};

export default Title;
