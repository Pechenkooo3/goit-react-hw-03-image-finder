import {
  SearchbarWrp,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.search.value.trim());
    e.currentTarget.reset();
  };
  return (
    <SearchbarWrp>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
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
