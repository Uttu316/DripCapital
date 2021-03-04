import axios from "axios";

const baseUrl = "https://cdn.contentful.com";

const accessToken = "IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE";

const spaceId = "rt3kkpldvuz8";

const enviromentid = "master";

export const getBlogData = () => {
  const url =
    baseUrl +
    `/spaces/${spaceId}/environments/${enviromentid}/entries?access_token=${accessToken}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        //console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
