export interface Space {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  category: string;
  location: string;
  price: number;
  rating: number;
  capacity: number;
  availableFrom: string;
  hostName: string;
  amenities: string[];
  featured: boolean;
  status: string;
}

export interface SpaceFilters {
  search?: string;
  category?: string;
  location?: string;
  rating?: number;

  // Sorting
  sort?: "newest" | "rating" | "price-low" | "price-high";

  // Pagination
  page?: number;
  limit?: number;
}

export interface PaginatedSpaces {
  spaces: Space[];
  totalSpaces: number;
  currentPage: number;
  totalPages: number;
  limit: number;
}