import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';

export const ContainerCard = styled.div`
    padding:1rem;
    border-radius: 1rem;
    display:flex;
    justify-content:space-around;
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
    /* margin: 1rem; */

`

export const ContainerGenres = styled.div`
     display:flex;
        
        /* width: 300px;  */
        

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
export const ContainerPoster = styled.img`
    width: 250px;
    height:250px;
    margin-right: 1rem;
    
`
