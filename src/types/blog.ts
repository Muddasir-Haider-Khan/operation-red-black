export interface BlogPost {
  id: string;
  title: string;
  description: string;
  badge: string;
  date: string;
  image?: string;
  images?: string[];
  videoEmbed?: string;
  localVideo?: string;
  content?: string;
  pdfUrl?: string;
  featured?: boolean;
}
