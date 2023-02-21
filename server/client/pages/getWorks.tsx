import axios from "axios";

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

const Works = ({ worksData }) => {
  return (
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
          index: number //Key型の方がよい?
        ) => {
          return (
            <div key={index}>
              <ol>
                <li>作品ID{work.id}</li>
                <li>作成日{work.createdAt}</li> {/* SQL daytime型のTS型定義が不明 */}
                <li>タイトル{work.title}</li>
                <li>リンク{work.link}</li>
                <li>画像{work.image}</li>
                <li>ユーザ{work.user.name}</li>
                <li>言語{work.skill.language}</li>
                <li>フレームワーク{work.skill.framework}</li>
              </ol>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Works;
