export const groupPostsByYear = (
  posts: {
    title: string;
    description: string;
    link: string;
    publishedTimestamp: number;
  }[]
) => {
  const groupedByYear = posts.reduce(
    (acc, post) => {
      const year = new Date(post.publishedTimestamp * 1000)
        .getFullYear()
        .toString();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(post);

      return acc;
    },
    {} as Record<string, typeof posts>
  );

  return groupedByYear;
};
