
class ControlPanel {
  constructor (table) {
    this.div = $("#controls");
    this.table = table;

    this.loadButton = $("#load_table")
    this.loadButton.prop('disabled', false);
    this.loadButton.click($.proxy(this.loadHandler, this));
      
    this.sortButton = $("#sort_table")
    this.sortButton.prop('disabled', true);
    this.sortButton.click($.proxy(this.sortHandler, this));

    this.filterButton = $("#filter_table")
    this.filterButton.prop('disabled', true);
    this.filterButton.click($.proxy(this.filterHandler, this));

    this.collapseButton = $("#collapse_table")
    this.collapseButton.prop('disabled', true);
    this.collapseButton.click($.proxy(this.collapseHandler, this));
  }

  loadHandler() {
    this.loadButton.prop('disabled', true);
    this.collapseButton.prop('disabled', false);
    this.filterButton.prop('disabled', false);
    this.sortButton.prop('disabled', false);
    this.table.load()
  }

  sortHandler() {
    console.log('sort table')
  }

  filterHandler() {
    console.log('filter table')
  }

  collapseHandler() {
    console.log('collapse table')
  }
} 

class Table {
  constructor () {
    this.table = $("#table")
    this.data = [{a:1,b:2,c:3},{a:4,b:5,c:6},{a:7,b:8,c:9},{a:10,b:11,c:12}]
  }

  load () {
    this.table.empty();
    let row = $("<tr/>");
    row.append($("<th>").text('A'));
    row.append($("<th>").text('B'));
    row.append($("<th>").text('C'));
    this.table.append(row);

    this.data.forEach( r => {
      row = $("<tr/>");
      row.append($("<td>").text(r.a));
      row.append($("<td>").text(r.b));
      row.append($("<td>").text(r.c));      
      this.table.append(row);
    });      
  }
}

$(document).ready(function () {
  const table = new Table()
  const controlPanel = new ControlPanel(table)
});
