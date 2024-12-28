'use client'

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movie';
import LoadingSpinner from '../LoadingSpinner';

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMovies();
    },[])

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
            },
        })
        .then(response => {
            setMovies(response.data.results);
        })
        .catch(error => {
            console.error('Erro ao buscar filmes:', error);
        });
        setIsLoading(false);
    };

    if(isLoading){
        return(
            <div className='loading-container'>
                <LoadingSpinner size='80px' color='#6046ff' />
            </div>
        )
    }
    
    return (
    <ul className="movie-list">
        {movies.map((movie) =>
            <MovieCard 
                key={movie.id} 
                movie={movie}
            />
        )}
        
    </ul>

  )
}
