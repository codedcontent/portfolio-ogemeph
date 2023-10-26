import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <main className="w-full flex md:flex-row flex-col md:h-screen selection:bg-secondary pb-6 relative md:overflow-hidden">
      <div className="sticky top-0 left-0 bg-white pt-4 pb-2 z-50 md:hidden px-6 lg:px-24 lg:py-10 shadow-md">
        <TopNav />
      </div>

      <LeftSide />

      <RightSide />
    </main>
  );
}
