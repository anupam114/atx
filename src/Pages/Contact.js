import React from "react";
import Constants from "../Constants";
import { Alert } from "react-bootstrap";
const Contact = () => {
  const [errmsg, setErrMsg] = React.useState(null);
  const [sucmsg, setSucMsg] = React.useState(null);

  const handleContact = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let url = Constants.contactAdd;
    (async () => {
      let response = await fetch(url, {
        method: 'POST',
        body: formData
      });
      let data = await response.json();
      if (data.status === 200) {
        setSucMsg(data.message);
        setErrMsg('');
        e.target.reset();
      } else {
        setErrMsg(data.message);
      }
    })()
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 content-paging">
          <h1>Contact Us</h1>
        </div>
        <div className="col-12">
          <form id="contactForm" onSubmit={handleContact}>

            <Alert variant='danger'>{errmsg}</Alert>
            <Alert variant='success'>{sucmsg}</Alert>

            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <br />
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
