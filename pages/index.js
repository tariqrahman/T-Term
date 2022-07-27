import Head from 'next/Head';
import { Component } from 'react';
import Terminal from '../components/Terminal';
import Header from '../components/Header'

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Head>
            <title>Tariq's Terminal</title>
          </Head>
        </div>
        <Header headerText='T-TERM'/>
        <body className="bg-slate-200">
          
          <div className="flex justify-center pt-1 h-96">
            <Terminal />
          </div>
        </body>
      </>
    );
  }
}
