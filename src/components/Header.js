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
      <h1>to Do App</h1>
      <p>Testing React</p>
    </header>
  );
};
export default Header;
