import Link from 'next/link'
import styles from './page.module.css'
import { DateTime } from 'luxon'

export const metadata = {
  title: 'Resume - Arseny Razin',
  robots: {
    index: false,
  },
}

export default function Work() {
  const resume = {
    fullName: 'Arseny Razin',
    email: 'a@razin.net',
    github: 'spuf',
    workExperience: [
      {
        start: '2017-01-01',
        end: null,
        company: 'ONDOC',
        website: 'https://ondoc.me',
        position: 'Backend Engineer',
        achiements: [
          'Maintaining infrastructure on bare-metal servers.',
          'Introducing architectural practice to achieve fast feature implementation.',
          'Evaluating system to comply with government restrictions.',
        ],
      },
      {
        start: '2016-09-01',
        end: '2016-12-01',
        company: 'Encoding.com',
        website: 'https://www.encoding.com',
        position: 'Backend Engineer',
        achiements: [
          'Maintaining in-house advertising analytics system.',
          'Developing validation framework for video encoding.',
        ],
      },
      {
        start: '2014-02-01',
        end: '2016-05-01',
        company: 'Dalee Internet Agency',
        website: 'https://www.dalee.ru',
        position: 'Full Stack Developer',
        achiements: [
          'Developing websites from small landing pages to national mobile providers.',
          'Refactoring ancient microservices to run them in cloud environments.',
          'Introducing continuous integration and containerization to current workflows.',
        ],
      },
      {
        start: '2013-09-01',
        end: '2014-01-01',
        company: '2Comrades',
        website: 'http://twocomrades.ru',
        position: 'JavaScript Developer',
        achiements: [
          'Developing a cloud platform for taxi and transport services.',
          'Working with different maps services APIs.',
        ],
      },
      {
        start: '2012-02-01',
        end: '2013-08-01',
        company: 'AwardWallet LLC',
        website: 'https://awardwallet.com',
        position: 'Full Stack Developer',
        achiements: [
          'Refactoring monolith PHP application.',
          'Developing API gateways to collect and consolidate data from numerous travel agencies.',
          'Maintaining mobile application.',
        ],
      },
      {
        start: '2010-07-01',
        end: '2010-08-01',
        company: 'ER-Telecom Holding',
        website: 'https://ertelecom.ru',
        position: 'PHP Developer',
        achiements: ['Developing intranet websites.'],
      },
    ],
    education: [
      {
        start: '2013-09-01',
        end: '2015-06-01',
        school: 'National Research University Higher School of Economics',
        location: 'Russia',
        degree: "Master's degree in Software\u00A0Engineering",
      },
      {
        start: '2009-09-01',
        end: '2013-06-01',
        school: 'National Research University Higher School of Economics',
        location: 'Russia',
        degree: "Bachelor's degree in Business\u00A0Informatics",
      },
    ],
    skills: [
      'Primary: Go, Node.js, PHP (Symfony), PostgreSQL, Redis, Docker, Ansible.',
      'Secondary: React, Python, Nginx, Linux.',
    ],
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <Link href={'/'} prefetch={false}>
            {resume.fullName}
          </Link>
        </h1>
        <div className={styles.contact}>
          <a href={`mailto:${resume.email}`} target="_blank" rel="noreferrer">
            {resume.email}
          </a>
        </div>
        <div className={styles.contact}>
          <a href={`https://github.com/${resume.github}`} target="_blank" rel="noreferrer">
            github.com/{resume.github}
          </a>
        </div>
      </div>
      <div className={styles.title}>
        <h2>Work experience</h2>
      </div>
      <div className={styles.content}>
        {resume.workExperience.map((v) => (
          <div className={styles.block} key={v.start}>
            <h3>{v.position}</h3>
            <div className={styles.company}>
              <a href={v.website} target="_blank" rel="noreferrer">
                {v.company}
              </a>
            </div>
            <div className={styles.dates}>
              {DateTime.fromISO(v.start).toFormat('LLL yyyy')} &ndash;{' '}
              {v.end ? DateTime.fromISO(v.end).toFormat('LLL yyyy') : 'present time'}
            </div>
            <ul>
              {v.achiements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.title}>
        <h2>Education</h2>
      </div>
      <div className={styles.content}>
        {resume.education.map((v) => (
          <div className={styles.block} key={v.start}>
            <h3>{v.degree}</h3>
            <div className={styles.dates}>
              {DateTime.fromISO(v.start).toFormat('yyyy')} &ndash; {DateTime.fromISO(v.end).toFormat('yyyy')}
            </div>
            <div>
              {v.school} ({v.location})
            </div>
          </div>
        ))}
      </div>
      <div className={styles.title}>
        <h2>Skills</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.block}>
          <ul>
            {resume.skills.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
