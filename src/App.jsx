import { FloatingNav } from "./Components/ui/FloatingNav";
import Clients from "./Components/Clients";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import RecentProjects from "./Components/RecentProjects";
import Grid from "./Components/Grid";
import { navItems } from "./data";
import SkillSet from "./Components/SkillSet";
import Approach from "./Components/Approach";

function App() {
  return (
    <main className="bg-black-100 relative flex felx-col justify-center items-center overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <SkillSet />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default App;
