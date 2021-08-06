import { useEffect, useMemo, useState } from "react";
import Dropdown from "react-dropdown";
import { getDataList } from "../../../utils";
import Pagination from "../../Paginator/Pagination";
import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import "./CarList.scss";
import "./../StyleAdmin.scss";
import BtnActions from "../BtnActions/BtnActions";

let PageSize = 1;
const CarList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filterStatus = ["Эконом", "Премиум", "Все"];
  const filterModel = ["Elantra", "Ford", "Lada"];
  const [carData, setCarData] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return carData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, carData]);

  useEffect(async () => {
    debugger;
    const result = await getDataList(
      "http://api-factory.simbirsoft1.com/api/db/car"
    );
    setCarData(result?.data?.data);
    debugger;
  }, []);
  return (
    <div className="order-list-admin">
      <MenuAdmin />
      <div className="admin__header-footer">
        <HeaderAdmin />
        <div className="order-list-admin__box">
          <div className="order-list-admin__box__text">Автомобили</div>
          <div className="order-list-admin__box__info">
            <div className="order-list-admin__box__info__selection">
              <div className="order-list-admin__box__info__selection__dropdown">
                <Dropdown
                  options={filterStatus}
                  arrowClassName="myArrowClassName"
                  value={filterStatus[0]}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={filterModel}
                  arrowClassName="myArrowClassName"
                  value={filterModel[0]}
                  placeholder="Select an option"
                />
              </div>
              <button className="order-list-admin__box__info__selection__button">
                Применить
              </button>
            </div>
            {/* {currentTableData.map((el) => {
              return (
                <div className="car-list-admin__box_info">
                  <img
                    src={
                      "https://api-factory.simbirsoft1.com" +
                      el?.thumbnail?.path
                    }
                    className="order-list-admin__box__info__order__img"
                  />
                  <div className="car-list-admin__box_info__details">
                    <div>{el?.name}</div>
                    <div>{el?.number}</div>
                    <div>{el?.categoryId?.name}</div>
                  </div>
                  <div>
                    {" "}
                    {el?.colors.map((el) => {
                      return <div>{el} </div>;
                    })}
                  </div>
                  <div>
                    {el?.priceMin}-{el?.priceMax}{" "}
                  </div>
                  <BtnActions />
                </div>
              );
            })} */}
            <div className="admin-table">
              <table className="admin-table__table">
                <tbody>
                  {currentTableData.map((el) => {
                    return (
                      <tr key={el.id}>
                        <td>
                          <img
                            src={
                              "https://api-factory.simbirsoft1.com" +
                              el?.thumbnail?.path
                            }
                            className="order-list-admin__box__info__order__img"
                          />
                        </td>
                        <td>
                          <div className="car-list-admin__box_info__details">
                            <div>{el?.name}</div>
                            <div>{el?.number}</div>
                            <div>{el?.categoryId?.name}</div>
                            <div>
                              {el?.priceMin}-{el?.priceMax}
                            </div>
                          </div>
                        </td>
                        <td>
                          {el?.colors.map((el) => {
                            return <div>{el} </div>;
                          })}
                        </td>

                        <td>
                          <BtnActions />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="admin__pagination">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={carData.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
        <FooterAdmin />
      </div>
    </div>
  );
};
export default CarList;
