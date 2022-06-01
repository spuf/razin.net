import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Resume.module.css'
import { DateTime } from 'luxon'

const Resume: NextPage = () => {
  const resume = {
    fullName: 'Arseny Razin',
    location: 'Saint Petersburg, Russia',
    email: 'arseny@razin.net',
    github: 'spuf',
    workExperience: [
      {
        start: '2017-01-01',
        end: null,
        company: 'ONDOC',
        website: 'https://ondoc.me',
        position: 'Backend Engineer',
        achiements: ['Microservices, DevOps, SRE.', 'Fast-paced feature implementing.', 'Architectural changes.'],
      },
      {
        start: '2016-09-01',
        end: '2016-12-01',
        company: 'Encoding.com',
        website: 'https://www.encoding.com',
        position: 'Backend Engineer',
        achiements: ['Developing analytics system.', 'Developing validation framework for video encoding.'],
      },
      {
        start: '2014-02-01',
        end: '2016-05-01',
        company: 'Dalee Internet Agency',
        website: 'https://www.dalee.ru',
        position: 'Full Stack Developer',
        achiements: [
          'Developing websites using PHP, JavaScript, PostgreSQL.',
          'Developing and refactoring microservices using Node.js, Ruby, Redis.',
          'Working on the MegaFon website (BEM methodology and all techs above).',
          'Introducing Continuous Integration and containerization to current workflows.',
        ],
      },
      {
        start: '2013-09-01',
        end: '2014-01-01',
        company: '2Comrades',
        website: 'http://twocomrades.ru',
        position: 'JavaScript Developer',
        achiements: [
          'Developing frontend using jQuery, Backbone, Highcharts, HTML5 Canvas.',
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
          'Refactoring monolith PHP application using unit testing (PHPUnit).',
          'Developing website on Symfony2 (PHP, MySQL).',
          'Developing HTML5 mobile app using PhoneGap platform (JavaScript, Objective-C, Java).',
        ],
      },
      {
        start: '2010-07-01',
        end: '2010-08-01',
        company: 'ER-Telecom Holding',
        website: 'https://ertelecom.ru',
        position: 'PHP Developer',
        achiements: ['Developing intranet website using Drupal (PHP).'],
      },
    ],
    education: [
      {
        start: '2013-09-01',
        end: '2015-06-01',
        school: 'Higher School of Economics',
        location: 'Moscow, Russia',
        degree: "Master's degree in Software\u00A0Engineering",
      },
      {
        start: '2009-09-01',
        end: '2013-06-01',
        school: 'Higher School of Economics',
        location: 'Perm, Russia',
        degree: "Bachelor's degree in Business\u00A0Informatics",
      },
    ],
    skills: [
      'Primary: PHP, Symfony, JavaScript, Node.js, React, Vagrant, Ansible, Docker.',
      'Secondary: ElasticSearch, RegExp, Ruby, Nginx, Bash.',
      'Tools: Git.',
    ],
    languages: ['Russian — native', 'English — advanced'],
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Resume - {resume.fullName}</title>
      </Head>
      <div className={styles.header}>
        <h1>{resume.fullName}</h1> <div className={styles.contact}>{resume.location}</div>
        <div className={styles.dash}> &mdash; </div>
        <div className={styles.contact}>
          <a href={`mailto:${resume.email}`} target="_blank" rel="noreferrer">
            {resume.email}
          </a>
        </div>
        <div className={styles.dash}> &mdash; </div>
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
            <h3>
              <div className={styles.contact}>{v.position}</div>
              <div className={styles.dash}> &mdash; </div>
              <div className={styles.contact}>
                <a href={v.website} target="_blank" rel="noreferrer">
                  {v.company}
                </a>
              </div>
            </h3>
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
      <div className={styles.title}>
        <h2>Languages</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.block}>
          <ul>
            {resume.languages.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
