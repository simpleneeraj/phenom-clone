import axios from 'axios';

const endpoint = process.env.NEXT_PUBLIC_API_URL;

export const getAllRoles = async <D>(slug: string): Promise<D> => {
  // We can use axios to make a request to the API, we can also use fetch
  const res = await axios.get(`${endpoint}/roles?slug=${slug}`);
  return res.data;
};
