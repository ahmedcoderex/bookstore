import React, { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { authUserContext } from "../contexts/AuthUserContext";

function Login() {
  const { login } = useContext(authUserContext);
  const emailRef = useRef(null);
  const [showPass, setShowPass] = useState(false);

  const [dataAuth, setDataAuth] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setDataAuth({
      ...dataAuth,
      [name]: value,
    });
  };

  const handleSendDataToSupabase = (e) => {
    e.preventDefault();
    login(dataAuth.email, dataAuth.password);
  };

  useEffect(() => {
    emailRef?.current.focus();
  }, []);
  return (
    <section>
      <div className="container min-h-screen flex justify-center items-center">
        <div className="p-5 rounded-md w-full max-w-200 ">
          {/* head */}
          <div className="text-center mb-8">
            <h3 className="text-2xl bg-(--secondary-bg) rounded-2xl py-2 mb-2">
              تسجيل الدخول
            </h3>
            <h5 className="text-lg">مرحبا بك مره اخري</h5>
          </div>
          {/*=== head ===*/}

          {/* form */}
          <form
            onSubmit={(e) => handleSendDataToSupabase(e)}
            className="flex flex-col gap-4 text-(--primary-color)"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="em" className="text-sm lg:text-lg">
                البريد الالكتروني
              </label>
              <div className="flex items-center text-lg lg:text-3xl border border-(--primary-color) rounded-xl px-4">
                <MdOutlineEmail />
                <input
                  ref={emailRef}
                  name="email"
                  type="text"
                  id="em"
                  placeholder="example@gmail.com"
                  className="outline-none border-none py-4 px-2 flex-1"
                  value={dataAuth.email}
                  onChange={(e) => handleFormData(e)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="ps" className="text-sm lg:text-lg">
                كلمه المرور
              </label>
              <div className="flex items-center text-lg lg:text-3xl gap-2  border border-(--primary-color) rounded-xl px-4">
                <RiLockPasswordLine />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="ps"
                  placeholder="******"
                  className="outline-none border-none py-4 px-2 flex-1"
                  value={dataAuth.password}
                  onChange={(e) => handleFormData(e)}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button className="py-4 px-2 text-xl lg:text-2xl bg-(--primary-color) text-gray-200 font-semibold hover:font-bold transition-all duration-300 rounded-2xl hover:scale-98">
              الدخول
            </button>
          </form>
          {/*=== form ===*/}
        </div>
      </div>
    </section>
  );
}

export default Login;
