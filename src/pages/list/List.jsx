import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import bookingData from "../../bookingData.json";

const List = () => {
  const [openDate, setOpenDate] = useState(false);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [showData, setShowData] = useState([]);
  const handelShowData = (data) => {
    const filteredData = data.filter((item)=> item.country.includes(destination.toLowerCase()) || item.title.toLowerCase().includes(destination.toLowerCase()) );
    setShowData(filteredData);
  }
  useEffect(()=> {
    handelShowData(bookingData)
  },[destination]);
  const handelSearch = () => {
    const filteredData = 
    bookingData.filter((item)=> (
      (item.country.includes(destination.toLowerCase()) || item.title.toLowerCase().includes(destination.toLowerCase()) )
      && (item.price > min && item.price < max )
      ) );
      setShowData(filteredData);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer container">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination.toUpperCase()} type="text" onChange={(e)=> setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}
                className="headerSearchText">{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange className="date"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>(per night)</small>
                  </span>
                  <input type="number" className="lsOptionInput" min={0} onChange={(e)=> setMin(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>(per night)</small>
                  </span>
                  <input type="number" className="lsOptionInput" min={0} onChange={(e)=> setMax(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handelSearch}>Search</button>
          </div>
          <div className="listResult">
            {showData.length > 0 && showData.map((hotel,i)=> (
            <SearchItem key={i} data={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
