import PostService from "@src/common/services/post.service";
import { Post } from "@src/common/types/post.type";
import { P } from "@src/components/common/atoms";

export type PostDetailProps = {
  post: Post;
};

function PostDetail({ post }: PostDetailProps) {
  if (!post) {
    return null;
  }

  const {
    id,
    content: {
      meta: { title, date },
      markdown,
    },
  } = post;

  return (
    <>
      <P>{id}</P>
      <br />
      <P size="large">
        {title}
        <P size="small">({date})</P>
      </P>
      <br />
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </>
  );
}

export default PostDetail;

export async function getStaticPaths() {
  const paths = await PostService.getPostSlugList();
  return {
    paths: paths.map(({ id }) => ({
      params: { id: id.split("/") },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string[] } }) {
  const post: Post = await PostService.getPost(context.params.id.join("/"));
  return {
    props: {
      post,
    },
  };
}
