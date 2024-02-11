import { useState } from "react";
import "./featured.css";
import { useNavigate } from "react-router-dom";
import data from "../../bookingData.json";

const Featured = () => {
  const navigate = useNavigate();
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
  const handleSearch = (destination) => {
    navigate("hotels", { state: { destination, date, options } });
  };
  return (
    <div className="featured ">
      <div className="featuredItem" onClick={()=>handleSearch('brussels')}>
        <img
          src={data[15].images[1]}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h3>Brussels</h3>
          <h5>103 properties</h5>
        </div>
      </div>
      <div className="featuredItem" onClick={()=>handleSearch('dubai')}>
        <img
          src={data[21].images[0]}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h3>Dubai</h3>
          <h5>233 properties</h5>
        </div>
      </div>
      <div className="featuredItem" onClick={()=>handleSearch('cairo')}>
        <img
          src={data[26].images[0]}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h3>Cairo</h3>
          <h5>532 properties</h5>
        </div>
      </div>
    </div>
  );
};

export default Featured;
