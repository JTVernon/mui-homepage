  import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <header>
      <Header />
      </header>
      <section>
        <Content />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
