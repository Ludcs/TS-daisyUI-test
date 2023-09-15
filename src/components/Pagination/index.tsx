interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const PaginationComponent: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="join">
      {Array.from({length: totalPages}, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`join-item btn ${
            currentPage === index + 1 ? 'btn-active' : ''
          } `}
        >
          {index + 1}
        </button>
      ))}
    </div>
    // <div className="join">
    //   <button className="join-item btn">1</button>
    //   <button className="join-item btn">2</button>
    //   <button className="join-item btn btn-disabled">...</button>
    //   <button className="join-item btn">99</button>
    //   <button className="join-item btn">100</button>
    // </div>
  );
};
