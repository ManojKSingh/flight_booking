import React from 'react';

import styles from './FlightList.module.css';

function FlightList({ flightList }) {
  return (
    <div className={styles.container}>
      {flightList.map(flight => {
        const { id, logo, airline_name, flight_number, fromCity, toCity, duration, price } = flight;
        return (
          <div key={id} className={`row ${styles.flightRow}`}>
            <div className={`col ${styles.verticalCenter}`}>
              <img src={logo} className={styles.image} />
            </div>
            <div className={`col ${styles.verticalCenter}`}>
              <div className={styles.airlineName}>{airline_name}</div>
              <div className={styles.flightNumber}>{flight_number}</div>
            </div>
            <div className={`col row`}>
              <div className={`col ${styles.verticalCenter}`}>
                <div className={styles.time}>00:00</div>
                <div className={styles.city}>{fromCity}</div>
              </div>
              <div className={`col ${styles.noWrap} ${styles.verticalCenter}`}>{duration} hours</div>
              <div className={`col ${styles.verticalCenter}`}>
                <div className={styles.time}>00:00</div>
                <div className={styles.city}>{toCity}</div>
              </div>
            </div>
            <div className={`col ${styles.noWrap} ${styles.verticalCenter}`}>
              <div className={styles.price}>$ {price}</div>
            </div>
            <div className={`col ${styles.verticalCenter}`}>
              <button className={styles.button}>Book Now</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FlightList;
