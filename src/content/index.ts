export const cms = {
  header: {
    content: "Patrícia Oliveira",
  },
  footer: {
    content: "Patrícia Oliveira",
  },
  homepage: {
    introduction: {
      title: "Hi, I'm Patrícia",
      photoPath: "/my-photo.jpeg",
      content: [
        `I am a Data Engineer with 5 years of experience, specializing in building reliable and scalable data solutions driven by Test-Driven Development (TDD).`,
        `Currently, I work at Mindera, focusing on efficient data pipelines using modern tools like dbt and Snowflake.`,
        `Previously, as a Frontend Engineer, I built interfaces with React, React Native, TypeScript, and GraphQL.`,
        `I also mentor students in a Data Engineering course, teaching dbt and analytics engineering concepts.`,
        `From Portugal to the world, I am ready to contribute to impactful projects wherever they are.`,
      ],
    },
    latestPosts: {
      title: "Latest Posts",
      linkText: "See all posts",
      posts: [
        {
          title: "Bringing AI to your dbt models with Snowflake Cortex",
          description: "Boost automation and insights with AI-Powered SQL",
          link: "https://patriciiaoliveira.substack.com/p/bringing-ai-to-your-dbt-models-with",
          publishedTimestamp: 1749219809
        },
        {
          title: "Performing Fundamental Analysis of a Company using Python",
          description:
            "Automating Financial Analysis with Python: Tools and Techniques",
          link: "https://patriciiaoliveira.substack.com/p/python-for-fundamental-analysis",
          publishedTimestamp: 1727517600,
        },
      ],
    },
    jobExperience: {
      title: "Career Journey",
      linkText: "See all work",
      jobs: [
        {
          companyName: "EDIT. - Disruptive Digital Education",
          jobTitle: "Education Mentor",
          timePeriod: "December 2024 - Current",
          description: [
            `Currently mentoring students in analytics engineering, dbt, and the modern data stack, helping them build practical skills in data modeling, transformation, and pipeline development to excel in the field.`,
          ],
        },
        {
          companyName: "Mindera",
          jobTitle: "Data Engineer",
          timePeriod: "December 2024 - Current",
          description: [
            `Currently building a scalable data platform for Dunelm to unify and process data, enabling better decision-making.`,
          ],
        }
      ],
    },
    latestProjects: {
      title: "Latest Projects",
      linkText: "See all projects",
      projects: [
      {
          id: "ai-assistant-pt",
          title: "AI Assistant for Self Employers in Portugal",
          description: "A web app that helps self-employed people in Portugal get clear answers about Social Security, taxes, and labor rules."
      },
      {
          id: "sephora-reviews",
          title: "Sentiment Analysis of Sephora Customer's Reviews",
          description: "An ELT pipeline to analyze customer sentiment using Snowflake Cortex and dbt"
      },
        {
          id: "financial-dashboard",
          title: "Stock Analysis Dashboard",
          description:
            "A web app for exploring stocks with real-time data and interactive charts",
        },
      ],
    },
    contacts: {
      title: "Let's Connect",
      content:
        "If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.",
      links: [
        {
          name: "twitter-x",
          link: "https://x.com/AnaPatrciaOliv5",
        },
        {
          name: "github",
          link: "https://github.com/paty-oliveira",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/ana-patr%C3%ADcia-oliveira/",
        },
        {
          name: "email",
          link: "dev.patricia.oliveira@gmail.com",
        },
      ],
    },
  },
  blogPage: {
    title: "Blog",
    posts: [
      {
        title: "Bringing AI to your dbt models with Snowflake Cortex",
        description: "Boost automation and insights with AI-Powered SQL",
        link:  "https://patriciiaoliveira.substack.com/p/bringing-ai-to-your-dbt-models-with",
        publishedTimestamp: 1749219809
      },
      {
        title: "Performing Fundamental Analysis of a Company using Python",
        description:
          "Automating Financial Analysis with Python: Tools and Techniques",
        link: "https://patriciiaoliveira.substack.com/p/python-for-fundamental-analysis",
        publishedTimestamp: 1727517600,
      },
    ],
  },
  workPage: {
    title: "Work",
    jobs: [
      {
        companyName: "EDIT. - Disruptive Digital Education",
        jobTitle: "Education Mentor",
        timePeriod: "December 2024 - Current",
        description: [
          `Mentoring students in analytics engineering, dbt, and the modern data stack, providing hands-on learning experiences to help them build practical skills in data modeling, transformation, and pipeline development.`,
          `SQL, dbt, BigQuery, PostgreSQL, and Github.`,
        ],
      },
      {
        companyName: "Mindera",
        jobTitle: "Data Engineer",
        timePeriod: "December 2024 - Current",
        description: [
          `Currently building a scalable data platform for Dunelm to unify and process data, enabling better decision-making.`,
          `SQL, Python, Terraform, dbt, Snowflake, AWS, and GitHub.`,
        ],
      },
      {
        companyName: "Mindera",
        jobTitle: "Frontend Engineer",
        timePeriod: "June 2023 - November 2024",
        description: [
          `Contributed to the rebranding of core features for FanDuel Racing's desktop and mobile products, ensuring a modern and consistent user experience across platforms.`,
          `- Collaborated on the development of scalable front-end solutions, enhancing the platform's usability and visual appeal.`,
          `- Supported the creation and management of reusable components and content structures to streamline development workflows.`,
          `React, React Native, NextJS, Typescript, Javascript, GraphQL, Styled Components, Storybook, Storyblok, and GitHub.`,
        ],
      },
      {
        companyName: "Mindera",
        jobTitle: "Data Engineer",
        timePeriod: "September 2021 - May 2023",
        description: [
          `Contributed to the development of an ELT pipeline that unified Dunelm's operational and sales data, enabling data-driven decision-making and shaping the company's business strategies.`,
          `- Assisted in building a Data Lake to centralize all operational and sales data.`,
          `- Promoted Data Warehouse modeling using Kimball's methodologies to enhance analytical capabilities.`,
          `- Conducted exploratory data analysis to understand business processes and translate them into well-structured data models.`,
          `- Advocated for a design-quality mindset by introducing Test-Driven Development (TDD) techniques for data model development.`,
          `- Played a key role in implementing continuous integration/continuous deployment (CI/CD) pipelines to ensure a high-quality, reliable data system.`,
          `SQL, Python, Bash, dbt, Snowflake, AWS, Terraform, and GitLab.`,
        ],
      },
      {
        companyName: "Critical TechWorks",
        jobTitle: "Data Engineer",
        timePeriod: "April 2020 - September 2021",
        description: [
          `Contributed to the development of a robust ETL pipeline to unify data across BMW's systems, enabling data-driven decision-making and empowering the organization to adopt a data-centric approach.`,
          `- Played a key role in building and maintaining the infrastructure for scalable and efficient data pipelines.`,
          `- Ensured high-quality data models through rigorous testing and optimization practices.`,
          `SQL, Python, Terraform, Apache Spark/PySpark, AWS, and Bitbucket.`,
        ],
      },
    ],
  },
  projectsPage: {
    title: "Projects",
    projects: [
      {
        id: "ai-assistant-pt",
        title: "AI Assistant for Self Employers in Portugal",
        description: "A web app that helps self-employed people in Portugal get clear answers about Social Security, taxes, and labor rules.",
        publicationData: "Sep 10, 2025",
        repoLink: "https://github.com/paty-oliveira/ai-assistant-self-employers-pt",
        demoLink: "https://assistant-self-employeer-pt.onrender.com/",
        repoOwner: "paty-oliveira",
        repoName: "ai-assistant-self-employers-pt",
      },
      {
        id: "sephora-reviews",
        title: "Sentiment Analysis of Sephora Customer's Reviews",
        description: "An ELT pipeline to analyze customer sentiment using Snowflake Cortex and dbt",
        publicationData: "Jun 6, 2025",
        repoLink: "https://github.com/paty-oliveira/snowflake-sephora-analytics",
        repoOwner: "paty-oliveira",
        repoName: "snowflake-sephora-analytics"
      },
      {
        id: "financial-dashboard",
        title: "Stock Analysis Dashboard",
        description:
          "A web app for exploring stocks with real-time data and interactive charts",
        publicationDate: "Oct 1, 2024",
        repoLink: "https://github.com/paty-oliveira/financial-dash",
        demoLink: "https://stock-dash.streamlit.app/",
        repoOwner: "paty-oliveira",
        repoName: "financial-dash",
      },
    ],
  },
};
