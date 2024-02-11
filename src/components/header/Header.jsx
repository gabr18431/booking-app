import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import dataBooking from "../../bookingData.json";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch = ()=> {
    navigate("hotels", { state:{ destination, date, options} });
  };
  const handleSearchCountry = (country)=> {
    navigate("hotels", { state:{ destination: country, date, options} });
  };
  const [addActive, setAddActive] = useState(false);
  const [dataSearching, setDataSearching] = useState([])
  const countriesHeader = ["london","paris","amsterdam","rome","cairo"];
  useEffect(()=>{
    const showDataSearching = dataBooking.filter((item) => item.country.includes(destination.toLowerCase()) || item.title.toLowerCase().includes(destination.toLowerCase()));
    setDataSearching(showDataSearching);
  },[destination]);
  window.addEventListener("click", (e)=> {
    if (e.target.classList.contains('headerSearchInput')) {
      setAddActive(true);
    } else {
      if (e.target.classList.contains('active')) {
        return;
      } else {
        setAddActive(false);
      }
    }
  })
  return (
    <div className="header">
      <div className={
          type === "list" ? "headerContainer listMode container" : "headerContainer container"
        }>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
        <>
          <h1 className="headerTitle">
            A lifetime of discounts? It's Genius. <br />
            Find your next stay
          </h1>
          <p className="headerDesc">
            Search low prices on hotels, homes and much more...
          </p>
          <button className="headerBtn">Sign in / Register</button>
          <div className="headerSearch container">
            <div className="headerSearchItem grow">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                onChange={(e)=> setDestination(e.target.value)}
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onClick={()=> setAddActive((prev) => !prev)}
              />
              {destination === "" ? (
                <div className={`searchHotels ${addActive && "active"}`}>
                {countriesHeader.map((item,i)=> (
                  <h5 className="active" onClick={()=> {
                    handleSearchCountry(item);
                  }} key={i}>{item}</h5>
                ))}
                </div>
              ) : (
                <div className={`searchHotels ${addActive && "active"}`}>
                  {dataSearching.map((item,i)=> (
                  <div key={i} className="searchHotelsItem" onClick={() => {
                    navigate("hotel/5", { state: item });
                  }}>
                    <img src={item.images[0]} alt={item.title} />
                    <span>{item.title}</span>
                  </div>
                  ))}
              </div>
              )}
            </div>
            <div className="headerSearchItem w27">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span onClick={() => setOpenDate(!openDate)}
                className="headerSearchText">{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange 
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItem w27">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchText"
              onClick={() => setOpenOptions(!openOptions)}>
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
              </span>
              { openOptions && (<div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton"
                    disabled={options.adult <= 1}
                    onClick={() => handleOption("adult", "d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton"
                    disabled={options.children <= 0}
                    onClick={() => handleOption("children", "d")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton"
                    disabled={options.room <= 1}
                    onClick={() => handleOption("room", "d")}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>)}
            </div>
            <div className="headerSearchItem shrink">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </>)}
      </div>
    </div>
  );
};

export default Header;
