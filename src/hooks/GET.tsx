// hooks/GET.ts

import { useState, useEffect } from 'react';
import axios from 'axios';
import { PostType } from '@/interface';

const useGet = (API: string) => {
  const [post, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setPost(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API]);

  return { post, loading, error };
};

export default useGet;
