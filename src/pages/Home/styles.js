import styled, { css } from 'styled-components'


export const Container = styled.div`
    max-width: 100vw;
    padding: 1rem;
    background: #F7F7F7;
    

`
export const ContainerHome = styled.div`
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    gap: 1rem;
    max-width: 100vw;
    justify-content: center;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;

  }
`


export const ConatinerSearch = styled.div`
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    width: 25vw;
    padding: 1rem;
    width: 25vw;
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
`
export const Select = styled.div`
    padding: 2rem;
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    margin: 0 auto;
    

    select{
        height: 2rem;
        option{
            margin: 10.5rem;
            width: 10vw;
            }
    }
`

export const Choosed = styled.div`
    ul{
        button{
            border: none;
            cursor: pointer;

            ${({ isActive }) =>
            isActive &&
            css`
             {
                background: green;
            }
            `}

        }
        li{
            list-style: none;
            text-transform: uppercase;
            display: inline-flex;
            padding: 0.5rem;
        }
    }
`

export const Button = styled.button`
        border: none;
        cursor: pointer;

`

export const ContainerButtons = styled.div`
    button{
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        li{
            list-style: none;
        }
    }
    a{
        text-decoration: none;
    }
`

export const PageIndicator = styled.h4`
    text-align: start;
    font-weight: 400;
`