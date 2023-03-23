import "tailwindcss/tailwind.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import axios from "axios";
import Upload from "./uploadImg";
import NotFound from "./NotFound";
import ButtonBlue from "@/components/ButtonBlue";

const ENDPOINT = "http://localhost:5000/works/";

// works取得API呼び出し
const getWorks = async () => {
  return await axios.get(ENDPOINT).then((res) => res.data);
};

// 読み込み時にAPIからuser/worksデータを取得
export async function getServerSideProps() {
  const worksData = await getWorks();
  return {
    props: { worksData },
  };
}

const MyPage = ({ worksData }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // ログイン状態の判定
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
    <div>{NotFound()}</div>;
  };

  return (
    <>
      {/* loading中（false） */}
      {!loading && (
        <>
          {/* ログインしていない場合、404表示 */}
          {!user ? (
            <>
              <div>{NotFound()}</div>
            </>
          ) : (
            <>
              {/* ログイン時にuserを表示、三項演算子(= user && user.email) */}
              <p>ログインユーザー：{user?.email}</p>
              <h1>マイページ</h1>
              <div>
                {worksData.map(
                  (
                    work: {
                      id: number;
                      title: string;
                      link: string;
                      image: string;
                      user: { name: string };
                      skill: { language: string; framework: string };
                    },
                    index: number
                  ) => {
                    return (
                      <div key={index}>
                        <ol>
                          <li>タイトル_{work.title}</li>
                          <li>ユーザ_{work.user.name}</li>
                          <li>作成日_{work.createdAt}</li>
                          <li>言語_{work.skill.language}</li>
                          <li>フレームワーク_{work.skill.framework}</li>
                          <li>
                            <a href={work.link} target="_blank">
                              {work.link}
                            </a>
                          </li>
                          <img src="work.image" />
                        </ol>
                      </div>
                    );
                  }
                )}
              </div>

              <div>{Upload()}</div>
              <p></p>
              <button onClick={logout}>ログアウト</button>
              <ButtonBlue>test</ButtonBlue>
              <p></p>
              <Link href="/">back to home</Link>
              <p></p>
              <img
                src="https://bc-w6-portfolio.s3.ap-northeast-1.amazonaws.com/bc-w6.png"
                width="10%"
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default MyPage;
