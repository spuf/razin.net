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
        start: '2021-08-01',
        end: null,
        company: 'ONDOC',
        website: 'https://ondoc.clinic',
        position: 'Principal Software Engineer',
        achiements: [
          'Evaluated telemedicine system to comply with government regulations.',
          'Managed developers and DevOps teams.',
          'Introduced microservices architecture using Node.js and Go.',
          'Maintained infrastructure on bare-metal servers.',
        ],
      },
      {
        start: '2017-01-01',
        end: '2021-07-01',
        company: 'ONDOC',
        website: 'https://ondoc.clinic',
        position: 'Senior Software Engineer',
        achiements: [
          'Improved continuous delivery for web service using GitOps.',
          'Introduced architectural approaches to speed up the new features implementation.',
          'Migrated application from MySQL database to PostgreSQL.',
          'Resolved numerous issues with Elasticsearch and work queue platforms.',
        ],
      },
      {
        start: '2022-09-01',
        end: '2023-06-01',
        company: 'ITMO University',
        website: 'https://en.itmo.ru/',
        position: 'Sep 2022 - Jun 2023',
        achiements: [
          'Led frontend and backend web development workshops at the Faculty of Information Technology and Programming.',
        ],
      },
      {
        start: '2016-09-01',
        end: '2016-12-01',
        company: 'Encoding.com',
        website: 'https://www.encoding.com',
        position: 'Senior Software Engineer',
        achiements: [
          'Developed validation framework for video encoding workflows.',
          'Maintained in-house advertising and analytics platform.',
        ],
      },
      {
        start: '2014-02-01',
        end: '2016-05-01',
        company: 'Dalee Internet Agency',
        website: 'https://www.dalee.ru',
        position: 'Senior Software Engineer',
        achiements: [
          'Developed website for a national mobile provider using PHP, JavaScript, PostgreSQL.',
          'Introduced continuous delivery and containerization.',
          'Refactored integration services (C, Ruby, Python) to run them in Docker environment.',
          'Developed advertising platform using Node.js.',
        ],
      },
      {
        start: '2013-09-01',
        end: '2014-01-01',
        company: '2Comrades',
        website: 'http://twocomrades.ru',
        position: 'Software Engineer',
        achiements: [
          'Developed the frontend part of a web service for monitoring and ordering freight transportation using various JavaScript libraries.',
          'Integrated API of various mapping services.',
        ],
      },
      {
        start: '2012-02-01',
        end: '2013-08-01',
        company: 'AwardWallet LLC',
        website: 'https://awardwallet.com',
        position: 'Software Engineer',
        achiements: [
          'Developed web service for tracking reward program accounts using Symfony framework (PHP) and MySQL database.',
          'Developed MVP of cross-platform mobile application using PhoneGap platform (JavaScript, Objective-C, Java).',
        ],
      },
      {
        start: '2010-07-01',
        end: '2010-08-01',
        company: 'ER-Telecom Holding',
        website: 'https://ertelecom.ru',
        position: 'Software Engineer',
        achiements: [
          'Developed corporate web portal for employee surveys and engagement using the Drupal platform (PHP).',
          'Closed all hanging tasks in the team`s backlog.',
        ],
      },
    ],
    education: [
      {
        start: '2013-09-01',
        end: '2015-06-01',
        school: 'National Research University Higher School of Economics',
        location: 'Russia',
        degree: 'Master`s degree, System and Software Engineering',
      },
      {
        start: '2009-09-01',
        end: '2013-06-01',
        school: 'National Research University Higher School of Economics',
        location: 'Russia',
        degree: 'Bachelor`s degree, Business Informatics',
      },
    ],
    skills: [
      'Primary: Go, Node.js, PHP, PostgreSQL, Redis, Docker, Ansible.',
      'Secondary: React.js, Python, Nginx, Linux.',
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
