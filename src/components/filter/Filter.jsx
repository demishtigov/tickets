            
import { useState, useEffect } from "react";
import "./filter.css";


const Filter = ({ tickets, setTickets }) => {
  const [curr, setCurr] = useState("rub");

  const [stops, setStops] = useState({
    checkboxAll: false,
    checkbox0: true,
    checkbox1: true,
    checkbox2: true,
    checkbox3: true
  })

  const checkedFilter = e => {
    const {value, name, checked} = e.target
    
    setStops({ [name]: checked });
    if (checked) {
      const filterData = tickets.filter(item => item.stops === value);
      return filterData
      
      
    } else {
      const filterData = tickets.filter(item => item["stops"] !== +value);
      
      setTickets(tickets)
      setStops({ checkboxAll: false });
    }
  };
  const checkedAllTickets = e => {
    const checked = e.target.checked;
    

    if (checked) {
      setStops({
        checkboxAll: true,
        checkbox0: true,
        checkbox1: true,
        checkbox2: true,
        checkbox3: true
      });

      // this.props.update({
      //   tickets: data
      // });
    } else {
      setStops({
        checkboxAll: false
      });
    }
  };

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
                checked={stops.checkboxAll}
                name="checkboxAll"
                value="all"
                onChange={checkedAllTickets}
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
                checked={stops.checkbox0}
                name="checkbox0"
                value="0"
                onChange={checkedFilter}
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
                checked={stops.checkbox1}
                name="checkbox1"
                value="1"
                onChange={checkedFilter}
              />
              <label htmlFor="one">
                <span />1 пересадка
              </label>
            </div>
            <div className="filterItem">
              <input
                id="two"
                type="checkbox"
                checked={stops.checkbox2}
                name="checkbox2"
                value="2"
                onChange={checkedFilter}
              />
              <label htmlFor="two">
                <span />2 пересадки
              </label>
            </div>
            <div className="filterItem">
              <input
                id="three"
                type="checkbox"
                checked={stops.checkbox3}
                name="checkbox3"
                value="3"
                onChange={checkedFilter}
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
