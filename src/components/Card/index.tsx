import {Character} from '../../interfaces/character.interface';
import {Link} from 'react-router-dom';

export const CardComponent: React.FC<Character> = ({
  id,
  name,
  image,
  location,
}) => {
  return (
    <div className="card card-compact w-52 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Location: {location.name}</p>
        <div className="card-actions justify-center">
          <Link to={`/character/${id}`}>
            <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
