import { useEffect, useRef, useState } from "react";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = (e: MouseEvent) => {
    if (e) {
      e.stopPropagation();
      setShowSidebar((prev) => !prev);
    }
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showSidebar && !ref.current?.contains(e.target as Node)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSidebar]);
  return (
    <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/public/background.png')] h-fill min-h-screen">
      <div className="bg-black/80 min-h-screen h-fill flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Card />
          <aside
            ref={ref}
            className={`${
              showSidebar ? "" : "hidden"
            } lg:hidden absolute right-0 h-[93vh] z-10 bg-black/75 rounded-l text-white text-3xl py-6 w-1/3`}
          >
            <ul className=" flex flex-col text-right">
              <a href="#" className="hover:bg-white/5 py-1 px-6 w-full">
                Dashboard
              </a>
              <a href="#" className="hover:bg-white/5 py-1 px-6 w-full">
                About
              </a>
              <a href="#" className="hover:bg-white/5 py-1 px-6 w-full">
                Login
              </a>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Navbar({ toggleSidebar }: { toggleSidebar: Function }) {
  return (
    <>
      <div className="flex flex-col">
        <header className="bg-black/15 rounded-lg w-full flex lg:justify-center justify-between items-center h-[7vh] px-6">
          <div className="lg:hidden md:w-1/6 sm:w-1/4  w-1/3"></div>
          <a href="#" className=" text-white/95 font-bold text-4xl  mx-3">
            LOGO
          </a>
          <div className="flex">
            <div className="mx-6 hidden lg:flex text-white/90">
              <a
                href="#"
                className="flex flex-col justify-center px-3 py-1 mx-2 transition-colors hover:text-violet-600 hover:bg-white rounded-l-lg h-fill"
              >
                Home
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-1 mx-2 transition-colors hover:text-violet-600 hover:bg-white h-fill"
              >
                About
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-1 mx-2 transition-colors hover:text-violet-600 hover:bg-white rounded-r-lg h-fill"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center text-white/90  lg:text-lg text-sm">
              <a
                href="#"
                className="py-1 px-3 transition-colors bg-white text-violet-600 hover:bg-violet-700 hover:text-white rounded-l-lg"
              >
                Login
              </a>
              <a
                href="#"
                className=" text-white py-1 px-3 bg-violet-600 rounded-r-lg transition-colors hover:bg-violet-700 text-nowrap"
              >
                Sign Up
              </a>
            </div>
            <div className="lg:hidden h-full flex items-center pl-3">
              <button
                onClick={(e) => toggleSidebar(e)}
                className="flex items-center justify-center h-8 w-8 transition-colors hover:text-violet-600 hover:bg-white rounded-lg text-white text-2xl font-medium"
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
    <div className="flex flex-wrap h-fit w-full justify-center">
      <div className="bg-white rounded-xl shadow lg:w-1/3 w-2/3 h-fit m-3">
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-slate-800 mb-2">
            Test Card
          </h3>
          <p className="text-slate-800">
            This is text referring to the topic of this card. It is a summary of
            information.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow lg:w-1/3 w-2/3 h-fit m-3">
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-slate-800 mb-2">
            Test Card
          </h3>
          <p className="text-slate-800">
            This is text referring to the topic of this card. It is a summary of
            information.
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
