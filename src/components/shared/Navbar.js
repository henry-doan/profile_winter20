import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to='/profile'>
      <Menu.Item>
        {/* will replace with the actual username */}
        username
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;