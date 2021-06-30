import React, { useState, useEffect } from 'react';
import Autocomplete from '../Autocomplete';
import InputDate from '../InputDate';
import Radiogroup from '../RadioGroup';
import PassengerFormFiled from '../PassengerFormField';
import Api from '../../utils/apiHelper';
import { useForm } from "react-hook-form";

const content = {
  from: {
    label: "From",
    id: "from"
  },
  to: {
    label: "To",
    id: "to"
  },
  depart: {
    label: "Depart",
    id: "departDate"
  },
  arrival: {
    label: "Arrival",
    id: "arrivalDate"
  },
  passengerAndClass: {
    label: "Passenger | Class",
    id: "passengerAndClass"
  },
  passenger: {
    label: "Passenger",
    id: "passenger"
  },
  flightClass: {
    label: "Class",
    id: "flightClass"
  },
  submitButton: {
    label: "Happy Easy Search",
    id: "submit"
  }
}

function Bookingform({ handler }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const [city, setCity] = useState([]);
  const trips = ["ONE WAY", "ROUNG TRIP"]

  const [selected, setSelected] = useState(trips[0] || "");

  useEffect(() => {
    (async () => {
      const result = await Api.get('/api/city');

      setCity(result);
    })();
  }, []);

  const isRoundTrip = selected === trips[1] ? true : false;

  return (
    <form onSubmit={handleSubmit(handler)}>
      <div className="row">
        <Radiogroup name="trip" list={trips} selected={selected} setSelected={setSelected} />
      </div>
      <div className="row">
        <div class="col">
          <label for="">{content.from.label}</label>
        </div>
        <div className="col">
          <Autocomplete
            listName={content.from.id}
            items={city}
            valueKey="id"
            labelKey="city"
            label={content.from.id}
            register={register}
            required
          />
        </div>
      </div>
      {errors[content.from.id] && (<div className="error">Travel from field is required</div>)}
      <div className="row">
        <div className="col">
          <label for="">{content.to.label}</label>
        </div>
        <div className="col">
          <Autocomplete
            listName={content.to.id}
            items={city}
            valueKey="id"
            labelKey="city"
            label={content.to.id}
            register={register}
            required
          />
        </div>
      </div>
      {errors[content.to.id] && (<div className="error">Travel to field is required</div>)}
      <div className="row">
        <div className="col">
          <label for="">{content.depart.label}</label>
        </div>
        <div className="col">
          <InputDate label={content.depart.id} register={register} required />
        </div>
      </div>
      {errors[content.depart.id] && (<div className="error">Depart date field is required</div>)}
      {isRoundTrip && [(
        <div className="row">
          <div className="col">
            <label for="">{content.arrival.label}</label>
          </div>
          <div className="col">
            <InputDate label={content.arrival.id} register={register} required />
          </div>
        </div>

      ), errors[content.arrival.id] && (<div className="error">Arrival date field is required</div>)]}
      <div className="row">
        <div className="col">
          <label for="pessengerAndClass">{content.passengerAndClass.label}</label>
        </div>
        <div className="col">
          <PassengerFormFiled
            id="pessengerAndClass"
            content={content}
            setValue={setValue}
            label={content.passengerAndClass.id}
            register={register}
            required
          />
        </div>
      </div>
      {errors[content.passengerAndClass.id] && (<div className="error">Passenger and class field is required</div>)}

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <button type="submit" className="button">{content.submitButton.label}</button>
        </div>
      </div>
    </form>
  )
}

export default Bookingform;
