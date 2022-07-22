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
            'Hello there! Here are a list of all [[b;blue;white]commands], [[bu;<COLOR>;<BACKGROUND>]options], and descriptions!'
          );
        },
        tariq: function () {
          this.echo('');
          this.echo(
            `What's up! My name is Tariq Rahman and I'm a Computer Science & Engineering major entering my junior year at UCLA. \n`
          );
        },
        hello: function (name) {
          this.echo('');
          this.echo(`Hello, ${name}. Welcome to my terminal!`);
        },
        contactme: function () {
          this.echo('');
          this.echo(`Reach me via email: tariqrahman@g.ucla.edu`);
        },
      },

      {
        greetings:
          'Welcome to my terminal! Type [[bi;purple;<BACKGROUND>]help] for a list of valid commands!',
        prompt: '>>> ',
      }
    );
  };

  render() {
    return (
      <>
        {/* Renders terminal object */}
        <span className="w-1/2 px-1.5 py-3 h-auto border-slate-500 border-2"></span>
      </>
    );
  }
}

// function prettyPrint(fobj) {
//   const nameString = `[[b;red;<BACKGROUND>]]${fobj.name}`;

//   const paramString = `[[bu;<COLOR><BACKGROUND>]]${fobj.parameters}`;

//   const descriptionString = fobj.description;

//   const prettyString = nameString + paramString + descriptionString;

//   return prettyString;
// }

// const funcs = [];
// for (var i = 0; i < functionObjects.length; i++) {
//   funcs.push(prettyPrint(functionObjects[i]));
// }

// const functionObjects = [
//   {
//     name: 'help',
//     description: 'displays list of all commands',
//     parameters: '',
//   },
//   {
//     name: 'tariq',
//     description:
//       'displays brief description of both my personal and professional interests',
//     parameters: '',
//   },
//   {
//     name: 'hello',
//     description: 'echoes your name',
//     parameters: 'name',
//   },
//   {
//     name: 'proj',
//     description: 'display an array of personal projects',
//     parameters: '',
//   },
// ];
