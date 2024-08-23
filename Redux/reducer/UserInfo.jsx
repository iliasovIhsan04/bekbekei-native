import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "../../components/api/AllRequest";
import { authUser } from "../slice/userInfoSlice";

export const fetchUserInfo = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("tokenActivation");
    if (token) {
      const response = await instance.get(`/auth/user-info`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(authUser(response.data));
    }
  } catch (error) {
    console.error("Не удалось получить информацию о пользователе", error);
  }
};
