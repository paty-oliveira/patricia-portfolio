export interface PostsProps {
  posts: {
    title: string;
    description: string;
    link: string;
    publishedTimestamp: number;
  }[];
}
