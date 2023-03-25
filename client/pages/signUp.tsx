import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import ButtonBlue from "@/components/ButtonBlue";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [message, setMessage] = useState("");

  // ユーザ登録
  const handleSubmit = async (event) => {
    event.preventDefault(); // 登録中のブラウザリロードを防止

    try {
      await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      ).then((res) => {
        console.log(res);
        if (res.user.accessToken !== null) {
          router.push("/");
        }
      });
    } catch (error) {
      setMessage("※※ 入力内容を確認して下さい ※※");
      return;
    }
  };

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null;

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="text-blue-900">{message}</div>
            <input
              name="email"
              type="email"
              className="m-4 p-2 block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john@example.com"
              value={signUpEmail}
              onChange={(event) => setSignUpEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              className="m-4 p-2 block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="password（6文字以上）"
              value={signUpPassword}
              onChange={(event) => setSignUpPassword(event.target.value)}
            />
          </div>
          <ButtonBlue>
            <button>ユーザ登録</button>
          </ButtonBlue>
        </form>
      </Layout>
    </>
  );
};

export default SignUp;
