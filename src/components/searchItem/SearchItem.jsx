import "./searchItem.css";
import { useNavigate } from "react-router-dom"

const SearchItem = ({ data }) => {
  const navigate = useNavigate();
  const handelClick= () => {
    navigate("/hotel/2", { state: data });
  }
  return (
    <div className="searchItem" >
      <img
        src={data?.images[0]}
        alt={data?.title}
        className="siImg"
        onClick={handelClick}
      />
      <div className="siDesc">
        <h1 onClick={handelClick} className="siTitle">{data?.title}</h1>
        <span className="siDistance">{data.address}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{data?.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${data?.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handelClick} className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
