import { AppBar, Toolbar, Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome</code> to my application.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="App-footer">
        <p>
          Made with <span role="img" aria-label="heart">❤️</span> by [Your Name]
        </p>
      </footer>
    </div>
  );
}
