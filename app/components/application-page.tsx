import styles from "./application-page.module.css";

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

type DocumentKind = "resume" | "cover-letter";

function getLink(data: ApplicationPageData, label: string) {
  return data.person.links.find((link) => link.label === label);
}

function ContactDetails({ data }: { data: ApplicationPageData }) {
  const email = getLink(data, "Email");
  const portfolio = getLink(data, "Portfolio");
  const linkedIn = getLink(data, "LinkedIn");
  const printLinks = data.person.links.filter((link) => link.printOnly);
  const portfolioLabel = portfolio?.href.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? "jinjoomoon.com";

  return (
    <aside className={styles.contacts} aria-label="Contact details">
      {email ? (
        <div className={styles.contactItem}>
          <span>Email</span>
          <a href={email.href}>{email.href.replace(/^mailto:/, "")}</a>
        </div>
      ) : null}
      {portfolio ? (
        <div className={styles.contactItem}>
          <span>Portfolio</span>
          <a href={portfolio.href} target="_blank" rel="noreferrer">{portfolioLabel}</a>
        </div>
      ) : null}
      <div className={styles.contactItem}>
        <span>Based in</span>
        <span>{data.location.split(",")[0]}</span>
      </div>
      {linkedIn ? <a className={styles.linkedin} href={linkedIn.href} target="_blank" rel="noreferrer">LinkedIn</a> : null}
      {printLinks.length ? (
        <nav className={styles.printLinks} aria-label="Online portfolio links">
          {printLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </nav>
      ) : null}
    </aside>
  );
}

function ApplicationHeader({ data }: { data: ApplicationPageData }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLead}>
        <div className={styles.identity}>
          <h1>{data.person.name}</h1>
          <p>{data.person.descriptor}</p>
        </div>
        <p className={styles.positioning}>{data.introduction}</p>
      </div>
      <ContactDetails data={data} />
    </header>
  );
}

function ApplicationDivider() {
  return <img className={styles.divider} src="/images/application-divider.svg" alt="" width={960} height={2} />;
}

function ApplicationNavigation({ current }: { current: DocumentKind }) {
  return (
    <footer className={styles.footer}>
      <nav aria-label="Application documents">
        <a href="/apply/medibank/resume" aria-current={current === "resume" ? "page" : undefined}>Resume</a>
        <a href="/apply/medibank/cover-letter" aria-current={current === "cover-letter" ? "page" : undefined}>Cover Letter</a>
      </nav>
    </footer>
  );
}

function ApplicationDocument({ data, current, children, bottomDivider = false }: {
  data: ApplicationPageData;
  current: DocumentKind;
  children: React.ReactNode;
  bottomDivider?: boolean;
}) {
  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <ApplicationHeader data={data} />
        <ApplicationDivider />
        {children}
        {bottomDivider ? <ApplicationDivider /> : null}
        <ApplicationNavigation current={current} />
      </article>
    </main>
  );
}

function ProfileSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className={styles.profile} aria-labelledby="resume-profile-heading">
      <h2 className={styles.sectionHeading} id="resume-profile-heading">Profile</h2>
      <p>{data.profile.join(" ")}</p>
    </section>
  );
}

function ExperienceSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className={styles.experience} aria-labelledby="resume-experience-heading">
      <h2 className={styles.sectionHeading} id="resume-experience-heading">Experience</h2>
      <div className={styles.experienceList}>
        {data.experience.map((item) => (
          <article className={styles.experienceEntry} key={`${item.company}-${item.role}`}>
            <div className={styles.experienceMeta}>
              <h3>{item.company}</h3>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.date}>{item.dates}</p>
              <p>{item.location}</p>
            </div>
            {item.description ? <p className={styles.experienceDescription}>{item.description}</p> : null}
            <ul className={styles.responsibilities}>
              {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className={styles.skills} aria-labelledby="resume-skills-heading">
      <h2 className={styles.sectionHeading} id="resume-skills-heading">Skills</h2>
      <div className={styles.skillGroups}>
        {data.skills.map((group) => (
          <div className={styles.skillGroup} key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection({ data }: { data: ApplicationPageData }) {
  return (
    <section className={styles.education} aria-labelledby="resume-education-heading">
      <h2 className={styles.sectionHeading} id="resume-education-heading">Education</h2>
      <div className={styles.educationList}>
        {data.education.map((item) => (
          <article className={styles.educationEntry} key={item.institution}>
            <h3>{item.institution}</h3>
            <p>{item.qualification}</p>
            <p className={styles.date}>{item.dates}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResumePage({ data }: { data: ApplicationPageData }) {
  return (
    <ApplicationDocument data={data} current="resume">
      <ProfileSection data={data} />
      <ApplicationDivider />
      <div className={styles.resumeGrid}>
        <ExperienceSection data={data} />
        <aside className={styles.resumeSidebar}>
          <SkillsSection data={data} />
          <EducationSection data={data} />
        </aside>
      </div>
    </ApplicationDocument>
  );
}

export function CoverLetterPage({ data }: { data: ApplicationPageData }) {
  return (
    <ApplicationDocument data={data} current="cover-letter" bottomDivider>
      <section className={styles.letter} aria-label="Cover letter">
        <p>{data.coverLetter.greeting}</p>
        {data.coverLetter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className={styles.signoff}>{data.coverLetter.closing}<br /><strong>{data.person.name}</strong></p>
      </section>
    </ApplicationDocument>
  );
}