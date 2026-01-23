import PageHeader from "../components/PageHeader";
import EndangeredPenguinSection from "../components/EndangeredPenguinSection";
import FavouritePenguinSection from "../components/FavouritePenguinSection";
export default function Page() {
  return (
    <main>
      <PageHeader title="Week 2" description="static components" />

      <FavouritePenguinSection />
      <EndangeredPenguinSection />
    </main>
  );
}
