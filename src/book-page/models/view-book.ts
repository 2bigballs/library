

export interface IViewBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  cover: string;
  content: string;
  rating: number;
  reviews: IViewBookReview[];
}

interface IViewBookReview {
  id: number;
  message: string;
  reviewer: string;
}
