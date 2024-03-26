import React from "react";
import { useState } from "react";
import contactusimg from "../assets/Images/Contactus.png";

export default function ContactUs(props) {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  

  function handelInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handelSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  return (
    <>
      <div className="bg-yellow-400">
        <div className="parent-contact">
          <div className="child1-contact">
            <h1 className="leading-normal font-bold text-4xl my-4 text-black">
              Request A <sapn className="text-white"> Call Back</sapn>
            </h1>
            <form onClick={handelSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm text-black text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Name"
                  onChange={(event) =>
                    handelInputChange("name", event.target.value)
                  }
                  value={enteredValues.name}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="block p-2 w-full text-sm text-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Email"
                  onChange={(event) =>
                    handelInputChange("email", event.target.value)
                  }
                  value={enteredValues.email}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  className="block p-2 w-full text-sm text-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="phone"
                  onChange={(event) =>
                    handelInputChange("phone", event.target.value)
                  }
                  value={enteredValues.phone}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2 w-full text-sm text-black focus:ring-primary-500 focus:border-primary-500   dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Message"
                  onChange={(event) =>
                    handelInputChange("message", event.target.value)
                  }
                  value={enteredValues.message}
                ></textarea>
              </div>
              <button className="block p-2 w-1/5 text-sm bg-white text-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                Send
              </button>
            </form>
          </div>

          <div className="child2-contact">
            <img src={contactusimg} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
