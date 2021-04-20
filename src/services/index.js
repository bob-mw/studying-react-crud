import data from '../data';

export const dataRescuedFromLocalStorage = JSON.parse(localStorage.getItem('dataCards'));

export const setDataInLocalStorage = () => {
  if (dataRescuedFromLocalStorage) return;
  localStorage.setItem('dataCards', JSON.stringify(data));
}

export const rescueLocalStorageToProvider = async(dataName, callback) => {
  const storage = await JSON.parse(localStorage.getItem(dataName));
  callback(storage);
};

