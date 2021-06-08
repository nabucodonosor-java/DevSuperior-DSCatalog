import React from "react"
import ContentLoader from "react-content-loader"
import { generateList } from "core/utils/list"

const HomeLoader = () => {
    const loaderItems = generateList(3);

    return (
        <>
            {loaderItems.map(item => (
               <ContentLoader 
               key={item}
               speed={2}
               width={2000}
               height={1400}
               viewBox="0 0 400 460"
               backgroundColor="#ecebeb"
               foregroundColor="#d6d2d2"
             >
                <rect x="12" y="67" rx="2" ry="2" width="140" height="10" /> 
                <rect x="12" y="83" rx="2" ry="2" width="140" height="10" /> 
                <rect x="261" y="75" rx="2" ry="2" width="128" height="99" /> 
                <rect x="11" y="111" rx="2" ry="2" width="119" height="9" /> 
                <rect x="11" y="125" rx="2" ry="2" width="119" height="9" /> 
                <rect x="9" y="162" rx="2" ry="2" width="144" height="26" />
             </ContentLoader> 
            ))}
        </>
    )
}

export default HomeLoader

