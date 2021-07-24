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
    const result = await axios.post(
      `${props.url}`,
      {
        orderStatusId: `${props.orderStatusId}`,
        cityId: `${props.cityId}`,
        pointId: `${props.pointId}`,
        carId: `${props.carId}`,
        color: `${props.color}`,
        dateFrom: props.dateFrom,
        dateTo: props.dateTo,
        rateId: props.rate,
        price: props.price,
        isFullTank: props.isFullTank,
        isNeedChildChair: props.isNeedChildChair,
        isRightWheel: props.isRightWheel,
      },
      {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data?.data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e.response}`);
  }
};

export const putData = async (props) => {
  try {
    const result = await axios.patch(
      `https://cors-anywhere.herokuapp.com/${props.url}`,
      {
        orderStatusId: `${props.orderStatusId}`,
      },
      {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data?.data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e.response}`);
  }
};

export const getDate = ({ fromDate, toDate }) => {
  debugger;
  if (fromDate !== "" && toDate !== "" && toDate - fromDate >= 0) {
    const dateDifference = toDate - fromDate;
    const totalSeconds = dateDifference / 1000;
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    return days + "д" + hours + "ч";
  }
};
