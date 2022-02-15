import React from "react";
import deleteButtonX from "../../../../util/assets/icon/deleteButtonX.svg";
import { MinusButton } from "../../../../util/assets";
import { ToastError } from "../../../../hook/toastHook";
import * as S from "./style";

const TextContainer = (props: any) => {
  const { certificateList, setCertificateList } = props;

  const onChangeTitle = (e: any, index: number) => {
    //제목 onChange Event
    setCertificateList(
      certificateList.map((item: any, i: number) => {
        if (i === index) {
          return { ...certificateList[index], title: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const deleteCertificateList = (index: number) => {
    //컨테이너 삭제 함수
    if (certificateList.length <= 1) {
      ToastError("1개 이상의 리스트는 있어야 합니다.");
    } else {
      setCertificateList(
        certificateList?.filter((value: any, i: number) => {
          return i !== index;
        })
      );
    }
  };

  const onChangeContent = (e: any, parents_index: number, index: number) => {
    //내용 onChange Event
    setCertificateList(
      certificateList.map((item: any, i: number) => {
        /* certificateList[parents_index].certificate_list */
        if (i === parents_index) {
          let newArr = item.certificate_list.map(
            (value: any, child_index: number) => {
              if (child_index === index) {
                return e.target.value;
              } else {
                return value;
              }
            }
          );
          return {
            ...certificateList[parents_index],
            certificate_list: newArr,
          };
        } else {
          return item;
        }
      })
    );
  };

  const addContentList = (parents_index: number) => {
    //내용 추가하는 함수
    setCertificateList(
      certificateList.map((item: any, i: number) => {
        if (i === parents_index) {
          let newList = [...item.certificate_list, ""];
          return {
            ...certificateList[parents_index],
            certificate_list: newList,
          };
        } else {
          return item;
        }
      })
    );
  };

  const deleteContent = (parents_index: number, index: number) => {
    //내용 삭제하는 함수
    if (certificateList[parents_index].certificate_list.length <= 1) {
      ToastError("1개 이상의 리스트는 있어야 합니다.");
    } else {
      let newList = certificateList[parents_index].certificate_list?.filter(
        (value: any, i: number) => {
          return i !== index;
        }
      );
      setCertificateList((certificateList: any) => [
        {
          ...certificateList[parents_index],
          certificate_list: newList,
        },
      ]);
    }
  };

  return (
    <div>
      {certificateList?.map((list: any, index: number) => {
        const { certificate_list, title } = list;
        return (
          <S.MapWrapper key={index}>
            <S.TitleWrapper>
              <input
                type="text"
                placeholder="제목을 입력해 주세요."
                onChange={(e) => {
                  onChangeTitle(e, index);
                }}
                defaultValue={title}
              />
              <img
                src={deleteButtonX}
                style={{ width: "27px", height: "27px", marginLeft: "5px" }}
                onClick={() => {
                  deleteCertificateList(index);
                }}
                alt=""
              />
            </S.TitleWrapper>
            <>
              {certificate_list?.map((item: any, i: number) => {
                return (
                  <div className="infoContainer">
                    <S.InputBox key={i}>
                      <input
                        id="inputContent"
                        onChange={(e) => {
                          onChangeContent(e, index, i);
                        }}
                        placeholder="내용을 입력해주세요."
                        defaultValue={item}
                      />
                      <img
                        src={MinusButton}
                        alt=""
                        onClick={() => {
                          deleteContent(index, i);
                        }}
                      />
                    </S.InputBox>
                    {i + 1 < certificate_list.length ? (
                      ""
                    ) : (
                      <span
                        className="addContent"
                        onClick={() => {
                          addContentList(index);
                        }}
                      >
                        내용 추가
                      </span>
                    )}
                  </div>
                );
              })}
            </>
          </S.MapWrapper>
        );
      })}
    </div>
  );
};

export default TextContainer;
