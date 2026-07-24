export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds?: string;
  baths?: string;
  sqft?: string;
  status: string;
  image: string;
  badgeColor?: string;
  isFeatured?: boolean;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
}
