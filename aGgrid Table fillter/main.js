var countryCodes = {};
var base64flags = {};

function productImage(params) {
  //  console.log(params.value);
  return `<img alt="image not found" src="${params.value}" width="100px" height="50px">`;
}



/** @type {(import('ag-grid-community').ColDef | import('ag-grid-community').ColGroupDef )[]}*/


const columnDefs = [
  { field: 'id', filter: 'agNumberColumnFilter', maxWidth: 100 },
  { field: 'title' },
  { field: 'price', filter: 'agNumberColumnFilter', maxWidth: 100 },
  { field: 'description' },
  { field: 'category' },
  {
    field: 'image',
    cellRenderer: productImage,
  },

];

/** @type {import('ag-grid-community').GridOptions} */
const gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 150,
    filter: true,
  },
  defaultExcelExportParams: {
    addImageToCell: (rowIndex, col, value) => {

      var productImg = productImg[value];
      return {
        image: {
          base64: base64flags[productImg],     
        },
      };
    },
  },
  onGridReady: (params) => {
    fetch('https://fakestoreapi.com/products')
      .then((y) => y.json())
      .then((data) => params.api.setRowData(data));
  },
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
});
