import React from "react";

const Car = ({children, color, year}: { children: string , color: string, 
    year: number }) => {
    
    const colorInfo = 
    color ? (<p>Couleur: { color}</p>) : (<p>Couleur: néant</p>)

    if(children) {
        return (
            <tr>
                <td><p>Marque: {children}</p></td>
                <p>Année: {year}</p>
                {colorInfo}
            </tr>
        );
    } else {
        return null;
    }

}

export default Car; 