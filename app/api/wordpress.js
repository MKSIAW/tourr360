import axios from 'axios';

const BASE_URL = 'http://localhost/tourist/wp-json/wp/v2/posts';

// Function to fetch posts from the WordPress API
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Function to fetch a single post by ID
export const fetchPostById = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};


