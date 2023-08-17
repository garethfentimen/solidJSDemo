import logo from './logo.svg';
import styles from './App.module.css';
import {
  createSignal,
  onCleanup,
  createResource
} from "https://cdn.skypack.dev/solid-js";

const fetchUser = async (id) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

function App() {
  const [userId, setUserId] = createSignal(1);
  const [user] = createResource(userId, fetchUser);

  return <>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(e.currentTarget.value)}
      />
      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </>;
}

export default App;
// return (
  //   <div class={styles.App}>
  //     <header class={styles.header}>
  //       <img src={logo} class={styles.logo} alt="logo" />
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to reload.
  //       </p>
  //       <p>ACME stock ticker: {price()}</p>
  //       <a
  //         class={styles.link}
  //         href="https://github.com/solidjs/solid"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn Solid
  //       </a>
  //     </header>
  //   </div>
  // );