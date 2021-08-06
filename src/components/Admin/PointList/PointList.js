import Pagination from "../../Paginator/Pagination";
import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import Dropdown from "react-dropdown";
import { useEffect, useMemo, useState } from "react";
import { getDataList } from "../../../utils";
import "./PointList.scss";
import "./../StyleAdmin.scss";
import BtnActions from "../BtnActions/BtnActions";

let PageSize = 3;
const PointList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filterPeriod = ["За неделю", "За месяц", "За год"];
  const filterCity = ["Ульяновск", "Санкт-Петербугр", "Краснодар"];
  const [pointData, setPointData] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return pointData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pointData]);

  useEffect(async () => {
    debugger;
    const result = await getDataList(
      "http://api-factory.simbirsoft1.com/api/db/point"
    );
    setPointData(result?.data?.data);
    debugger;
  }, []);
  return (
    <div className="order-list-admin">
      <MenuAdmin />
      <div className="admin__header-footer">
        <HeaderAdmin />
        <div className="order-list-admin__box">
          <div className="order-list-admin__box__text">Города</div>
          <div className="order-list-admin__box__info">
            <div className="order-list-admin__box__info__selection">
              <div className="order-list-admin__box__info__selection__dropdown">
                <Dropdown
                  options={filterPeriod}
                  arrowClassName="myArrowClassName"
                  value={filterPeriod[0]}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={filterCity}
                  arrowClassName="myArrowClassName"
                  value={filterCity[0]}
                  placeholder="Select an option"
                />
              </div>
              <button className="order-list-admin__box__info__selection__button">
                Применить
              </button>
            </div>
            <div className="admin-table">
              <table className="admin-table__table">
                <thead>
                  <tr>
                    <th>Город</th>
                    <th>Пункт</th>
                    <th>ID</th>
                    <th>Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map((el) => {
                    return (
                      <tr key={el?.id}>
                        <td>{el?.cityId?.name && el.cityId.name}</td>
                        <td>{el.address}</td>
                        <td>{el.id}</td>
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
                totalCount={pointData.length}
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
export default PointList;
