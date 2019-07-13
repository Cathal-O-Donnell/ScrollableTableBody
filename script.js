/*
  TODO::
    - Need to check if th is bigger than td
    - responsive test
*/

// DOM Ready
(function() {
  scrollTableColumnWidth();
})();

// Window resize
$(window).resize(function() {
  scrollTableColumnWidth();
});

function scrollTableColumnWidth() {
  let tableHeadingCellArr = [],
    tableBodyRows = [];

  // Get table heading cells
  $('.scrollTable').find('th').each(function(i, el) {
    tableHeadingCellArr.push(this);
  });

  // Get table body rows
  $('.tbodyHeaderFixed').find('tr').each(function(i, el) {
    tableBodyRows.push(this);
  });

  for (let i = 0; i < tableHeadingCellArr.length - 1; i++) {
    let columnMaxWidth = 0,
      rowCellArr = [];

    for (let x = 0; x <= tableBodyRows.length; x++) {
      let cell = $('.scrollTable tr').eq(x).find('td').eq(i);

      if ($(cell).outerWidth(true) > columnMaxWidth) {
        columnMaxWidth = ($(cell).outerWidth(true));
      }
    }

    $(tableHeadingCellArr[i]).outerWidth(columnMaxWidth);
  }
}