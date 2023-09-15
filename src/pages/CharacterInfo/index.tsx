import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {characters} from '../../api/characters';
import {Character} from '../../interfaces/character.interface';

export const CharacterInfo: React.FC = () => {
  const [characterByID, setCharacterByID] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const {id} = useParams();

  useEffect(() => {
    setTimeout(() => {
      characters
        .getById({id})
        .then((res) => setCharacterByID(res.data))
        .then(() => setLoading(false))
        .catch((err) => console.error(err));
    }, 2000);
  }, [id]);

  return (
    <div className="w-full h-screen m-auto flex justify-center items-center">
      {loading ? (
        <span className="loading loading-infinity loading-lg"></span>
      ) : (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={characterByID?.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{characterByID?.name}</h1>
              <p className="py-6">{characterByID?.gender}</p>
              <p className="py-6">{characterByID?.location.name}</p>
              <p className="py-6">{characterByID?.species}</p>
              <Link to={'/'}>
                <button className="btn btn-primary">Go back</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
