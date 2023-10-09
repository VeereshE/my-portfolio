import React from "react";

import "./index.css";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submit Succeufully");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div id="Contact" className="about-section ">
      <h2 className="name1">Contact</h2>
      <hr className="line" />
      <div className="container">
        <img
          src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1694756071/boy_using_laptop_and_phone_bx874a.png"
          alt=""
          className="person"
        />
        <form onSubmit={onSubmit} className="formCOntainer">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />

          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />

          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />

          <button className="btn btn-danger btn" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      <div class="footer-section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <a className="navbar-brand" href="/" id="Home">
                <span className="span-2">Vee</span>
                <span className="span-elemt">ru</span>
              </a>
              <h1 class="footer-section-mail-id">veereshediga111@gamil.com</h1>
              <h5>Contact : 6363163774</h5>
              <p class="footer-section-address">
                <a href="https://www.linkedin.com/in/veereshediga6363/">
                  <img
                    src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1682398970/317750_linkedin_icon_z8sluw.png"
                    alt="linkdin"
                    className="pic"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1682399417/1632517_circle_instagram_photos_round_icon_social_media_icon_wgr5yu.png"
                    alt="instgram"
                    className="pic"
                  />
                </a>
                <a href="twitter">
                  <img
                    src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1682399719/294709_circle_twitter_icon_xs0jg5.png"
                    alt="twitter"
                    className="pic"
                  />
                </a>
                <a href="https://www.facebook.com/">
                  <img
                    src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1682399631/SeekPng.com_logo-facebook-png-transparente_516623_fc59lt.png"
                    alt="facebook"
                    className="pic"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
