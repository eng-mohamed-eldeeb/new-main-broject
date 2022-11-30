import { useRef, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useRouter } from 'next/router';
const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const rapRef = useRef();
  const popRef = useRef();
  const softPopRef = useRef();

  const router = useRouter()

  let url;

  const signUpHandler = (event) => {
    
    router.push('/signup')
  };
  const loginHandler = (e) => {
    e.preventDefault();
    let enteredEmail = emailInputRef.current.value;
    let enteredPassword = passwordInputRef.current.value;
    router.push('/login')
    router.push('/')
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUlP9TpmOJgFitakf-PV6yHLAZsHV7wKw', {
      method:'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      })
  }).then(res => {
    return res.json()
  }).then(data => {
    console.log(data)
  })
  }
  return (
    <main className="w-screen h-screen flex justify-center text-xl items-center bg-gre">
      <div className="w-11/12 h-5/6 rounded-3xl border-2 overflow-auto flex justify-center items-center border-black">
        <form className=" w-11/12 h-5/6 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col sm:flex-row sm:gap-4 justify-between">
            <div className="flex flex-col w-full">
              <label htmlFor="e-mail" className="">
                mail
              </label>
              <input
                type="email"
                ref={emailInputRef}
                className="p-4 mt-1 rounded-xl border-2 border-gray-500"
              />
            </div>
            <div className="flex flex-col w-full sm:mt-0 mt-12">
              <label htmlFor="password" className="">
                password
              </label>
              <input
                type="password"
                ref={passwordInputRef}
                className="p-4 mt-1 rounded-xl border-2  border-gray-500"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={signUpHandler}
              className="p-5 text-white mt-4 border border-blue-600 rounded-xl bg-blue-700 hover:text-blue-600 hover:bg-white"
            >
              Sign up
            </button>
            <button
              onClick={loginHandler}
              className="p-5 text-white mt-4 border border-blue-600 rounded-xl bg-blue-700 hover:text-blue-600 hover:bg-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Index;
