const list = [
  { state: 'arizona', abbr: 'az', city: 'phoenix', climate: 'dry' },
  { state: 'alabama', abbr: 'al', city: 'selma', climate: 'humid' },
  { state: 'wisconsin', abbr: 'wi', city: 'milwaukee', climate: 'cold' }
];

function buildTable($el) {
  let row;
  let data = []
  const columns = [
    {field:'state',title:'State',sortable: true},
    {field:'abbr',title:'Abbreviation',sortable: true},
    {field:'city',title:'City!',sortable: true},
  ]
  list.forEach((s) => {
    row = {};
    row['state'] = s.state;
    row['abbr'] = s.abbr;
    row['city'] = s.city;
    data.push(row);
  })
  $el.bootstrapTable({
    columns: columns,
    data: data,
    detailView: true,
  })
}

function detailFormatter(index, row) {
  return `<p>Climate: ${list[index].climate}</p>`
}

$(document).ready(function () {
  var $table = $('#table')
  buildTable($table)
})
