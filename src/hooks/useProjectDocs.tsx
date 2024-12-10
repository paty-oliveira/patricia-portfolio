import axios from "axios";
import { useEffect, useState } from "react";

export const useProjectDocs = (repoOwner: string, repoName: string) => {
  const [projectDocs, setProjectDocs] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectDocs = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        const decodedContent = atob(response.data.content);
        setProjectDocs(decodedContent);
      } catch (error) {
        setError(
          `Failed to fetch README file from ${repoName} repository - ${error}`
        );
      }
    };

    fetchProjectDocs();
  }, [repoOwner, repoName]);

  return {
    projectDocs,
    error,
  };
};
