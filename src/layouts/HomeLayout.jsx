import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LayoutComponents/LeftNavbar";
import RightNavbar from "../components/LayoutComponents/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto mt-8">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto mt-8 md:grid grid-cols-4 gap-3">
        <aside className="col-span-1">
          <LeftNavbar></LeftNavbar>
        </aside> 
        <section className="col-span-2">Main</section>
        <aside className="col-span-1">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
