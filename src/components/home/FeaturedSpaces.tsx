// import Link from "next/link";
// import { connectDB } from "@/lib/db";
// import Space from "@/models/Space";
// import SpaceCard, { SpaceCardData } from "@/components/cards/SpaceCard";

// async function getFeaturedSpaces(): Promise<SpaceCardData[]> {
//   await connectDB();
//   const spaces = await Space.find({}).sort({ rating: -1 }).limit(4).lean();
//   return JSON.parse(JSON.stringify(spaces));
// }

// export default async function FeaturedSpaces() {
//   const spaces = await getFeaturedSpaces();

//   return (
//     <section className="bg-base-200 py-16">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <div className="flex items-end justify-between mb-8">
//           <div>
//             <h2 className="text-3xl font-bold">Featured Spaces</h2>
//             <p className="text-base-content/60 mt-2">
//               Top-rated spaces our community loves booking.
//             </p>
//           </div>
//           <Link href="/spaces" className="btn btn-outline btn-sm hidden sm:inline-flex">
//             View All
//           </Link>
//         </div>

//         {spaces.length === 0 ? (
//           <div className="text-center py-16 text-base-content/50">
//             No spaces listed yet — be the first to{" "}
//             <Link href="/items/add" className="link link-primary">
//               add one
//             </Link>
//             .
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {spaces.map((space) => (
//               <SpaceCard key={space._id} space={space} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }