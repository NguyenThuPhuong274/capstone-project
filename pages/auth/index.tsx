import axios from "axios";
import { useCallback, useState } from "react";
import Input from "@/components/input";
import { signIn } from 'next-auth/react';
import Navbar from "@/components/Navbar";

export default function Auth() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("Đăng nhập");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "Đăng nhập" ? "Đăng kí" : "Đăng nhập"
    );
  }, []);

//login  
  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/profiles'
      });

    } catch (error) {
      console.log(error)
    }
  }, [email, password]);


// register
  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login();
    } catch(error) {
      console.log(error)
    }
  }, [email, name, password]);

  return (
    <div className="relative h-full w-full bg-[url('/images/logo.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-white w-full h-full lg:bg-opacity-100">
        <nav className="px-12 py-5">
          <img
            src="/images/logo-tu-hoc-tieng-nhat.png"
            alt="Logo"
            className="h-20"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-50 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-mdw-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "Đăng nhập" ? "Đăng nhập" : "Đăng kí"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "Đăng kí" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'Đăng nhập' ? 'Đăng nhập' : 'Đăng kí'}
            </button>
            <p className="text-neutral-200 mt-12 text-center">
              {variant === 'Đăng nhập' ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline hover:text-yellow-300 cursor-pointer"
              >
                {variant === 'Đăng nhập' ? 'Tạo tài khoản' : 'Đăng nhập'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
