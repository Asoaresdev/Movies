import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (initialData, url) => {
    const [ data, setData ] = useState(initialData)

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) =>{
                alert(`Algo deu errado, tente novamente. Erro:${error}`)
            } )
        }, [url])
        return data
}

export const useRequestDataSetState = (initialData, url, setStateFunc) => {
    const [ data, setData ] = useState(initialData)

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
                setStateFunc(response.data)
            })
            .catch((error) =>{
                alert(`Algo deu errado, tente novamente. Erro:${error}`)
            } )
        }, [url, setStateFunc ])
        return data
}