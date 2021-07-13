import axios from "axios";

export const getData = async (url) => {
  try {
    const result = await axios.get(
      `https://cors-anywhere.herokuapp.com/${url}`,
      {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          "Access-Control-Allow-Origin": "*", // * или ваш домен
          "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      }
    );

    return result;
  } catch (error) {
    throw error;
  }
};

export const postData = async (props) => {
  try {
    debugger;
    const result = await axios.post(
      `${props.url}`,
      {
        orderStatusId: `${props.orderStatusId}`,
        cityId: `${props.cityId}`,
        pointId: `${props.pointId}`,
        carId: `${props.carId}`,
        color: "blue",
        dateFrom: 0,
        dateTo: 0,
        rateId: "5fd910f2935d4e0be16a3c40",
        price: 0,
        isFullTank: true,
        isNeedChildChair: true,
        isRightWheel: true,
      },
      {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data?.data;
    //console.log("👉 Returned data:", result?.data?.data);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e.response}`);
  }
};
