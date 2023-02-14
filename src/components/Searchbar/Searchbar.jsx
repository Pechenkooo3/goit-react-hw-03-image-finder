import {
  SearchbarWrp,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import {  toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.search.value.trim() === '') {
      return toast.error('Please enter name', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }); 
    }
      onSubmit(e.target.search.value.trim());
    e.currentTarget.reset();
  };
  return (
    <SearchbarWrp>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>
            <IconContext.Provider value={{ color: 'white', size: '2em',
  }}>
              <BsSearch/>
            </IconContext.Provider>
          </SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Search images"
        />
      </SearchForm>
    </SearchbarWrp>
  );
};

export default Searchbar;
