export interface LatestPostsProps {
  title: string;
  linkText: string;
  pagePath: string;
  posts: { title: string; description: string; key: string }[];
}
