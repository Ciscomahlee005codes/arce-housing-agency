import React, { useState } from "react";
import "./FindMySpace.css";

const FindMySpace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Home",
    state: "",
    location: "",
    budget: "",
    notes: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setStep(1); // reset steps when modal closes
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
    alert("Your request has been submitted. Our agent will reach out soon! 🚀");
    setIsOpen(false);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "Home",
      state: "",
      location: "",
      budget: "",
      notes: "",
    });
  };

  return (
    <>
      {/* Informative Text + Button */}
      <div className="find-space-section">
        <p className="find-space-text">
          Can’t find the exact <strong>home, lodge, hostel, or shared apartment</strong> you’re
          looking for? Don’t worry — click the button below to let us know your
          preferences, and our agents will help you find the perfect space. 🏡
        </p>
        <button className="find-space-btn" onClick={toggleModal}>
          Find My Space
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent close on inside click
          >
            <h2>Find My Space 🏠</h2>
            <p className="modal-subtitle">
              Can’t find what you’re looking for? Tell us your needs and we’ll
              scout it for you!
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              {/* STEP 1 - Contact Info */}
              {step === 1 && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleNext}
                    className="next-btn"
                  >
                    Next ➡
                  </button>
                </>
              )}

              {/* STEP 2 - Property Preferences */}
              {step === 2 && (
                <>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Home">Home</option>
                    <option value="Lodge">Lodge</option>
                    <option value="Shared Apartment">Shared Apartment</option>
                    <option value="Hostel">Hostel</option>
                  </select>
                  <input
                    type="text"
                    name="state"
                    placeholder="Preferred State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Preferred Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                  <div className="step-actions">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="prev-btn"
                    >
                      ⬅ Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="next-btn"
                    >
                      Next ➡
                    </button>
                  </div>
                </>
              )}

              {/* STEP 3 - Budget & Notes */}
              {step === 3 && (
                <>
                  <input
                    type="text"
                    name="budget"
                    placeholder="Your Budget (₦)"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="notes"
                    placeholder="Additional Notes (Optional)"
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                  <div className="step-actions">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="prev-btn"
                    >
                      ⬅ Back
                    </button>
                    <button type="submit" className="submit-btn">
                      Submit ✅
                    </button>
                  </div>
                </>
              )}
            </form>

            <button className="close-btn" onClick={toggleModal}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FindMySpace;
