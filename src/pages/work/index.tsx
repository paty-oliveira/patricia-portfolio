import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/header";
import Job from "@/components/job";
import { cms } from "@/content";
import { seo } from "@/content/seo";

const Work: FC = () => {
  const { header, work } = cms;
  const { work: metadata } = seo;

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={metadata.content} />
      </Helmet>
      <Header content={header.content} />
      <section>
        <h3 className="section__header weight-600">{work.title}</h3>
        <div className="work__content">
          {work.jobs.map(
            ({ companyName, jobTitle, timePeriod, description }) => (
              <Job
                companyName={companyName}
                jobTitle={jobTitle}
                timePeriod={timePeriod}
                description={description}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Work;
