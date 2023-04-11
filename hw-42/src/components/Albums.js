import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export function Albums() {
    const { userId } = useParams();
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAlbumData(data);
            } catch (error) {
                console.log('Fetch error:', error);
            }
        };
        fetchData();
    }, [userId]);

    return (
        <div>
            {albumData.map((user) => (
                <div key={user.id}>
                    <p>ID: {user.id}</p>
                    <p>userId: {user.userId}</p>
                </div>
            ))}
            <Link to={`/`}>Back</Link>
        </div>
    );
}