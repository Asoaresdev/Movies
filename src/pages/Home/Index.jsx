import React from 'react'

import MovieCard from '../../components/MovieCard/MovieCard'
import { BASE_URL, BASE_URL_Genres, BASE_URL_Filter } from '../../constants/urls'
import { useRequestData, useRequestDataSetState } from '../../hooks/useRequestData'

import * as S from './styles'


const pagination = [
    {number:1},
    {number:2},
    {number:3},
    {number:4},
    {number:5}
]

export default function Index() {

    const [genres, setGenres] = React.useState([])
    const [page, setPage] = React.useState(1)
    // const [filtered, setfiltered] = React.useState()
    const [listFilteredToShow , setListFilteredToShow] = React.useState([])



    const listMovies = useRequestData([], `${BASE_URL}?page=${page}`)
    const listGenres = useRequestData([], BASE_URL_Genres)
    const listFiltered = useRequestDataSetState([],`${ BASE_URL_Filter}${ genres.map((filtered) => {
        return (filtered)
    })}&page=${page}`, setListFilteredToShow)



    function changePagination (pagination){
        setPage(pagination)
    }

    // function clear(){
    //     setGenres([])
    // }

    // function filter() {
    //     setListFilteredToShow(listFiltered)
    // }

    function RemoveGenre(genreToRemove){
        if (genreToRemove) {
            console.log(`BEFORE: ${genres}`)
            const ixGenreToRemove = genres.indexOf(genreToRemove)
            const neWGenres = [...genres]
            neWGenres.splice(ixGenreToRemove,1)
            setGenres(neWGenres)
            setListFilteredToShow(listFiltered)
            console.log(`AFTER: ${neWGenres}`)
        }
    }
  

    console.log(listFilteredToShow);
         

    const cardMovies = listMovies.map((movie) => {
        return(
            <MovieCard 
            key={movie._id}
            id= {movie._id}
            post={movie.poster}
            title={movie.title}
            plot={movie.plot}
            directors={movie.directors}
            genre = {movie.genres}
            />
        )
    }) 
   

    const cardMoviesFiltered = listFilteredToShow.map((movie) => {
        return(
            <MovieCard 
            key={movie._id}
            id= {movie._id}
            post={movie.poster}
            title={movie.title}
            plot={movie.plot}
            directors={movie.directors}
            genre = {movie.genres}
            />
        )
    }) 

    const genresOptions = listGenres.map((item) => {
        return(
            <option Key={item} value={item}>{item}</option>
        )
    })

    const chooseGenres=(event)=>{
        if(genres.length >1){
            alert("Escolha somente dois gêneros")
        }else{
            setGenres([... genres, event.target.value])
            event.target.value=''
        }
    }
    return (
        <S.Container>
           <S.ConatinerSearch>
               <S.Select>
                    <select name="" id="" onChange={chooseGenres}>
                        <option value={""}>All Genres</option>
                        {genresOptions}
                    </select>
                </S.Select>
                    {genres.length > 0 &&
                <S.Choosed>
                    <h2>Generos escolhidos</h2>
                    <ul>
                    {genres.map((item) => {
                        return(
                            <button onClick={() => RemoveGenre(item)}><li key={item}>{item}</li>X</button>
                        )
                    })}
                    </ul>
                </S.Choosed> 
                }
            </S.ConatinerSearch>
            <S.ContainerHome>
                {listFilteredToShow.length > 0 ? cardMoviesFiltered  : cardMovies }

            </S.ContainerHome>
            <div>
                <ul>                
                    {pagination.map((page) => {
                    return (
                    <button type="button" onClick={() => changePagination(page.number)} >
                        <li key={page.number}>{page.number}</li>
                    </button>
                    )
                })}
                </ul>

            </div>
        </S.Container>
    )
}
