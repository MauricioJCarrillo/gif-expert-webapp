import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
