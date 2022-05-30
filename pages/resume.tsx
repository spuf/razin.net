import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Resume.module.css'

const Resume: NextPage = () => {
  const resume = {
    fullName: 'Arseny Razin',
    location: 'Saint Petersburg, Russia',
    email: 'arseny@razin.net',
    github: 'spuf',
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{resume.fullName}</title>
      </Head>

      <div className={styles.header}>
        <h1>{resume.fullName}</h1>
        <p>
          {resume.location} &mdash; <a href={`mailto:${resume.email}`}>{resume.email}</a> &mdash;{' '}
          <a href={`https://github.com/${resume.github}`} target="_blank" rel="noreferrer">
            https://github.com/{resume.github}
          </a>
        </p>
      </div>

      <div className={styles.title}>
        <h2>Work experience</h2>
      </div>
      <div className={styles.content}>
        <h3>01.2017 &ndash; present time</h3>
        <p>
          <a href="http://ondoc.me">OnDoc</a>
          <br />
          <em>Position:</em> Backend Engineer
        </p>
        <ul>
          <li>Microservices, DevOps, SRE.</li>
          <li>Fast-paced feature implementing.</li>
          <li>Architectural changes.</li>
        </ul>

        <h3>09.2016 &ndash; 12.2016</h3>
        <p>
          <a href="http://www.encoding.com">Encoding.com</a>
          <br />
          <em>Position:</em> Backend Engineer
        </p>
        <ul>
          <li>Developing analytics system.</li>
          <li>Developing validation framework for video encoding.</li>
        </ul>

        <h3>02.2014 &ndash; 05.2016</h3>
        <p>
          <a href="http://www.dalee.ru">Dalee Internet Agency</a>
          <br />
          <em>Position:</em> Full Stack Developer
        </p>
        <ul>
          <li>Developing websites using PHP, JavaScript, PostgreSQL.</li>
          <li>Developing and refactoring microservices using Node.js, Ruby, Redis.</li>
          <li>
            Working on the <a href="http://moscow.megafon.ru">MegaFon</a> website (BEM methodology and all techs above).
          </li>
          <li>Introducing Continuous Integration and containerization to current workflows.</li>
        </ul>

        <h3>09.2013 &ndash; 01.2014</h3>
        <p>
          <a href="http://twocomrades.ru">2Comrades</a>
          <br />
          <em>Position:</em> JavaScript Developer
        </p>
        <ul>
          <li>Developing frontend using jQuery, Backbone, Highcharts, HTML5 Canvas.</li>
          <li>Working with different maps services APIs.</li>
        </ul>

        <h3>02.2012 &ndash; 08.2013</h3>
        <p>
          <a href="http://awardwallet.com">AwardWallet LLC</a>
          <br />
          <em>Position:</em> Full Stack Developer
        </p>
        <ul>
          <li>Refactoring monolith PHP application using unit testing (PHPUnit).</li>
          <li>Developing website on Symfony2 (PHP, MySQL).</li>
          <li>Developing HTML5 mobile app using PhoneGap platform (JavaScript, Objective-C, Java).</li>
        </ul>

        <h3>07.2010 &ndash; 08.2010</h3>
        <p>
          <a href="http://ertelecom.ru">ER-Telecom Holding</a>
          <br />
          <em>Position:</em> PHP Developer
        </p>
        <ul>
          <li>Developing intranet website using Drupal (PHP).</li>
        </ul>
      </div>
      <div className={styles.title}>
        <h2>Education</h2>
      </div>
      <div className={styles.content}>
        <h3>2013 &ndash; 2015</h3> Higher School of Economics <em>(Moscow, Russia)</em>
        <p>Master&#8217;s degree in Software Engineering (in English)</p>
        <h3>2009 &ndash; 2013</h3> Higher School of Economics <em>(Perm, Russia)</em>
        <p>Bachelor&#8217;s degree in Business Informatics</p>
      </div>
      <div className={styles.title}>
        <h2>Skills</h2>
      </div>
      <div className={styles.content}>
        <ul>
          <li>Primary: PHP, Symfony, JavaScript, Node.js, React, Vagrant, Ansible, Docker.</li>
          <li>Secondary: ElasticSearch, RegExp, Ruby, Nginx, Bash.</li>
          <li>Tools: Git.</li>
        </ul>
      </div>
      <div className={styles.title}>
        <h2>Languages</h2>
      </div>
      <div className={styles.content}>
        <ul>
          <li>Russian &#8212; native</li>
          <li>English &#8212; advanced</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
