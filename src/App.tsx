import {useState, useEffect} from 'react';
import {characters} from './api/characters';
import {Character} from './interfaces/character.interface';
import {CardComponent, Navbar, PaginationComponent} from './components';

function App() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    characters
      .getAll({page: currentPage})
      .then((res) => {
        setAllCharacters(res.data.results);
        setTotalPages(res.data.info.pages - 20);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  // useEffect(() => {
  //   characters
  //     .getById({id: 1})
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <main className="container flex flex-col justify-center items-center m-auto py-5">
      <Navbar />
      <section className="m-auto flex flex-col justify-center items-center pb-10 pt-10">
        <div className="grid grid-cols-1 gap-3 h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {allCharacters.map((el) => (
            <CardComponent
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.image}
              location={el.location}
            />
          ))}
        </div>
      </section>
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </main>
  );
}

export default App;
