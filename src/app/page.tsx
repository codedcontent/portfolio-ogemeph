import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <main className="w-full flex h-screen selection:bg-secondary">
      <LeftSide />
      <RightSide />
    </main>
  )
}