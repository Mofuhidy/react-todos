import styles from '../styles/Header.module.css';

const Header = () => {
  const style = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={style} className={styles.header}>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
};
export default Header;
