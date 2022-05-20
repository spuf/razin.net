import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Resume.module.css'

const Resume: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Arseny Razin</title>
      </Head>

      <h1>Arseny Razin</h1>
      <p>
        Location: Saint Petersburg, Russia
        <br />
        Mobile phone: <a href="tel:+79313115668">+7 (931) 311-56-68</a>
        <br />
        E-mail: <a href="mailto:spufru@gmail.com">spufru@gmail.com</a>
        <br />
        Skype: arseniy.razin
        <br />
        Github:{' '}
        <a href="https://github.com/spuf" target="_blank" rel="noreferrer">
          https://github.com/spuf
        </a>
        <br />
        Website:{' '}
        <a href="https://arseny.me" target="_blank" rel="noreferrer">
          https://arseny.me
        </a>
      </p>

      <h2>Work experience</h2>
      <p>
        <strong>01.2017 &ndash; present time</strong>
        <br />
        <a href="http://ondoc.me">OnDoc</a>
        <br />
        <em>Position:</em> Backend Engineer
      </p>
      <ul>
        <li>DevOps things.</li>
        <li>Fast-paced feature implementing.</li>
        <li>Architectural changes.</li>
      </ul>

      <p>
        <strong>09.2016 &ndash; 12.2016</strong>
        <br />
        <a href="http://www.encoding.com">Encoding.com</a>
        <br />
        <em>Position:</em> Backend Engineer
      </p>
      <ul>
        <li>Developing analytics system.</li>
        <li>Developing validation framework for video encoding.</li>
      </ul>

      <p>
        <strong>02.2014 &ndash; 05.2016</strong>
        <br />
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

      <p>
        <strong>09.2013 &ndash; 01.2014</strong>
        <br />
        <a href="http://twocomrades.ru">2Comrades</a>
        <br />
        <em>Position:</em> JavaScript Developer
      </p>
      <ul>
        <li>Developing frontend using jQuery, Backbone, Highcharts, HTML5 Canvas.</li>
        <li>Working with different maps services APIs.</li>
      </ul>

      <p>
        <strong>02.2012 &ndash; 08.2013</strong>
        <br />
        <a href="http://awardwallet.com">AwardWallet LLC</a>
        <br />
        <em>Position:</em> Full Stack Developer
      </p>
      <ul>
        <li>Refactoring monolith PHP application using unit testing (PHPUnit).</li>
        <li>Developing website on Symfony2 (PHP, MySQL).</li>
        <li>Developing HTML5 mobile app using PhoneGap platform (JavaScript, Objective-C, Java).</li>
      </ul>

      <p>
        <strong>07.2010 &ndash; 08.2010</strong>
        <br />
        <a href="http://ertelecom.ru">ER-Telecom Holding</a>
        <br />
        <em>Position:</em> PHP Developer
      </p>
      <ul>
        <li>Developing intranet website using Drupal (PHP).</li>
      </ul>

      <h2>Education</h2>
      <p>
        <strong>2013 &ndash; 2015</strong> Higher School of Economics <em>(Moscow, Russia)</em>
        <br />
        Master&#8217;s degree in Software Engineering (in English)
      </p>
      <p>
        <strong>2009 &ndash; 2013</strong> Higher School of Economics <em>(Perm, Russia)</em>
        <br />
        Bachelor&#8217;s degree in Business Informatics
      </p>

      <h2>Skills</h2>
      <ul>
        <li>Primary: PHP, Symfony, JavaScript, Node.js, React, Vagrant, Ansible, Docker.</li>
        <li>Secondary: ElasticSearch, RegExp, Ruby, Nginx, Bash.</li>
        <li>Tools: Git.</li>
      </ul>

      <h2>Languages</h2>
      <ul>
        <li>Russian &#8212; native</li>
        <li>English &#8212; advanced</li>
      </ul>
    </div>
  )
}

export default Resume
