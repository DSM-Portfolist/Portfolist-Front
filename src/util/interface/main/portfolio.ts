export interface recentPortfolioType {
  img: string;
  introduce: string;
  portfolio_id: number;
  title: string;
}

export interface monthPortfolioType {
  id: number;
  img: string | null;
  title: string;
  introduce: string;
  name: string;
  total_touching: number;
}
