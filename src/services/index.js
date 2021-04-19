import data from '../data';

export const setDataInLocalStorage = () => {
  localStorage.setItem('dataCards', JSON.stringify(data));
}

export const dataRescuedFromLocalStorage = JSON.parse(localStorage.getItem('dataCards'));

export const rescueLocalStorageToProvider = async(dataName, callback) => {
    const storage = await JSON.parse(localStorage.getItem(dataName));
    callback(storage);
};
