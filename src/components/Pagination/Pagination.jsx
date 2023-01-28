const Pagination = ({ page, incrementPage, total }) => {
  const pageNum = Number(page);

  console.log(pageNum === total - 1);

  console.log("rerender");

  if (pageNum >= 4 && pageNum < total - 3) {
    const btnNums = [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total];
    return (
      <div>
        {btnNums.map((num, idx) => (
          <button key={idx} onClick={() => incrementPage(num)}>
            {num}
          </button>
        ))}
      </div>
    );
  } else if (pageNum >= total - 3 && pageNum < total - 2) {
    const btnNums = [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total];
    return (
      <div>
        {btnNums.map((num, idx) => (
          <button key={idx} onClick={() => incrementPage(num)}>
            {num}
          </button>
        ))}
      </div>
    );
    // pageNum === total ||
  } else if (pageNum >= total - 2 && pageNum !== total) {
    const btnNums = [1, "...", total - 3, total - 2, total - 1, total];
    return (
      <div>
        {btnNums.map((num, idx) => (
          <button key={idx} onClick={() => incrementPage(num)}>
            {num}
          </button>
        ))}
      </div>
    );
  } else if (pageNum === total) {
    const btnNums = [1, "...", total - 2, total - 1, total];
    return (
      <div>
        {btnNums.map((num, idx) => (
          <button key={idx} onClick={() => incrementPage(num)}>
            {num}
          </button>
        ))}
      </div>
    );
  } else {
    const btnNums = [1, 2, 3, 4, 5, "...", total];
    return (
      <div>
        {btnNums.map((num, idx) => (
          <button key={idx} onClick={() => incrementPage(num)}>
            {num}
          </button>
        ))}
      </div>
    );
  }

  // let buttonIterator = 0;
  // const buttonNums = [];

  // if (pageNum >= 4 && pageNum < total - 3) {
  //   for (let i = NUMBER_OF_BUTTONS; i >= 0; i -= 1) {
  //     buttonIterator = total - i;
  //     if (i === 0) {
  //       buttonIterator = total;
  //     }
  //     if (i === NUMBER_OF_BUTTONS - 1) {
  //       buttonIterator = "...";
  //     }
  //     if (i === NUMBER_OF_BUTTONS) {
  //       buttonIterator = 1;
  //     }
  //     buttonNums.push(buttonIterator);
  //   }
  // }

  // if (pageNum >= total - 3) {
  //   for (let i = NUMBER_OF_BUTTONS; i >= 0; i -= 1) {
  //     buttonIterator = total - i;
  //     if (i === NUMBER_OF_BUTTONS) {
  //       buttonIterator = 1;
  //     }
  //     if (i === NUMBER_OF_BUTTONS - 1) {
  //       buttonIterator = "...";
  //     }
  //     buttonNums.push(buttonIterator);
  //   }
  // }
};

export default Pagination;

//  switch (pageNum) {
//    case pageNum >= 4 && pageNum < total - 3:
//      setBtnNums([1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total]);
//      break;

//    case pageNum >= total - 3 && pageNum <= total - 2:
//      setBtnNums([1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total]);
//      break;

//    case pageNum === total - 1:
//      setBtnNums([1, "...", pageNum - 2, pageNum - 1, pageNum, total]);
//      break;

//    default:
//      break;
//  }

// switch (pageNum) {
//   case pageNum >= 4 && pageNum < total - 3:
//     btnNums = [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total];
//     break;

//   case pageNum >= total - 3 && pageNum <= total - 2:
//     btnNums = [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total];
//     break;

//   case pageNum === total - 1:
//     btnNums = [1, "...", pageNum - 2, pageNum - 1, pageNum, total];
//     break;

//   default:
//     break;
// }
