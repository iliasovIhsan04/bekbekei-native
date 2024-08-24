import { instance } from "../../components/api/AllRequest";
import { productsAll } from "../slice/ProductSlice";

export const ProducRedux = () => async (dispatch) => {
  try {
    const response = await instance("/product/categories");
    dispatch(productsAll(response.data));
  } catch (error) {
    console.error("Не удалось получить информацию о пользователе", error);
  }
};
