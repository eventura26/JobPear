import Client from "./api";

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("/auth/register", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  try {
    const res = await Client.get("/auth/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetUserProfileType = async(user_id) => {
  try {
    const response = await Client.get(`/auth/${user_id}/profile-type`);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile type:", error);
    throw new Error("Error fetching profile type");
  }
}

