import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {

    const [localStorageData, setLocalStorageData] = useState([])

    const loaderData = useLoaderData()

    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donate'))
        if (donateItem === null) {
            setLocalStorageData([])
        }
        else {
            setLocalStorageData(donateItem)
        }
    }, [])

    const loaderDataLength = loaderData.length

    const redValue = localStorageData.length;

    const greenValue = loaderDataLength - redValue

    return (
        <div className='flex items-center'>
            <PieChart className='w-1/3 mx-auto mt-16'

                data={[
                    { title: 'Total Donation', value: greenValue, color: '#ff444a' },
                    { title: 'Your Donation', value: redValue, color: '#00C49F' },
                ]}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}

                labelStyle={{
                    fill: 'white',
                    fontSize: '6px'
                }}
            />
            <div>
                <p>  <span className='w-[100px] bg-[#ff444a] text-[#ff444a] rounded-full'>"""</span> Total donation</p>
                <p>  <span className='w-[100px] bg-[#00C49F] text-[#00C49F] rounded-full'>"""</span> Your donation</p>
            </div>
        </div>
    );
};

export default Statistics;