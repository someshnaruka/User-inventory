import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRedux, editRedux } from "../features/userSlice";
import toast from "react-hot-toast";

function Modal(props) {
  const dispatch = useDispatch();
 
  const [detail, setDetails] = useState(
    props.check
      ? {
          id: props.value.id,
          name: props.value.name,
          dob: props.value.dob,
          age: props.value.age,
          food: props.value.food,
          gender: props.value.gender,
          hobbies: props.value.hobbies,
        }
      : {
          id: Math.floor((Math.random() + 1) * 100000000),
          name: "",
          dob: "",
          age: "",
          food: "",
          gender: "",
          hobbies: "",
        }
  );

  function handleChange(e) {
    const { name, value } = e.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    if (
      detail.name &&
      detail.age &&
      detail.dob &&
      detail.food &&
      detail.gender &&
      detail.hobbies &&
      detail.id
    ) {
      if (props.action === "ADD") {
        
        dispatch(addRedux(detail));
      } else {
        dispatch(editRedux(detail));
      }
      props.onClose();
    } else {
      toast("All fields are Mandatory");
    }
  }
  return (
    <>
      <div className="modal-bg">
        <div className="main-modal">
          <h1>{props.action} User</h1>
          <form className="form-data">
            <label>Name</label>
            <input
              type="text"
              required
              name="name"
              readOnly={props.action == "VIEW" ? true : false}
              style={
                props.action == "VIEW"
                  ? { caretColor: "transparent" }
                  : { caretColor: "black" }
              }
              value={detail.name}
              onChange={handleChange}
            ></input>
            <label>Dob</label>
            <input
              type="date"
              readOnly={props.action == "VIEW" ? true : false}
              style={
                props.action == "VIEW"
                  ? { caretColor: "transparent" }
                  : { caretColor: "black" }
              }
              required
              name="dob"
              value={detail.dob}
              onChange={handleChange}
            ></input>
            <label>Age</label>
            <input
              type="number"
              readOnly={props.action == "VIEW" ? true : false}
              style={
                props.action == "VIEW"
                  ? { caretColor: "transparent" }
                  : { caretColor: "black" }
              }
              required
              name="age"
              value={detail.age}
              onChange={handleChange}
            ></input>
            <label>Gender</label>
            {props.check ? (
              <div className="gender-area">
                {" "}
                <input
                  type="radio"
                  checked={props.value.gender==="Male"?true:false}
                  disabled={props.action == "VIEW" ? true : false}
                  style={
                    props.action == "VIEW"
                      ? { caretColor: "transparent" }
                      : { caretColor: "black" }
                  }
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                ></input>
                <label>Male</label>
                <input
                  type="radio"
                  checked={props.value.gender==="Female"?true:false}
                  
                  disabled={props.action == "VIEW" ? true : false}
                  style={
                    props.action == "VIEW"
                      ? { caretColor: "transparent" }
                      : { caretColor: "black" }
                  }
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                ></input>
                <label>Female</label>
              </div>
            ) : (
              <div className="gender-area">
                {" "}
                <input
                  type="radio"
                  disabled={props.action == "VIEW" ? true : false}
                  
                  style={
                    props.action == "VIEW"
                      ? { caretColor: "transparent" }
                      : { caretColor: "black" }
                  }
                  name="gender"
                  value="Male"
                  required
                  onChange={handleChange}
                ></input>
                <label>Male</label>
                <input
                  type="radio"
                  disabled={props.action == "VIEW" ? true : false}
                  style={
                    props.action == "VIEW"
                      ? { caretColor: "transparent" }
                      : { caretColor: "black" }
                  }
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                ></input>
                <label>Female</label>
              </div>
            )}

            <select
              name="food"
              readOnly={props.action == "VIEW" ? true : false}
              style={
                props.action == "VIEW"
                  ? { caretColor: "transparent" }
                  : { caretColor: "black" }
              }
              value={detail.food}
              onChange={handleChange}
            >
              <option style={{ display: "none" }}>Select Food</option>
              <option>Pizza</option>
              <option>Burger</option>
              <option>Pasta</option>
            </select>
            <label>Hobbies</label>
            <textarea
              maxlength="100"
              readOnly={props.action == "VIEW" ? true : false}
              style={
                props.action == "VIEW"
                  ? { caretColor: "transparent" }
                  : { caretColor: "black" }
              }
              rows={3}
              required
              name="hobbies"
              value={detail.hobbies}
              onChange={handleChange}
            ></textarea>

            {props.action === "VIEW" ? (
              <div className="button-area">
                <button className="active" onClick={props.onClose}>
                  Close
                </button>
              </div>
            ) : (
              <div className="button-area">
                <button className="close" onClick={props.onClose}>
                  Cancel
                </button>
                <button className="active" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
