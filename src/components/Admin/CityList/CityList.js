import Pagination from "../../Paginator/Pagination";
import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import Dropdown from "react-dropdown";
import { useEffect, useMemo, useState } from "react";
import { getDataList } from "../../../utils";
import "./CityList.scss";
import "./../StyleAdmin.scss";
import BtnActions from "../BtnActions/BtnActions";

let PageSize = 3;
const CityList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filterPeriod = ["За неделю", "За месяц", "За год"];
  const [cityData, setCityData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cityData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, cityData]);

  useEffect(async () => {
    setIsFetching(true);
    const result = await getDataList(
      "http://api-factory.simbirsoft1.com/api/db/city"
    );
    setCityData(result?.data?.data);
    setIsFetching(false);
  }, []);
  return (
    <div className="list-admin">
      <MenuAdmin />
      <div className="admin__header-footer">
        <HeaderAdmin />
        {isFetching ? (
          <div className="admin-loader__modal">
            <div className="admin-loader"></div>
          </div>
        ) : (
          <div className="list-admin__box">
            <div className="list-admin__box__text">Города</div>
            <div className="list-admin__box__info">
              <div className="list-admin__box__info__selection">
                <div className="list-admin__box__info__selection__dropdown">
                  <Dropdown
                    options={filterPeriod}
                    arrowClassName="myArrowClassName"
                    value={filterPeriod[0]}
                    placeholder="Select an option"
                  />
                </div>
                <button className="list-admin__box__info__selection__button">
                  Применить
                </button>
              </div>
              <div className="admin-table">
                <table className="admin-table__table">
                  <thead>
                    <tr>
                      <th>Город</th>
                      <th>ID</th>
                      <th>Действие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTableData.map((el) => {
                      return (
                        <tr key={el?.id}>
                          <td>{el.name}</td>
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
                  totalCount={cityData.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        )}
        <FooterAdmin />
      </div>
    </div>
  );
};
export default CityList;
