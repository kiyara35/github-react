import React from 'react';
import './Output.css'

const Output = ({data}) => {
    return (
        <div className='output'>
            {
                Object.keys(data).length < 1 ?
                null
                :
                <>
                <img src={data.avatar_url} alt=""/>
                <h3>{data.login}</h3>
                <p>Followers : {data.followers}</p>
                <p>Following : {data.following}</p>
                <p>Repositories : {data.public_repos}</p>
                </>
            }


        </div>
    );
};

export default Output;