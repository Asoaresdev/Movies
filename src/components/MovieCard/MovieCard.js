import React from 'react'

import * as S from './styles'


export default function MovieCard({ post, title, year, plot, directors, genre }) {
  return (
    <S.ContainerCard >
      <S.ContainerImgPoster  alt="Cartaz do filme" src={ post } />
      <S.ContainerInfos>
        <h2>{ title } </h2>
        
        <p>{ plot } <br /><b>Year</b>: { year }</p>
        <p>Director:</p>
        
        {directors && directors.map((item) => (<S.Director key={ item }>{ item }</S.Director>))}
        
        <S.ContainerGenres>
          {genre && genre.map((item) => (<p key={ item} >{ item } </p>))}
        </S.ContainerGenres>
      </S.ContainerInfos>
    </S.ContainerCard>
  )
}


