import React, { useEffect, useState } from "react";
import "../CSS/Contact.css";
import { useDispatch } from "react-redux";
import { getcontact, sendmessage } from "../JS/Slicecontact/Slicecontact";

const Contact = () => {
  const [message, setmessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState('');
  const [ping, setping] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontact());
  }, [ping,dispatch]);

  const validate = () => {
    const newErrors = {};

    if (!message.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!message.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(message.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!message.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (validate()) {
      dispatch(sendmessage(message));
      setping(!ping);
          // Ici, vous pouvez ajouter votre logique d'envoi de message
    // Dans cet exemple, nous simulons un délai d'envoi avec setTimeout
    setTimeout(() => {
      // Simulation de l'envoi réussi du message
      setAlert('Message sent successfully!');
      setmessage({
        name:"",
        email:"",
        message:""
      });

      // Pour simuler une alerte de réussite pendant 3 secondes
      setTimeout(() => {
        setAlert('');
      }, 3000);
    }, 2000); // Délai de 2 secondes
     
     
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      
      <form className="form_contact" onSubmit={handleSendMessage}>
        <div className="input">
          <h4>Name</h4>
          <input
            type="text"
            placeholder="Name"
            value={message.name}
            onChange={(e) => setmessage({...message, name: e.target.value })}
            required
          ></input>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input">
          <h4>Email</h4>{" "}
          <input
            type="text"
            placeholder="Email"
            value={message.email}
            onChange={(e) => setmessage({ ...message, email: e.target.value })}
            required
          ></input>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input">
          <h4>Message</h4>
          <textarea
            placeholder="Message"
            rows="9"
            value={message.message}
            onChange={(e) =>
              setmessage({ ...message, message: e.target.value })
            }
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" className="btn_message" >
          SEND MESSAGE
        </button>
        {alert && <div className="alert">{alert}</div>}
      </form>
      
     
    </div>
  );
};

export default Contact;
