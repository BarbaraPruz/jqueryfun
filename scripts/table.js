
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
    this.collapseButton.prop('disabled', false);
    this.collapseButton.html("Collapse Columns");
    this.filterButton.prop('disabled', false);
    this.sortButton.prop('disabled', false);
    this.table.load()
  }

  sortHandler() {
    this.table.sort()
  }

  filterHandler() {
    this.table.filter()
  }

  collapseHandler() {
    this.table.collapse()
    const currentButton = this.collapseButton.text();
    this.collapseButton.text( currentButton==="Collapse Columns" ? "Expand Columns" : "Collapse Columns")
  }
} 

class Table {
  constructor () {
    this.table = $("#table")
    this.baseData = [{a:1,b:2,c:3},{a:40,b:5,c:6},{a:75,b:8,c:9},{a:10,b:11,c:12}]
    this.data = []
  }

  addHeader = () => {
    let row = $("<tr/>");
    row.append($("<th class='a'>").text('A'));
    row.append($("<th class='b'>").text('B'));
    row.append($("<th class='c'>").text('C'));
    this.table.append(row);
  }

  addRows = () => {
    let row;
    this.data.forEach( r => {
      row = $("<tr/>");
      row.append($("<td class='a'>").text(r.a));
      row.append($("<td class='b'>").text(r.b));
      row.append($("<td class='c'>").text(r.c));      
      this.table.append(row);
    });
  }

  load () {
    this.data=[...this.baseData]
    this.table.empty();
    this.addHeader();
    this.addRows()     
  }

  sort () {
    this.table.empty();
    this.addHeader();
    this.data.sort( (a,b) => a.a - b.a )
    this.addRows()
  }

  filter () {
    this.table.empty();
    this.addHeader();
    this.data = this.data.filter ( r => r.b%2===1)
    this.addRows()
  }

  collapse() {
   // $("#table .b").hide();
    $("#table .b").toggle();
  }
}

$(document).ready(function () {
  const table = new Table()
  const controlPanel = new ControlPanel(table)
});
