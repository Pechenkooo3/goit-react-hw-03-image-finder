import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

import Loader from './Loader';
import { AppWrp } from './App.styled';
import { fetchPhotoApi } from './Api/FetchApi';

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {


  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    totalImages: 0,
  };

  handleOnSearch = searchQuery => {
    if (!searchQuery || searchQuery === this.state.searchQuery) {
      return;
    }
    this.setState({
      isLoading: true,
      searchQuery,
      page: 1,
      images: [],
      
    });
  };

  handleOnLoad = () => {
    this.setState(prevState => ({
      
    }));
  };

  fetchImages = async (searchQuery, page) => {

    try {
      
      const data = await fetchPhotoApi(searchQuery, page);

      const minifyData = data.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }
      );
      this.setState(prevState => ({
        images:
          [...prevState.images, ...minifyData],
        totalImages: data.totalHits ,
      }));

      
    } catch (error) {
    
      console.log(error);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      this.fetchImages(this.state.searchQuery, this.state.page);
    }
  }

  render() {
    const { images, isLoading,  totalImages } = this.state;
    const totalPage = images.length / totalImages;
    return (
      <AppWrp>
        <Searchbar onSubmit={this.handleOnSearch} />
        <ImageGallery images={images} />
        {totalPage < 1 && <Button onClick={this.handleOnLoad} />}
        {isLoading && <Loader />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppWrp>
    );
  }
}
