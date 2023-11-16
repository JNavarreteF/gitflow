import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.svg';

function App() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="Sales">
          <ListItemText primary="Sales" />
        </ListItem>
        <ListItem button key="Purchase Orders">
          <ListItemText primary="Purchase Orders" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={toggleDrawer(true)}><MenuIcon /></Button>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My App Name</h2>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <header className="App-header">
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
