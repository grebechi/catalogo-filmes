'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import debounce from 'lodash/debounce';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movie';
import LoadingSpinner from '../LoadingSpinner';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !isFetchingMore
      ) {
        loadMoreMovies();
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetchingMore]);

  const getMovies = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: 'pt-BR',
          page,
        },
      });
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
    setIsLoading(false);
    setIsFetchingMore(false);
  };

  const loadMoreMovies = () => {
    setIsFetchingMore(true);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading && currentPage === 1) {
    return (
      <div className="loading-container">
        <LoadingSpinner size="80px" color="#6046ff" />
      </div>
    );
  }

  return (
    <>
      <ul className="movie-list">
        {movies.map((movie, index) => (
            <MovieCard 
                key={`${movie.id}-${index}`} // Combina o ID do filme com o índice para gerar uma chave única
                movie={movie}
            />
        ))}
      </ul>
      {isFetchingMore && (
        <div className="loading-container">
          <LoadingSpinner size="40px" color="#6046ff" />
        </div>
      )}
    </>
  );
}
