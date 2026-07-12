import SpacesHero from "@/components/spaces/SpacesHero";
import SpacesToolbar from "@/components/spaces/SpacesToolbar";
import SpacesGrid from "@/components/spaces/SpacesGrid";
import SpacesPagination from "@/components/spaces/SpacesPagination";

export default function SpacesPage() {
  return (
    <main className="bg-base-200 min-h-screen">
      <SpacesHero />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-8">
        <SpacesToolbar />

        <SpacesGrid />

        <SpacesPagination />
      </section>
    </main>
  );
}