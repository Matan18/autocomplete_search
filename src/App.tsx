import { Footer } from "./Footer";
import { Searchbar } from "./Searchbar";

function App() {
  return (
    <div className="h-screen w-screen gap-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl">✍️</h1>
      <div className="text-center">
        <h2 className="font-semibold text-[2rem] text-zinc-100">
          Faça algo mágico
        </h2>
        <h3 className="text-2xl text-zinc-400">
          Ache sempre tudo em um só lugar!
        </h3>
      </div>
      <Searchbar />
      <Footer />
    </div>
  );
}

export default App;
