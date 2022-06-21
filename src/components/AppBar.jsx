import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  return (
    <header style={styles.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
