import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export function Photos() {
    const { albumId } = useParams();
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPhotoData(data);
            } catch (error) {
                console.log('Fetch error:', error);
            }
        };
        fetchData();
    }, [albumId]);

    return (
        <div>
            {photoData.map((photo) => (
                <div key={photo.id}>
                    <p>ID: {photo.id}</p>
                    <p>albumId: {photo.albumId}</p>
                    <p>Photo: {photo.url}</p>
                </div>
            ))}
            <Link to={`/`}>Back</Link>
        </div>
    );
}

