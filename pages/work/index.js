import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";

export default function Work(props) {

  const {
    postSummaries,
    currentPage,
    totalPages,
    pageContent,
    preview,
  } = props;
 
  return (
    <MainLayout preview={preview}>
    {/*   <PageMeta
        title={pageTitle}
        description={pageDescription}
        url={Config.pageMeta.blogIndex.url}
      />
 */}
      <ContentWrapper>
        This is some work
      </ContentWrapper>
    </MainLayout>
  );
}