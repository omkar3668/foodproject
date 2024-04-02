import React , {useState}from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import foodLogo from "../assets/Images/Aboutpageimg.png";

export default function Login(props) {

    const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  console.log(inpval);

  const getdata = (e) => {
    //    console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    
    const getuserArr = localStorage.getItem("omkarsable");
    //   console.log(getuserArr);

    const {email , password } = inpval;
    
    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enterd valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length should be greater than five");
    } else {
         if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((el,k)=>{
                return el.email === email && el.password === password
            });
            if (userlogin.length === 0){
                alert("Invalid details")
            } else {
                console.log("user login successfully");
                localStorage.setItem("user_login", JSON.stringify(userlogin))
                history("/contactus")
            }
         }
    }
  };

  return (
    <>
      <section className="flex flex-col items-center pt-9 pb-9 bg-stone-900">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-yellow-400 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log In into your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={getdata}
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={getdata}
                  required=""
                />
              </div>
              <button
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={addData}
              >
                Login
              </button>
              <p className="text-sm font-light dark:text-white">
                don't have an account have an account?{" "}
                <NavLink
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  to="/register"
                >
                  Register here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
