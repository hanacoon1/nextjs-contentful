import Image from "next/image";
import RichTextPageContentStyles from "@styles/RichTextPageContent.module.css";
import TypographyStyles from "@styles/Typography.module.css";
import RichTextPageContent from "@components/RichTextPageContent";
import Details from "@components/Post/Details";

export default function Post(props) {
  const { post } = props;

  return (
    <article className={RichTextPageContentStyles.page}>
      <h1 className={TypographyStyles.heading__h1}>{post.title}</h1>
      <h2 className={TypographyStyles.heading__h2}>{post.category}</h2>
      <p> {post.excerpt}</p>
      <Image
        src={post.headerImage.url}
        alt={post.headerImage.description}
        height={post.headerImage.height}
        width={post.headerImage.width}
      />
      <Details
        timeline={post.timeline}
        tools={post.tools}
        teammates={post.teammates}
      />
      <RichTextPageContent richTextBodyField={post.body} renderH2Links={true} />
    </article>
  );
}
