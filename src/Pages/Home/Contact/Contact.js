import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import Fade from "react-reveal/Fade";
const Contact = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div id="contact-section">
        <div className="container">
        <Fade bottom duration={2000} distance="40px">
        <div className="section-title text-center mb-5">
            <h5 className="sort-title">GET IN TOUCH </h5>
            <h2 className="second-title">Ready to Get Started?</h2>
            
          </div>
          <div className="row">
            
            <div className="col-md-12">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-3 border w-100 mx-auto bg-light"
              >
                <input
                  type="text"
                  className="form-control mb-2"
                  {...register("name")}
                  placeholder="Your Name"
                />

                <input
                  type="text"
                  className="form-control mb-2"
                  {...register("email")}
                  placeholder="Your Email"
                />

                <input
                  type="text"
                  className="form-control mb-2"
                  {...register("phone", { required: true })}
                  placeholder="Price"
                />
                <textarea
                  type="text"
                  className="form-control mb-2"
                  {...register("description", { required: true })}
                  placeholder="description"
                />


                <input
                  value="Contact"
                  className="btn btn-info"
                  type="submit"
                />
              </form>
            </div>
          </div>


         </Fade> 
        </div>
      </div>
    </>
  );
};

export default Contact;


