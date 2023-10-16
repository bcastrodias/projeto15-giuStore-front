import { useEffect, useContext, useState } from "react"
import styled from "styled-components"

export default function Home(){
    const { products, load } = useContext(Giu)

    if(products === undefined) {
        return <Load>{load}</Load>;
    }

    return(
        <ContainerHome>
            <Giu>

            </Giu>
        </ContainerHome>

    )
}    

const ContainerHome = styled.div`
    margin-top: 50px;
    display: flex;   
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
    //background-color: white;
`
const Load = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 20px;
`
const Giu = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 20px;
`