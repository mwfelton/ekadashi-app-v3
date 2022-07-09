import { ekadashiByYears } from './local-data'

export const ekadashiDateRequest = (year = "2022") => {
  return new Promise((resolve, reject) => {
    const year = ekadashiByYears[year];
    if (!year) {
      reject("not found");
    }
    resolve(year);
  });
};
ekadashiDateRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error");
  });
