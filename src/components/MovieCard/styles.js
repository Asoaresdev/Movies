import styled from 'styled-components'


export const ContainerCard = styled.div`
    padding:1rem;
    border-radius: 1rem;
    display:flex;
    background: #eceff1;
`

export const ContainerInfos = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    p{
        margin: 0.25rem;
    }
`

export const Director = styled.p`
    background:  #F7F7F7;
    font-size:1rem;
    padding: 0.5rem;
`

export const ContainerGenres = styled.div`
     display:flex;
     flex-wrap: wrap;

        p{
            color:gray;
            background:  #F7F7F7;
            margin-right: 0.5rem;
            padding: 0ch.5rem;
            justify-content: space-between;
            border: 0.5px solid lightgray;
            border-radius: 5px;
        }
`

export const ContainerPoster = styled.div`
    padding: 1rem;  
    margin-right: 3rem;
`

export const ContainerImgPoster = styled.img`
    display: block; 
    width: 50%;  
    height: auto;
    padding: 0 1rem 0 0;  
`
