import Link from 'next/link';
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // ユーザ登録
  const handleSubmit = async (event) => {
    event.preventDefault(); // 登録中のブラウザリロードを防止

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      .then(alert(`${registerEmail}を登録しました。homeに戻ってログインしてください。`));
    } catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}: ${errorMessage}`);
    }
  };

  return (
    <>
      <h1>ユーザー新規登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={registerEmail}
            onChange={(event) => setRegisterEmail(event.target.value)}
          />
        </div>
        <div>
          <label>パスワード（6文字以上）</label>
          <input
            name="password"
            type="password"
            value={registerPassword}
            onChange={(event) => setRegisterPassword(event.target.value)}
          />
        </div>
        <button>登録する</button>
      </form>

      <p></p>
      <a href="/login">ログインはこちら</a>

      <p></p>
      <a href="/">back to home</a>
    </>
  );
};

export default Register;