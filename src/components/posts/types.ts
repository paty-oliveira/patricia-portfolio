export interface PostsProps {
  posts: Map<
    string,
    {
      title: string;
      description: string;
      link: string;
      publishedTimestamp: number;
    }[]
  >;
}
