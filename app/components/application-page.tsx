export type ApplicationPageData = {
  person: {
    name: string;
    descriptor: string;
    links: { label: string; href: string; external?: boolean; printOnly?: boolean }[];
  };
  company: string;
  role: string;
  location: string;
  introduction: string;
  metadata: { label: string; value: string }[];
  sectionLabels: {
    profile: string;
    experience: string;
    skills: string;
    education: string;
    coverLetter: string;
  };
  profile: string[];
  experience: {
    company: string;
    role: string;
    dates: string;
    location: string;
    description?: string;
    responsibilities: string[];
    projects?: string[];
  }[];
  skills: { title: string; skills: string[] }[];
  education: { institution: string; qualification: string; dates: string }[];
  coverLetter: { greeting: string; paragraphs: string[]; closing: string };
};

function ContactLinks({ data }: { data: ApplicationPageData }) {
  return (
    <nav className="application-links" aria-label="Contact links">
      {data.person.links.map((link) => (
        <a key={link.label} className={link.printOnly ? "application-link--print-only" : undefined} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label}</a>
      ))}
    </nav>
  );
}

function ApplicationHeader({ data }: { data: ApplicationPageData }) {
  return (
    <header className="application-header">
      <a className="application-identity" href="https://jinjoomoon.com" aria-label={`${data.person.name}, ${data.person.descriptor}`}>
        <h1>{data.person.name}</h1>
        <span>{data.person.descriptor}</span>
      </a>
      <div className="application-header__aside">
        <ContactLinks data={data} />
        <ApplicationIntro data={data} />
      </div>
    </header>
  );
}

function ApplicationIntro({ data }: { data: ApplicationPageData }) {
  return (
    <section className="application-intro" aria-label="Designer positioning">
      <div className="application-intro__summary">
        <p className="application-intro__positioning">{data.introduction}</p>
        <p className="application-location">{data.location}</p>
        <dl className="application-metadata">
          {data.metadata.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHeading({ number, id, children }: { number: string; id: string; children: string }) {
  return (
    <h2 className="application-section-label" id={id}>
      <span className="application-section-number">{number} /</span>
      <span>{children}</span>
    </h2>
  );
}

function ProfileSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className="application-section" aria-labelledby="profile-heading">
      <SectionHeading number="01" id="profile-heading">{data.sectionLabels.profile}</SectionHeading>
      <div className="application-prose">{data.profile.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>
  );
}

function ExperienceSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className="application-section application-experience-section" aria-labelledby="experience-heading">
      <SectionHeading number="02" id="experience-heading">{data.sectionLabels.experience}</SectionHeading>
      <div className="application-experience-list">
        {data.experience.map((experience) => (
          <article className="application-experience" key={`${experience.company}-${experience.role}`}>
            <div className="application-experience__meta">
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
              <p className="application-muted">{experience.dates}</p>
              <p className="application-muted">{experience.location}</p>
            </div>
            <div className="application-experience__body">
              {experience.description ? <p>{experience.description}</p> : null}
              <ul>{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
              {experience.projects ? (
                <div className="application-projects">
                  <strong>Selected projects</strong>
                  <ul>{experience.projects.map((project) => <li key={project}>{project}</li>)}</ul>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className="application-section" aria-labelledby="skills-heading">
      <SectionHeading number="03" id="skills-heading">{data.sectionLabels.skills}</SectionHeading>
      <div className="application-skills-grid">
        {data.skills.map((group, index) => {
          const headingId = `skill-group-${index + 1}`;
          return (
            <section className="application-skill-group" key={group.title} aria-labelledby={headingId}>
              <h3 id={headingId}>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}

function EducationSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className="application-section application-section--compact" aria-labelledby="education-heading">
      <SectionHeading number="04" id="education-heading">{data.sectionLabels.education}</SectionHeading>
      <div className="application-education-list">
        {data.education.map((item) => (
          <article key={item.institution}>
            <h3>{item.institution}</h3>
            <p>{item.qualification}</p>
            <p className="application-muted">{item.dates}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CoverLetterSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className="application-section application-cover-letter" aria-labelledby="cover-letter-heading">
      <SectionHeading number="05" id="cover-letter-heading">{data.sectionLabels.coverLetter}</SectionHeading>
      <div className="application-letter">
        <p>{data.coverLetter.greeting}</p>
        {data.coverLetter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="application-signoff">{data.coverLetter.closing}<br /><span>{data.person.name}</span></p>
      </div>
    </section>
  );
}

function ApplicationFooter({ data }: { data: ApplicationPageData }) {
  return (
    <footer className="application-footer">
      <div className="application-identity">
        <strong>{data.person.name.toUpperCase()}</strong>
        <span>{data.person.descriptor}</span>
      </div>
      <ContactLinks data={data} />
    </footer>
  );
}

export function ApplicationPage({ data }: { data: ApplicationPageData }) {
  return (
    <>
      <main className="application-page">
        <div className="application-sheet">
          <ApplicationHeader data={data} />
          <ProfileSection data={data} />
          <ExperienceSection data={data} />
          <SkillsSection data={data} />
          <EducationSection data={data} />
          <CoverLetterSection data={data} />
          <ApplicationFooter data={data} />
        </div>
      </main>
      <main className="application-mobile" aria-labelledby="mobile-notice">
        <div>
          <h1 id="mobile-notice">The cover letter and resume are available on desktop or larger screens only.</h1>
        </div>
      </main>
    </>
  );
}