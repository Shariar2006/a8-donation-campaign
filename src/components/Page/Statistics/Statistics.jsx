
import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Statistics = () => {

    const [localStorageData, setLocalStorageData] = useState()

    useEffect(() => {

        const donateItem = JSON.parse(localStorage.getItem('donate'))
        
        setLocalStorageData(donateItem)


     }, [])

     console.log(localStorageData)
     

    //  const redValue = localStorageData.length;
    //  console.log(redValue)

    return (
        <div>
            <PieChart className='w-1/3 mx-auto mt-16'
                data={[
                    { title: 'One', value: 12, color: '#ff444a' },
                    { title: 'Two', value: 2, color: '#00C49F' },
                ]}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                labelStyle={{
                    fill: 'white',
                    fontSize: '6px'
                }}
            />;
        </div>
    );
};

export default Statistics;