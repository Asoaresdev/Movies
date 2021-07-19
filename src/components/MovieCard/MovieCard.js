import React from 'react'

import * as S from './styles'


export default function MovieCard({ post, title, plot, directors, genre }) {
  return (
    <S.ContainerCard >
      
      <S.ContainerPoster  alt="Cartaz do filme" src={ post } />
      <S.ContainerInfos>
        <h2>{ title } </h2>
        <p>{ plot }</p>
        <p>Director:</p>
        
        {directors && directors.map((item) => (<S.Director key={ item }>{ item }</S.Director>))}
        
        <S.ContainerGenres>
          {genre && genre.map((item) => (<p key={ item} >{ item } </p>))}
        </S.ContainerGenres>
      </S.ContainerInfos>
    </S.ContainerCard>
  )
}


