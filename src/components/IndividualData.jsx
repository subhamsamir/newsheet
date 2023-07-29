import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.fpoName}</th>
            <th>{individualData.name}</th>
            <th>{individualData.PhoneNo}</th>
            <th>{individualData.State}</th>

         
            <th>{individualData.district}</th>
            <th>{individualData.district}</th>
            <th>{individualData.LandArea}</th>
            <th>{individualData.cropsSowing}</th>


            <th>{individualData.coverCrops}</th>
            <th>{individualData.intercrops}</th>
            <th>{individualData.location}</th>
            <th>{individualData.objective}</th>

           
            <th>{individualData.nitrogenFixing}</th>
            <th>{individualData.villagePractices}</th>

        </tr>
    )
}
