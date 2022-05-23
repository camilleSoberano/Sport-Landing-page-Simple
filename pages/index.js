import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import sportNews from "../news.json";

//components
import Header from "../components/Header";
import News from "../components/News";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>All About Sports | 2022 </title>
        <meta name="description" content="olympics sports games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
      </div>
      <div>
        {sportNews &&
          sportNews.map((item) => {
            console.log(item);
            const { img, title, excerpt, newsInfo, id } = item;
            return (
              <div key={id}>
                <News
                  imageSrc={img}
                  title={title}
                  excerpt={excerpt}
                  author={newsInfo.author}
                  datePublished={newsInfo.datePublished}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
