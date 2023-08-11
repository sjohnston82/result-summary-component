import ScoreContainer from "@/components/ScoreContainer";
import Summary from "@/components/Summary";


export default function Home() {
  return (
    <main className="font-bold bg-white font-cfont">
      <ScoreContainer />
      <Summary />
    </main>
  );
}
