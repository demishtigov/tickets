            
import { useState, useEffect } from "react";
import "./filter.css";


const Filter = ({ checkboxFiltersValue, tickets, setTickets, stopsFilter, setStopsFilter }) => {
  const [curr, setCurr] = useState("rub");

  

  return (
    <>
      <div className="filterStyle">
        <div className="currencies">
          <div className="currenciesHeader">Валюта</div>
          <div className="currenciesButtons">
          <button
              onClick={() => setCurr("rub")}
              className={curr === "rub" ? "rub active" : "rub"}
            >
              rub
            </button>
            <button
              onClick={() => setCurr("usd")}
              className={curr === "usd" ? "usd active" : "usd"}
            >
              usd
            </button>
            <button
              onClick={() => setCurr("eur")}
              className={curr === "eur" ? "eur active" : "eur"}
            >
              eur
            </button>
          </div>
        </div>
        <div className="filterTransfers">
          <div className="TransfersHeader">Количество пересадок</div>
          <div className="filterItems">
            <div className="filterItem">
              <input
                id="all"
                type="checkbox"
                name="checkboxAll"
                value={checkboxFiltersValue.all}
                checked={stopsFilter == checkboxFiltersValue.all}
                onClick={({target}) => setStopsFilter(target.value)}
                
              />
              <label htmlFor="all">
                <span />
                Все
              </label>
            </div>
            <div className="filterItem">
              <input
                id="none"
                type="checkbox"
                name="checkbox0"
                value={checkboxFiltersValue.zeroStops}
                checked={stopsFilter == checkboxFiltersValue.zeroStops}
                onClick={({target}) => setStopsFilter(target.value)}
              />
              <label htmlFor="none">
                <span />
                Без пересадок
              </label>
            </div>
            <div className="filterItem">
              <input
                id="one"
                type="checkbox"
                name="checkbox1"
                value={checkboxFiltersValue.oneStop}
                checked={stopsFilter == checkboxFiltersValue.oneStop}
                onClick={({target}) => setStopsFilter(target.value)}
              />
              <label htmlFor="one">
                <span />1 пересадка
              </label>
            </div>
            <div className="filterItem">
              <input
                id="two"
                type="checkbox"
                name="checkbox2"
                value={checkboxFiltersValue.twoStops}
                checked={stopsFilter == checkboxFiltersValue.twoStops}
                onClick={({target}) => setStopsFilter(target.value)}
              />
              <label htmlFor="two">
                <span />2 пересадки
              </label>
            </div>
            <div className="filterItem">
              <input
                id="three"
                type="checkbox"
                name="checkbox3"
                value={checkboxFiltersValue.threeStops}
                checked={stopsFilter == checkboxFiltersValue.threeStops}
                onClick={({target}) => setStopsFilter(target.value)}
              />
              <label htmlFor="three">
                <span />3 пересадки
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     sortFilters(filter);
//   }, [filter]);

//   const handelChangeFilter = (event) => {
//     const { checked, value } = event.target;
//     if (checked) {
//       setFilter(value);
//     }
//   };
