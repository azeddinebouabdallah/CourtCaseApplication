interface IPaginate {
    page: number;
    pageSize: number;
  }
  
  const paginate = ({ page, pageSize }: IPaginate) => {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    return {
      offset,
      limit,
    };
  };
  
  export default paginate;
  