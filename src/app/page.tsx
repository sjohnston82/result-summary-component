import ScoreContainer from "@/components/ScoreContainer";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <main className="font-bold bg-white font-cfont lg:flex lg:items-center lg:justify-center lg:h-[100dvh] ">
      <div className="lg:flex lg:w-1/2 lg:h-1/2 lg:items-center lg:justify-center lg:shadow-lightlavender lg:shadow-2xl lg:rounded-3xl">
        <ScoreContainer />
        <Summary />
      </div>
    </main>
  );
}
