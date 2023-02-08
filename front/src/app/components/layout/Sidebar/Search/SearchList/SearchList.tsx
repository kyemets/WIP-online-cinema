import Link from 'next/link';
import { FC } from 'react'
import { getMovieUrl } from '../../../../../config/url.config';
import { IMovie } from '../../../../../shared/types/movie.types';
import styles from './SearchList.module.scss'
import Image from 'next/image';



const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
    return (
        <div className={styles.list}>
            {movies.length ? movies.map(movie => (
                <Link key={movie._id} href={getMovieUrl(movie.slug)}>
                    <a>
                        <Image
                            src={movie.posters}
                            width={50}
                            height={50}
                            alt={movie.title}
                            objectFit='cover'
                            objectPosition='top'
                            dragabble={false}
                        />
                        <span>{movie.title}</span>
                    </a>
                </Link>
            )) : <div className='text-white text-center my-4'>Movies not found</div>}
        </div>
    )
}

export default SearchList;