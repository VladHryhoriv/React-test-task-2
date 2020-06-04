import React, { useState } from 'react'
import styled from 'styled-components';

const Active = styled.div`
    font-weight: bold;
    color: white;
    width: 100%;
    text-align: center;
    .notActive ,.active{
        padding: 0 5px;
        border: 2px solid black;
        margin: 0 5px;
        cursor: pointer;
        transition: .5s;
    }
    .active{
        background-color:black;
    }
    .notActive:hover{
        background-color: white;
    }
    .activePage{
        padding: 30px 0;
    }
    .prev,.next{
        cursor: pointer;
    }
`;

export const Paginator = ({ totalCount, size, currentPage, setCurrentPageThunk, portionSize = 3 }) => {
    let pagesCount = Math.ceil(totalCount / size);
    let pages = [];

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize
    let rightPortionNumber = portionNumber * portionSize

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <Active>
        <span className="prev" onClick={(e) => {
            if(currentPage - 1 !== 0){
                setCurrentPageThunk(currentPage - 1)}
        }}>&#8592;</span>
        {
            pages.map(p => {
                if (p < currentPage+3 && p > currentPage-3) {
                        return <span className={currentPage === p ? "active" : "notActive"}
                        onClick={(e) => { setCurrentPageThunk(p) }}>{p}</span >
                }
                else {
                    return null
                }
            })

        }
        <span className="next" onClick={(e) => {
               if (currentPage !== pagesCount)setCurrentPageThunk(currentPage + 1)
        }}>&#8594;</span>
    </Active>
}