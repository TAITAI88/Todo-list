import React from "react";
import { useEffect } from "react";

const ItemList = ({
  list,
  totalItem,
  countChecked,
  setList,
  setTotalItem,
  setPercent,
  setCountChecked,
}) => {
  const deleteHandler = (id) => {
    // let 宣告一個 deleteList 用來裝現有的 list , 並且用 filter 透過 id 篩選掉該 Item，用 setList 更新 list，並
    let deleteList = list.filter((item) => item.id !== id);
    setList(deleteList);
    console.log(deleteList);

    //計算減少後的 Item 總個數，後面算百分比時用來當分母
    setTotalItem(deleteList.length);

    //判斷若有勾選則 countChecked - 1
    list.forEach((item) => {
      if (item.id === id && item.checked) {
        setCountChecked((prev) => prev - 1);
      }
    });
  };

  //判斷 checkBox 是否有打勾
  const checkHandler = (id) => {
    const checkedList = list.map((item) => {
      if (item.id === id) {
        if (item.checked) {
          item.checked = false;
          setCountChecked((prev) => prev - 1);
        } else {
          item.checked = true;
          setCountChecked((prev) => prev + 1);
        }
      }
      return item;
    });
    setList(checkedList);
  };

  //用 useEffect 將更新完的 state(totalItem,countChecked) 在裡面做百分比的計算 ， 並用 setPercent 將 percent 的值更新
  useEffect(() => {
    setPercent(Math.round((countChecked / totalItem) * 100));
  }, [countChecked, totalItem]);

  //透過 map 方法將 list 存的 Item 個別印出來 ，= 並給予該 Item 專屬的 ID
  return (
    <div className="itemList">
      {Array.from(list).map((item) => {
        return (
          <div className="item" key={item.id}>
            <input
              type="checkbox"
              name="done"
              onChange={() => checkHandler(item.id)}
            />
            <div
              className="content"
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.content}
            </div>
            <button
              className="delBtn"
              onClick={() => deleteHandler(item.id)}
            ></button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
