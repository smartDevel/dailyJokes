import React from 'react';
import {Helmet} from 'react-helmet'
import styles from './App.module.css';
import AppBar from './components/AppBar';
import smile from './smile.png';
import Text from './components/Text'
import DailyJokesViewer from './components/DailyJokesViewer';

function App() {
  return (
    <div className={styles.app}>
        <Helmet>
          <title>Daily Jokes</title>
          <meta name="description" content="The world's #1 source for bad jokes." />
          <link rel="icon" href={smile} />
        </Helmet>
        <AppBar>
          <AppBar.Item path="javascript:alert('not available...');">Login</AppBar.Item>
          {/* <AppBar.Item path="https://bad-jokes-blog.netlify.app/">Blog</AppBar.Item> */}
          <AppBar.Item path="https://ways4.eu/">ways4eu-Blog</AppBar.Item>
          <AppBar.Item path="https://ways4eu.wordpress.com">Wordpress.com-Blog</AppBar.Item>
          <AppBar.Item path="https://ways4euwp-01.vercel.app/">Vercel-Blog</AppBar.Item>
          <AppBar.Logo>
            <Text size="lg">Daily Jokes </Text>
            <img style={{height: '39px'}} src={smile} alt="smile logo"></img>
          </AppBar.Logo>
        </AppBar>
        <div className={styles.main}>
          <DailyJokesViewer />
        </div>
    </div>
  );
}

export default App;