import { React, useState } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  //const [IsValid, setIsValid] = useState(true);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let [error_message, setError_message] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    var text;
    if (name.length < 5) {
      text = "Please Enter valid Name";
      setError_message(text);
      return false;
    }
    if (subject.length < 3) {
      text = "Please Enter Correct Subject";
      setError_message(text);
      return false;
    }
    if (isNaN(phone) || phone.length !== 10) {
      text = "Please Enter valid Phone Number";
      setError_message(text);
      return false;
    }
    if (email.indexOf("@") === -1 || email.length < 6) {
      text = "Please Enter valid Email";
      setError_message(text);
      return false;
    }
    if (message.length <= 140) {
      text = "Please Enter More Than 140 Characters";
      setError_message(text);
      return false;
    }

    alert("Form Submitted Successfully!");

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setPhone("");
    setError_message("");
  };

  return (
    <div className={classes.wrapper}>
      <h2>Contact us ☎️</h2>
      <div
        className={
          error_message ? classes.wrapper_error_message : classes.noerror
        }
      >
        {error_message}
      </div>
      <form id="myform" onSubmit={submitHandler}>
        <div className={classes.input_field}>
          <input
            type="text"
            placeholder="👤 Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.input_field}>
          <input
            type="text"
            placeholder="✏️ Subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={classes.input_field}>
          <input
            type="text"
            placeholder="📱 Phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={classes.input_field}>
          <input
            type="text"
            placeholder="📧 Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.input_field}>
          <textarea
            placeholder="✉️ Message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
