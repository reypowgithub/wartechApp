import axios from 'axios';
import useErrorStore from '../store/errorStore';

const api = axios.create({
  baseURL: 'https://bhgkx5m5-3000.asse.devtunnels.ms/api',
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const showError = useErrorStore.getState().showError;

    if (err.response) {
      const status = err.response.status;
      const message = err.response.data?.message || 'Unexpected error';
      showError({ status, message });
    } else if (err.request) {
      showError({ status: 'Network Error', message: 'No internet connection.' });
    } else {
      showError({ status: 'Error', message: err.message });
    }

    return Promise.reject(err); // still allow catch() in components
  }
);

export default api;