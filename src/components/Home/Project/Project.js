import React, { useEffect, useState } from 'react';
import firebaseInit from '../../../Firebase/firebase.init';
import useFirebase from '../../../hooks/useFirebase';

firebaseInit()

const Project = (props) => {
    const { user } = useFirebase()
    const [projects, setProjects] = useState();
    useEffect(() => {
        fetch('https://still-sea-98860.herokuapp.com/projects')
            .then(response => response.json())
            .then(data => setProjects(data))

    }, [])
    const { _id, title, img } = props.project;
    const projectDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://still-sea-98860.herokuapp.com/projects/${id}`
            fetch(uri, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete')
                        const remainingUsers = projects?.filter(user => user?._id !== id)
                        setProjects(remainingUsers)
                    }
                })
        }
    }
    return (
        <div className="p-2 mb-5 bg-body card checkout-details col-lg-3 bg-color">
            <div>
                <img src={img} className="card-img-top" alt="" width="80" height="250" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {
                    user?.displayName && <button onClick={() => projectDelete(_id)} className='btn btn-outline-danger'>Delete</button>
                }
            </div>
        </div>

    );
};

export default Project;