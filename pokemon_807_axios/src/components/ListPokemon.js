import React from 'react';



const ListPokemon = ({list}) => {  

    return(
        list.map((item, i)=>(
        <div class="first_letter">
            <div key={i}>
                <ul>
                    <li>{item.name}</li>
                    <a href={item.url}>Details</a>
                </ul>
            </div>
        </div>
        ))
    )
}


export default ListPokemon;