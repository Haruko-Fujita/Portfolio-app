import "tailwindcss/tailwind.css";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import ButtonBlue from "@/components/ButtonBlue";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>portfolio</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main>
        <Layout>
          <ButtonBlue>
            <Link href="/MyPage">マイページ</Link>
          </ButtonBlue>
          <ButtonBlue>
            <Link href="/signIn">ログイン</Link>
          </ButtonBlue>
          <ButtonBlue>
            <Link href="/signUp">ユーザ登録</Link>
          </ButtonBlue>
        </Layout>
      </main>
    </div>
  );
}
