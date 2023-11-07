import axios from 'axios'

const baseURL = 'http://localhost:3000/'

const urls = {
    posts: 'posts', // Define the URL for fetching posts data
    user : 'user',
    bookmarks : 'bookmarks'
}


export const callAPI = async (endpoint , method , params = {} , headers = {} , data = {}) => {
    const options = {
        baseURL,
        url : endpoint,
        method,
        params,
        headers,
        data

    }

    const response = await axios(options);
    return response?.data
}


export const registerUser = (userData) => {
   
    console.log(urls.register , "<<< METHOD URL REGISTER")
    return callAPI(urls.user , 'POST' , {} , {} , userData);
   
}

export const loginUser = (email, password) => {
    const userData = { email, password };
    console.log(userData , 'Hasil User Data Domain API')
    return callAPI(urls.user, 'GET', {}, {}, userData);
  };
  
export const fetchAllPosts = () => {
    return callAPI(urls.posts, 'GET');
  };

  export const fetchAllPostsProfile = () => {
    return callAPI(urls.posts, 'GET');
  };

export const addNewPost = (postData) => {
    return callAPI(urls.posts, 'POST', {}, {}, postData);
  };


export const fetchPostById = (id) => {
  return callAPI(`${urls.posts}/${id}`, 'GET');
};

export const getBookmarks = () => {
  return callAPI('bookmarks', 'GET'); 
};

// api.js
export const addBookmarkAPI = (bookmarkData) => {
  return callAPI(urls.bookmarks, 'POST', {}, {}, bookmarkData);
};


export const removeBookmarkAPI = (postId) => {
  return callAPI(`${urls.bookmarks}/${postId}`, "DELETE"); 
};