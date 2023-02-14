import axios from 'axios';

export const PER_PAGE = 12;
export const USER_KEY = '31999586-240a3670e2fb6198507061565';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: USER_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
});

export const fetchPhotoApi = async (searchValue, pageNumber = 1) => {
  try {
    const response = await axios.get(
      `?q=${searchValue}&page=${pageNumber}&${searchParams}}&per_page=${PER_PAGE}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
