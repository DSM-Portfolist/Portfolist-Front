export interface recentPortfolioType {
  thumbnail: string | null;
  introduce: string;
  portfolio_id: number;
  title: string;
}

export interface monthPortfolioType {
  id: number;
  thumbnail: string | null;
  title: string;
  introduce: string;
  name: string;
  total_touching: number;
}

export interface notificationType {
  name: string;
  id: number;
  type: "TOUCHING" | "COMMENT" | "RECOMMENT" | "P_ADD" | "P_MODIFY";
}

export interface SelectFieldListType {
  id: number;
}
