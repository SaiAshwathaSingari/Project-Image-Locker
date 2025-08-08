import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
    console.log(import.meta.env.VITE_API_URL);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#799EFF] to-[#FEFFC4] flex items-center justify-center p-4">
      <div className="flex w-full max-w-4xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex-1 relative overflow-hidden">
          <img className="w-full h-full object-cover" src="./images/login2.avif" alt="login" />
        </div>
        <div className="flex-1 p-8 space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c444e] text-center mb-8">Image Locker</h1>
          <h2 className="text-2xl font-semibold text-[#2c444e] text-center mb-6">Members Log in</h2>
          <input 
            type="text" 
            className="w-full px-4 py-3 border border-[#2c444e] rounded-lg focus:ring-2 focus:ring-[#FFDE63] focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm" 
            placeholder="Email" 
          />
          <input 
            type="password" 
            className="w-full px-4 py-3 border border-[#2c444e] rounded-lg focus:ring-2 focus:ring-[#FFDE63] focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm" 
            placeholder="Password" 
          />
          <button className="w-full py-3 px-6 bg-[#ffc801] hover:bg-[#FFBC4C] text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
            Log In
          </button>
          <p className="text-[#2c444e] text-center">or</p>
          <button 
            className="w-full py-3 px-6 bg-white hover:bg-[#FEFFC4] border border-gray-300 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center space-x-3" 
            onClick={googleAuth}
          >
            <img src="./images/google.png" alt="google icon" className="w-6 h-6" />
            <span className="text-[#2c444e] font-medium">Sign in with Google</span>
          </button>
          <p className="text-center text-[#2c444e]">
            New Here? <Link to="/signup" className="text-[#799EFF] hover:text-[#FFDE63] font-medium transition-colors duration-200">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
