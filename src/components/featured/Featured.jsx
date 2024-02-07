import { useState } from "react";
import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleSearch = () => {
    navigate("hotels", { state: { destination, date, options } });
  };
  return (
    <div className="featured container">
      <div className="featuredItem" onClick={handleSearch}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h3>Dublin</h3>
          <h5>123 properties</h5>
        </div>
      </div>
      <div className="featuredItem" onClick={handleSearch}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h3>Reno</h3>
          <h5>533 properties</h5>
        </div>
      </div>
      <div className="featuredItem" onClick={handleSearch}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h3>Austin</h3>
          <h5>532 properties</h5>
        </div>
      </div>
    </div>
  );
};

export default Featured;
