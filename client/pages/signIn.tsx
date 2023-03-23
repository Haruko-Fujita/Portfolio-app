import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import Layout from "@/components/Layout";
import ButtonBlue from "@/components/ButtonBlue";
import InputSignForm from "@/components/InputSignForm";

const SignIn = () => {
  const [hydrated, setHydrated] = useState(false);
  const [signInEmail, setLoginEmail] = useState("");
  const [signInPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState();

  // ログイン認証
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); // 認証中のブラウザのリロードを防止

    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword).then(
        setUser(true)
      ); //サインインok //review 認証されたuserをsetする??
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(
        `メールアドレスまたはパスワードが間違っています。${errorCode}: ${errorMessage}`
      );
    }
  };

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null;

  return (
    <>
      {/* ログインしている場合、リンク表示
        <div>{MyPage()}</div>にするとエラー(SSRでprops取得できず) */}
      {user ? (
        <a href="/MyPage">go to myPage</a>
      ) : (
        <Layout>
            <form onSubmit={handleSubmit}>
              <div>
                <label>メールアドレス</label>
                <input
                  name="email"
                  type="email"
                  value={signInEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                />
              </div>
              <div>
                <label>パスワード</label>
                <input
                  name="password"
                  type="password"
                  value={signInPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
              <ButtonBlue>ログイン</ButtonBlue>
              <InputSignForm></InputSignForm>
            </form>
        </Layout>
      )}
    </>
  );
};

export default SignIn;
