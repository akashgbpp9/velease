import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call or email service integration here
  };

  return (
    <div className="page-contact-us" id="contact-us">
      <div className="container">
        <div className="contact-us-form">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">contact form</h3>
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              Turn your office into a growth engine — <br />
              <span>not a cost center.</span>
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Unlock premium interiors without the upfront drain. One partner,
              one predictable lease, endless possibilities for growth. Let’s
              create your future workspace today.
            </p>
          </div>
          {/* Section Title End */}

          {/* Contact Form Start */}
          <div className="contact-form">
            <form
              onSubmit={handleSubmit}
              className="wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <div className="form-group col-md-6 mb-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group col-md-6 mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group col-md-12 mb-4">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group col-md-12 mb-5">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn-default">
                    submit
                  </button>
                  <div id="msgSubmit" className="h3 hidden"></div>
                </div>
              </div>
            </form>
          </div>
          {/* Contact Form End */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
