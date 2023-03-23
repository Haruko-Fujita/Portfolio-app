import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import ButtonBlue from "@/components/ButtonBlue";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const SignUp = () => {
  const [hydrated, setHydrated] = useState(false);
  const [signUpEmail, setRegisterEmail] = useState("");
  const [signUpPassword, setRegisterPassword] = useState("");

  // ユーザ登録
  const handleSubmit = async (event) => {
    event.preventDefault(); // 登録中のブラウザリロードを防止

    try {
      await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      ).then(
        alert(
          `${signUpEmail}を登録しました。homeに戻ってログインしてください。`
        )
      );
    } catch (error) {
      console.error(error);
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
            <label>メールアドレス</label>
            <input
              name="email"
              type="email"
              value={signUpEmail}
              onChange={(event) => setRegisterEmail(event.target.value)}
            />
          </div>
          <div>
            <label>パスワード（6文字以上）</label>
            <input
              name="password"
              type="password"
              value={signUpPassword}
              onChange={(event) => setRegisterPassword(event.target.value)}
            />
          </div>
          <ButtonBlue>ユーザ登録</ButtonBlue>
        </form>
      </Layout>
    </>
  );
};

export default SignUp;
