import Navigation from "./Navigation";

const Header = () => {
  const STYLE = {
    container: "bg-[#161616] top-0 w-full",
  };
  return (
    <header className={STYLE.container}>
      <Navigation />
    </header>
  );
};

export default Header;
