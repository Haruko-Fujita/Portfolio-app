import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState();

  // ログイン認証
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); // 認証中のブラウザのリロードを防止

    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      .then(setUser(true)) //サインインok //review 認証されたuserをsetする??
    } catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`メールアドレスまたはパスワードが間違っています。${errorCode}: ${errorMessage}`);
    }
  };

  return (
    <>
      {/* ログインしている場合、リンク表示
      <div>{MyPage()}</div>にするとエラー(SSRでprops取得できず) */}
      {user ? (
        <a href= "/MyPage" >go to myPage</a>
      ) : (

        <>
          <h1>ログインページ</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
              />
            </div>
            <button>ログイン</button>
          </form>

          <p></p>
          <a href="/register">ユーザー新規登録はこちら</a>

          <p></p>
          <a href="/">back to home</a>
        </>

      )}
    </>
  );
};

export default Login;