import { useNavigate } from "react-router-dom";
import "./featuredProperties.css";
import data from "../../bookingData.json";

const FeaturedProperties = () => {
  const navigate = useNavigate();
  return (
    <div className="fp">
      <div className="fpItem" onClick={()=> navigate('/hotel/2',{state: data[0]})}>
        <img
          src={data[0].images[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{data[0].title}</span>
        <span className="fpCity">{data[0].country}</span>
        <span className="fpPrice">Starting from ${data[0].price}</span>
        <div className="fpRating">
          <button>{data[0].rating}</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem" onClick={()=> navigate('/hotel/2',{state: data[5]})}>
        <img
          src={data[5].images[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{data[5].title}</span>
        <span className="fpCity">{data[5].country}</span>
        <span className="fpPrice">Starting from ${data[5].price}</span>
        <div className="fpRating">
          <button>{data[5].rating}</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem" onClick={()=> navigate('/hotel/2',{state: data[10]})}>
        <img
          src={data[10].images[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{data[10].title}</span>
        <span className="fpCity">{data[10].country}</span>
        <span className="fpPrice">Starting from ${data[10].price}</span>
        <div className="fpRating">
          <button>{data[10].rating}</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem" onClick={()=> navigate('/hotel/2',{state: data[20]})}>
        <img
          src={data[20].images[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{data[20].title}</span>
        <span className="fpCity">{data[20].country}</span>
        <span className="fpPrice">Starting from ${data[20].price}</span>
        <div className="fpRating">
          <button>{data[20].rating}</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
