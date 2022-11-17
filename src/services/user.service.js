async function getUsers({ page, perPage, limit }) {
  function paginate(array: any, page_size: number, page_number: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  var arr = [1, 2, 3, 4, 5, 6];

  const options = {
    //page: parseInt(req.query.page) || 1,
    page: 1,
    limit: 10
    //limit: parseInt(req.query.limit) || 10,
    //customLabels: servCustomLabels,
  };

  let prev_page = 0;
  let next_page = 0;
  let h_p_p = null;
  let h_n_p = null;
  let page_count = Math.ceil(arr.length / options.limit);

  if (options.page >= page_count) {
    // 2 3
    next_page = 0;
  }
  if (options.page >= 1 && options.page < page_count) {
    next_page = options.page + 1;
    h_n_p = true;
  } else {
    next_page = 0;
    h_n_p = false;
  }

  if (options.page <= 1) {
    prev_page = 0;
    h_p_p = false;
  } else {
    prev_page = options.page - 1;
    h_p_p = true;
  }

  console.log(paginate(arr, 2, 2));
  console.log({
    paginator: {
      totalDocs: arr.length,
      perPage: options.limit,
      pageCount: page_count,
      currentPage: options.page,
      //slNo: 2,
      hasPrevPage: h_p_p,
      hasNextPage: h_n_p,
      prev: prev_page,
      next: next_page
    }
  });
}
