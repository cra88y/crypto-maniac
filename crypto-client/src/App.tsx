import { useEffect, useRef, useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = (e: MouseEvent) => {
    if (e) setShowSidebar((prev) => !prev);
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideDropdown = (e: MouseEvent) => {
      if (showSidebar && !ref.current?.contains(e.target as Node)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, [showSidebar]);
  return (
    <>
      <div className="bg-black/90 h-screen flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <aside
            ref={ref}
            className={`${
              showSidebar ? "sm:hidden" : "hidden"
            } flex flex-col bg-violet-400 text-white text-3xl  py-3 px-6 mr-3 min-w-[200px] w-1/4`}
          >
            <ul className=" flex flex-col">
              <a href="#" className="hover:bg-black/10 rounded-lg p-1 w-fit">
                Dashboard
              </a>
              <a href="#" className="hover:bg-black/10 rounded-lg p-1 w-fit">
                About
              </a>
              <a href="#" className="hover:bg-black/10 rounded-lg p-1 w-fit">
                Login
              </a>
            </ul>
          </aside>
          <div>
            <h2 className="text-lg text-violet-400 border-b border-violet-400 mb-3 p-3">
              Our Cards
            </h2>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

function Navbar({ toggleSidebar }: { toggleSidebar: Function }) {
  return (
    <>
      <div className="flex flex-col">
        <header className="bg-black/50 h-16 w-full shadow flex justify-between items-stretch px-3">
          <a href="#" className="text-violet-400 font-bold flex items-center">
            LOGO
          </a>
          <div className="flex">
            <div className="hidden sm:flex items-stretch text-white/90">
              <a
                href="#"
                className="flex items-center px-3 transition-colors hover:text-violet-400 hover:bg-slate-100"
              >
                Home
              </a>
              <a
                href="#"
                className="flex items-center px-3 transition-colors hover:text-violet-400 hover:bg-slate-100"
              >
                About
              </a>
            </div>

            <div className="flex items-center text-white/90">
              <a
                href="#"
                className="py-1 px-3 transition-colors hover:text-violet-400 hover:bg-white/15 rounded mx-3"
              >
                Login
              </a>
              <a
                href="#"
                className="focus:ring-2 ring-offset ring-violet-300/50 text-white py-1 px-3  bg-violet-400 rounded transition-colors hover:bg-violet-500"
              >
                Sign Up
              </a>
            </div>
            <div className="h-full flex items-center m1-4 px-3">
              <button
                onClick={(e) => toggleSidebar(e)}
                className="sm:hidden flex items-center justify-center h-8 w-8 rounded transition-colors hover:bg-violet-100 hover: text-violet-600 text-2xl font-medium"
              >
                ☰
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

function Card() {
  return (
    <>
      <div className="bg-white rounded-lg shadow w-[300px]">
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        />
        <div className="py-2 px-3">
          <h3 className="font-semibold text-lg text-slate-800 mb-2">
            Test Card
          </h3>
          <p className="text-slate-800">
            This is text referring to the topic of this card. It is a summary of
            information.
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
