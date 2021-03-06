export interface recentPortfolioType {
  thumbnail: string;
  introduce: string;
  portfolio_id: number;
  title: string;
}

export interface monthPortfolioType {
  id: number;
  thumbnail: string;
  title: string;
  introduce: string;
  name: string;
  total_touching: number;
}

export interface notificationType {
  portfolio_id: number;
  name: string;
  id: number;
  type: "TOUCHING" | "COMMENT" | "RECOMMENT" | "P_ADD" | "P_MODIFY";
}

export interface SelectFieldListType {
  id: number;
}
