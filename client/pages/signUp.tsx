import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import ButtonBlue from "@/components/ButtonBlue";
import Link from "next/link";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const SignUp = () => {
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
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}: ${errorMessage}`);
    }
  };

  return (
    <>
      <Layout>
        <h1>ユーザー新規登録</h1>
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
          <ButtonBlue>登録する</ButtonBlue>
        </form>
      </Layout>
    </>
  );
};

export default SignUp;
