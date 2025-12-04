import Header from "./mdx/header.mdx";
import Content from "./mdx/content.mdx";
// import Example from "./example.mdx";
import { useRegisterCopyButton } from "./hooks/useRegisterCopyButton";
import Toast from "./components/Toast";

function App() {
  useRegisterCopyButton();

  return (
    <>
      <header className="container">
        <Header />
      </header>
      <div className="container prose">
        <Content />
        {/* <Example /> */}
      </div>
      <Toast />
    </>
  );
}

export default App;
