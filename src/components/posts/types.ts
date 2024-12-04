export interface PostsProps {
  posts: Record<
    string,
    {
      title: string;
      description: string;
      link: string;
      publishedTimestamp: number;
    }[]
  >;
}
