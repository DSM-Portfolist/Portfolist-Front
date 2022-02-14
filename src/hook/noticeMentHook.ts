export function NoticeMent(type: string) {
  switch (type) {
    case "TOUCHING":
      return `님이 나의 포트폴리오를 터칭했어요!`;
    case "COMMENT":
      return `님이 나의 포트폴리오의 댓글을 작성했어요!`;
    case "RECOMMENT":
      return `님이 나의 포트폴리오의 댓글을 작성했어요!`;
    case "P_ADD":
      return `님의 포트폴리오가 게시되었어요!`;
    case "P_MODIFY":
      return `님의 포트폴리오가 수정되었어요!`;
  }
}
