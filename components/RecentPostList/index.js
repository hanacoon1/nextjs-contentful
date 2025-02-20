import Link from "next/link";
import ReactMarkdown from "react-markdown";
import RecentPostListStyles from "@styles/RecentPostList.module.css";
import ButtonStyles from "@styles/Button.module.css";
import ContentListStyles from "@styles/ContentList.module.css";
import { Config } from "@utils/Config";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";

export default function RecentPostList(props) {
  const { posts } = props;
  return (
    <>
      <h2 className={RecentPostListStyles.recentPostList__header}>
        Work
      </h2>
      <ol className={ContentListStyles.contentList}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <article className={ContentListStyles.contentList__post}>
              <Link href={`/blog/${post.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {post.title}
                  </h2>
                </a>
              </Link>
              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  children={post.excerpt}
                  renderers={ReactMarkdownRenderers(post.excerpt)}
                />
              </div>
            </article>
          </li>
        ))}
      </ol>
      <Link href={Config.pageMeta.blogIndex.slug}>
        <a className={ButtonStyles.button}>See more articles</a>
      </Link>
    </>
  );
}
