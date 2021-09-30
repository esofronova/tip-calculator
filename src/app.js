import { useState } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import './style.scss';

export default function TipCalculator() {

  let [bill, setBill] = useState();
  let [people, setPeople] = useState();
  let [tips, setTips] = useState();

  let tipsAmount = (Number(bill) / 100) * tips;
  let total = Number(bill) + tipsAmount;
  let eachPerson = total / people;

  let [showTotal, setShowTotal] = useState(false);

  return (
    <div className="tip-calculator">
      <div className="container mt-3">
        <div className="w-75 mx-auto"> 
          <header className="rounded-top text-white text-center bg-primary p-3 fs-4">TIP CALCULATOR</header>
          <form className="rounded-bottom border border-3 bg-light p-4">
            <p>How much was your bill?</p>
            <div className="input-group mb-3">
              <i className="input-group-text">$</i>
              <input
                type="text"
                className="form-control"
                value={bill}
                onChange={e => { setBill(e.target.value) }}
                onFocus={() => { setShowTotal(false) }}
                required
              />
            </div>

            <p>How many people sharing the bill?</p>
            <div className="input-group mb-3">
              <i className="input-group-text"><PersonFill /></i>
              <input
                type="text"
                className="form-control"
                value={people}
                onChange={e => { setPeople(e.target.value) }}
                onFocus={() => { setShowTotal(false) }}
                required
              />
            </div>

            <p>How was your service?</p>
            <select
              className="form-control pointer"
              onChange={e => { setTips(e.target.value) }}
              onFocus={() => { setShowTotal(false) }}
              required
            >
              <option>Choose..</option>
              <option value="20">Great - 20%</option>
              <option value="15">Good - 15%</option>
              <option value="10">Bad - 10%</option>
            </select>

            <div className="centered mt-4">
              <button
                className="btn border bg-primary text-white px-5 fs-4"
                type="submit"
                onClick={(e) => { e.preventDefault(); setShowTotal(true); }}
              >Calculate</button>
            </div>

            <div className={"mt-3 text-center" + (showTotal === false ? " d-none" : "d-block")}>
              <p>Tip Amount $ {tipsAmount.toFixed(2)}</p>
              <p>Total Amount $ {total.toFixed(2)}</p>
              <p>Each Person Owes $ {eachPerson.toFixed(2)}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};