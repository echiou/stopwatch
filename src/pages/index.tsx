import 'cirrus-ui';
import * as React from 'react';
import '@fontsource/cutive-mono';

import EcButton from '../components/ecButton';

const mono = {
  fontFamily: 'Cutive Mono',
};

class Timer extends React.Component<any, any> {
  interval: NodeJS.Timer;

  constructor(props) {
    super(props);
    this.state = {
      running: true,
      cs: 0,
    };
  }

  tick() {
    this.setState((state) => ({
      cs: state.cs + 1,
    }));
  }

  start = () => {
    this.setState(() => ({
      running: true,
    }));
    this.interval = setInterval(() => this.tick(), 10);
  };

  stop = () => {
    this.setState(() => ({
      running: false,
    }));
    clearInterval(this.interval);
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startStop = () => {
    if (!this.state.running) {
      this.start();
    } else {
      this.stop();
    }
  };

  reset = () => {
    this.stop();
    this.setState(() => ({
      cs: 0,
    }));
  };

  formatTime(total_cs) {
    let cs = total_cs % 100;
    let total_s = Math.floor(total_cs / 100);
    let m = Math.floor(total_s / 60) % 60;
    let s = total_s % 60;
    return (
      m.toString().padStart(2, '0') +
      ':' +
      s.toString().padStart(2, '0') +
      '.' +
      cs.toString().padStart(2, '0')
    );
  }

  render() {
    return (
      <div className="row u-text-center">
        <div className="col-12">
          <h1 className="headline-1 font-light" style={mono}>{this.formatTime(this.state.cs)}</h1>
        </div>
        <div className="col-12">
          <div className="btn-group">
            <EcButton text="Start/Stop" fn={this.startStop} />
            <EcButton text="Reset" fn={this.reset} />
          </div>
        </div>
      </div>
    );
  }
}

const IndexPage: React.FC = () => {
  return (
    <main>
      <section>
        <div className="hero level fullscreen">
          <div className="level-item w-100">
            <Timer />
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
