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
            {/* <label>メールアドレス</label> */}
            <input
              name="email"
              type="email"
              className="m-4 p-2 block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john@example.com"
              value={signInEmail}
              onChange={(event) => setSignInEmail(event.target.value)}
            />
          </div>
          <div>
            {/* <label>パスワード</label> */}
            <input
              name="password"
              type="password"
              className="m-4 p-2 block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="password（6文字以上）"
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
