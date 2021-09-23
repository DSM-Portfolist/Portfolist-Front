export function NoticeMent(type: string, name: string) {
  switch (type) {
    case "TOUCHING":
      return `${name}님이 나의 포트폴리오를 터칭했어요!`;
    case "COMMENT":
      return `${name}님이 나의 포트폴리오의 댓글을 작성했어요!`;
    case "RECOMMENT":
      return `${name}님이 나의 포트폴리오의 댓글을 작성했어요!`;
    case "P_ADD":
      return `${name}님의 포트폴리오가 게시되었어요!`;
    case "P_MODIFY":
      return `${name}님의 포트폴리오가 수정되었어요!`;
  }
}
