import Head from 'next/head';
import { Component } from 'react';
import Terminal from '../components/Terminal';
import Header from '../components/Header'

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Head>
            <title>Terminal Site</title>
          </Head>
        </div>
        <Header />
        <body className="bg-yellow-100">
          
          <div className="flex justify-center pt-12 h-96">
            <Terminal />
          </div>
        </body>
      </>
    );
  }
}
