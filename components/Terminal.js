import $ from 'jquery.terminal';
import { Component } from 'react';

export default class Terminal extends Component {
  componentDidMount() {
    this.jQuerycode();
  }

  jQuerycode = () => {
    $('span').terminal(
      {
        help: function () {
          this.echo(
            'Welcome to my terminal! Commands for navigation can be found below:'
          );
        },
      },
      {
        greetings: 'Type help for a list of valid commands.',
      }
    );
  };

  render() {
    return (
      <>
        <span className="w-1/3 h-full bg-white border-slate-500 border-2 text-red-500"></span>
      </>
    );
  }
}
