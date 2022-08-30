import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <Head>
        <title>Daniel's Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-20">
            <p>Sign in Section</p>
          </div>
          <div className="w-2/5 p-20 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl6">
            <p>Sign up Section</p>
          </div>
        </div>
      </main>
    </div>
    // <Layout home>
    // 		<Head>
    // 			<title>{siteTitle}</title>
    // 		</Head>
    // 		<section className={utilStyles.headingMd}>
    // 			<p>
    // 				I'm an asipring developer and an
    // 				entrepreneur who wants to make a great
    // 				product with meaningful impact on the
    // 				world 🌳
    // 			</p>
    // 			<p>
    // 				Hello!
    // 			</p>
    // 		</section>
    // 		<section
    // 			className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
    // 		>
    // 			<h2 className={utilStyles.headingLog}>Blog</h2>
    // 			<ul className={utilStyles.list}>
    // 				{allPostsData.map(
    // 					({ id, date, title }) => (
    // 						<li
    // 							className={
    // 								utilStyles.listItem
    // 							}
    // 							key={id}
    // 						>
    // 							{title}
    // 							<br />
    // 							{id}
    // 							<br />
    // 							{date}
    // 						</li>
    // 					)
    // 				)}
    // 			</ul>
    // 		</section>
    // 	</Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
