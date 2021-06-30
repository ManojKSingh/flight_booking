import React, { useState } from 'react';
import Bookingform from '../BookingForm';
import FlightList from '../FlightList';
import Api from '../../utils/apiHelper';
import styles from './SearchFlight.module.css';

function SearchFlight() {
  const [searchData, setSearchData] = useState({});

  const [flightList, setFlightList] = useState([]);

  const handleFlightSearch = (data) => {
    setSearchData(data);

    (async () => {
      const result = await Api.get('/api/flight', {
        from: data.from,
        to: data.to
      });

      console.log(result);
      setFlightList(result);
    })();
  }
  return (
    <div>
      <div className={styles.formContainer}>
        <Bookingform handler={handleFlightSearch} />
      </div>
      <FlightList flightList={flightList} />
    </div>
  )
}

export default SearchFlight
