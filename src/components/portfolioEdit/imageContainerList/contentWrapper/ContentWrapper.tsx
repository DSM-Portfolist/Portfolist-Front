import { useEffect, useRef } from "react";
import { MinusButton } from "../../../../util/assets";
import * as S from "./style";
import { ToastError } from "../../../../hook/toastHook";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  container_list_modify_atom,
  portfolioModifyList,
} from "../../../../modules/atom/portfolioEdit";
import TextareaAutosize from "react-textarea-autosize";

const ContentWrapper = (props: any) => {
  const { parent_index } = props;
  const [containerListModify, setContainerListModify] = useRecoilState(
    container_list_modify_atom
  );
  const portfolioModifyArr = useRecoilValue(portfolioModifyList);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setContainerListModify(portfolioModifyArr.container_list);
  }, [portfolioModifyArr.container_list, setContainerListModify]);

  const onChangeContainerTextList = (
    e: any,
    parent_index: number,
    index: number
  ) => {
    const { name, value } = e.target;
    setContainerListModify(
      containerListModify.map((item: any, i: number) => {
        if (parent_index === i) {
          let newList = containerListModify[
            parent_index
          ].container_text_list.map((child_item: any, child_index: number) => {
            if (child_index === index) {
              return {
                ...child_item,
                [name]: value,
              };
            } else {
              return child_item;
            }
          });
          return {
            ...item,
            container_text_list: newList,
          };
        } else {
          return item;
        }
      })
    );
  };

  const DeleteContainerText = (parent_index: number, index: number) => {
    if (containerListModify[parent_index].container_text_list.length <= 1) {
      ToastError("삭제할 수 없습니다");
    } else {
      let newList = containerListModify[
        parent_index
      ].container_text_list?.filter((value: any, i: number) => {
        return i !== index;
      });
      setContainerListModify((containerListModify: any) => [
        { ...containerListModify[parent_index], container_text_list: newList },
      ]);
    }
  };

  const addContainerText = (parent_index: number) => {
    setContainerListModify(
      containerListModify.map((value: any, i: number) => {
        if (parent_index === i) {
          return {
            ...containerListModify[parent_index],
            container_text_list: [
              ...containerListModify[parent_index].container_text_list,
              {
                box_title: "",
                box_content: "",
              },
            ],
          };
        } else {
          return value;
        }
      })
    );
  };

  return (
    <S.ContentContainer>
      {containerListModify[parent_index].container_text_list?.map(
        (value: any, index: number) => {
          const { box_content, box_title } = value;

          return (
            <S.BoxItem key={index}>
              <div className="Title">
                <input
                  placeholder="제목을 입력해주세요."
                  name="box_title"
                  defaultValue={box_title}
                  onChange={(e: any) =>
                    onChangeContainerTextList(e, parent_index, index)
                  }
                />
                <img
                  src={MinusButton}
                  alt="MinusButton"
                  onClick={() => DeleteContainerText(parent_index, index)}
                />
              </div>
              <TextareaAutosize
                ref={textareaRef}
                placeholder="내용을 입력해주세요."
                minRows={3}
                name="box_content"
                defaultValue={box_content}
                //onInput={handleResizeHeight}
                onChange={(e: any) =>
                  onChangeContainerTextList(e, parent_index, index)
                }
              />
              {index + 1 <
              containerListModify[parent_index].container_text_list.length ? (
                ""
              ) : (
                <S.AddContentIcon
                  onClick={() => addContainerText(parent_index)}
                >
                  내용 추가
                </S.AddContentIcon>
              )}
            </S.BoxItem>
          );
        }
      )}
    </S.ContentContainer>
  );
};

export default ContentWrapper;
