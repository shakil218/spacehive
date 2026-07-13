import SpaceClient from "@/components/space-details/SpaceClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SpaceDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return <SpaceClient id={id} />;
}