// import Head from "./components/head/page";
// import Logo from "./components/logo/page";
// import Slider from "./components/slider/page";
import Counter from "./components/counter/Counter";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Nosso site está quase no ar!
          </h1>
          <p className="text-lg md:text-xl">Faltam apenas</p>

          <Counter />

          <p className="text-sm md:text-base">
            Fique ligado! Estamos preparando algo incrível.
          </p>
        </div>
      </div>

      {/* <Head />
      <Logo />
      <Slider /> */}
    </>
  );
}
