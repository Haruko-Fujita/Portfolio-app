import "tailwindcss/tailwind.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import axios from "axios";
import Upload from "./uploadImg";
import NotFound from "./NotFound";
import ButtonBlue from "@/components/ButtonBlue";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import ListRow from "@/components/ListRow";
import { DailyTime } from "aws-sdk/clients/fsx";

interface Work {
  id: number;
  title: string;
  link: string;
  image: string;
  user: { name: string };
  skill: { language: string; framework: string };
  createdAt: DailyTime;
}

// works取得API呼び出し
const getWorks = async () => {
  return await axios
    .get(process.env.NEXT_PUBLIC_ENDPOINT)
    .then((res) => res.data);
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
              <Layout>
                <div>
                  {worksData.map((work: Work, index: number) => {
                    return (
                      <div key={index}>
                        <div>{work.user.name} さんのマイページ</div>
                        <table>
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                              <tr>
                                <Title>画像</Title>
                                <Title>作品タイトル</Title>
                                <Title>言語/フレームワーク</Title>
                                <Title>作成日</Title>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ListRow>
                                  {/* <img src="work.image" /> */}
                                  <img
                                    src="https://bc-w6-portfolio.s3.ap-northeast-1.amazonaws.com/bc-w6.png"
                                    width="100px"
                                  />
                                </ListRow>
                                <ListRow>
                                  <p>{work.title}</p>
                                  <p>
                                    <a href={work.link} target="_blank">
                                      {work.link}
                                    </a>
                                  </p>
                                </ListRow>
                                <ListRow>
                                  <p>{work.skill.language}</p>
                                  <p>{work.skill.framework}</p>
                                </ListRow>
                                <ListRow>{work.createdAt}</ListRow>
                              </tr>
                            </tbody>
                          </table>
                        </table>
                      </div>
                    );
                  })}
                </div>
                <div>{Upload()}</div>
                <ButtonBlue>
                  <div onClick={logout}>ログアウト</div>
                </ButtonBlue>
              </Layout>
            </>
          )}
        </>
      )}
    </>
  );
};

export default MyPage;
