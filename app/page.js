export default function Home() {
  // react uses JSX which is like HTML + Javascript
  const helloMessage = "Good Morning CPRG306 Section C";
  // anything visual goes in the return
  return (
    <main>
      <h1 className="text-3xl lg:text-6xl font-bold">
        {helloMessage.toUpperCase()}
      </h1>
    </main>
  );
}
