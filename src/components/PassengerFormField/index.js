import React, { useState } from 'react';
import styles from './PassengerFormField.module.css';

function PassengerFormFiled({
  content,
  setValue,
  label,
  register,
  required,
}) {
  const [toggleForm, setToggleForm] = useState(false);
  const [passengerCount, setPassengerCount] = useState("");
  const [flightClass, setFlightClass] = useState("Economy");
  //const [passengerInput, setPassengerInput] = useState("");

  const [passengerCountError, setPassengerCountError] = useState();

  const validateFiled = (value) => {

    if (value.length <= 0) {
      return "this filed is required";
    }
    else if (isNaN(value)) {
      return "this filed expect numeric value only";
    }

    return false;
  }

  const handleToggleForm = () => {
    setToggleForm((toggle) => !toggle);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMsg = validateFiled(passengerCount);

    if (errorMsg) {
      setPassengerCountError(errorMsg);
      return false;
    }
    else {
      setPassengerCountError(null);
    }

    let traveler = `${passengerCount} ${passengerCount > 1 ? 'Travelers' : 'Traveler'}`;

    let constructInputValue = `${traveler}, ${flightClass}`;

    setValue(content.passenger.id, passengerCount);
    setValue(content.flightClass.id, flightClass);
    setValue(content.passengerAndClass.id, constructInputValue, { shouldValidate: true });
    //setPassengerInput(constructInputValue);
    handleToggleForm();
  }

  return (
    <div className={styles.container}>
      <div onClick={handleToggleForm}>
        <input type="text" {...register(label, { required })} autoComplete={false} />
      </div>
      <div className={`${styles.formContainer} ${toggleForm ? styles.show : ""}`}>
        <form>
          <div className={styles.row}>
            <div className={styles.col}>
              <label for="passengerCount">Passengers</label>
            </div>
            <div className={styles.col}>
              <input
                type="text"
                list="passengers"
                id="passengerCount"
                className={styles.inputBox}
                value={passengerCount}
                onChange={(e) => setPassengerCount(e.target.value)}
              />
              <datalist id="passengers">
                <option key={1} value="1" />
                <option key={2} value="2" />
                <option key={3} value="3" />
                <option key={4} value="4" />
                <option key={5} value="5" />
                <option key={6} value="6" />
                <option key={7} value="7" />
                <option key={8} value="8" />
                <option key={9} value="9" />
                <option key={10} value="10" />
              </datalist>
            </div>
          </div>
          <div className={styles.row}>
            {passengerCountError && (<span class={styles.error}>{passengerCountError}</span>)}
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label for="flightClass">Class</label>
            </div>
            <div className={styles.col}>
              <select id="flightClass" onChange={(e) => setFlightClass(e.target.value)} value={flightClass}>
                <option key="eco" value="Economy">Economy</option>
                <option key="busn" value="Business">Business</option>
              </select>
            </div>
          </div>
          <div className={styles.submitButton}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PassengerFormFiled
