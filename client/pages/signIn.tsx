import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import Layout from "@/components/Layout";
import ButtonBlue from "@/components/ButtonBlue";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // ログイン認証
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); // 認証中のブラウザのリロードを防止

    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword).then(
        (res) => {
          if (res.user.accessToken !== null) {
            router.push("/MyPage");
          }
        }
      );
    } catch (error) {
      router.reload();
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
              value={signInEmail}
              onChange={(event) => setSignInEmail(event.target.value)}
            />
          </div>
          <div>
            <label>パスワード</label>
            <input
              name="password"
              type="password"
              value={signInPassword}
              onChange={(event) => setSignInPassword(event.target.value)}
            />
          </div>
          <ButtonBlue>
            <button>ログイン</button>
          </ButtonBlue>
        </form>
      </Layout>
    </>
  );
};

export default SignIn;
