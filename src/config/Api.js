export const URL = "https://api.openweathermap.org/data/2.5/weather";
export const API_KEY = "75c10f679078c5f263f4657b9e74798e";

const getWeather = async () => {
  const { data } = await axios.get(URL, {
    params: {
      q: userInfo.profile.city,
      units: "metric",
      APPID: API_KEY,
    },
  });
  setWeather(data);
};
