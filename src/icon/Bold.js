import React from "react";
import "./index.css";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "icon", viewBox = "0 0 1024 1024"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M248.087 206.383h289.187c62.79 0 112.314 15.034 147.689 45.102 32.721 28.3 49.524 66.327 49.524 114.083 0 35.375-8.843 65.443-25.646 90.205-16.803 22.994-40.681 39.796-72.518 52.178 41.565 7.959 72.518 24.762 93.742 50.408 20.34 24.762 30.953 59.253 30.953 101.702 0 63.674-22.109 110.546-65.443 140.614-37.143 24.762-90.205 37.143-157.416 37.143H248.087V206.383z m103.47 84.898v180.41H509.86c44.218 0 75.17-7.959 93.742-22.108 17.688-15.035 27.416-38.912 27.416-71.634 0-30.068-9.728-52.177-27.416-65.443-19.456-14.15-49.524-21.225-91.973-21.225h-160.07z m0 265.31v196.328h171.567c38.912 0 69.865-6.19 91.974-18.571 28.3-15.919 42.45-40.681 42.45-76.056 0-36.259-10.613-61.905-30.953-77.824-21.225-15.918-54.83-23.877-100.818-23.877h-174.22z"
      p-id="4399"
    />
  </svg>
);