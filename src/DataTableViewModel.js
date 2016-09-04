'use strict';

function DataTableViewModel(columns) {
    var that = this;

    this.columns = ko.observableArray(columns);
    this.rows = ko.observableArray([]);

    this.setRows = function (rows) {
        that.rows(rows.map(function(row){
            return observableRow(row);
        }));
    }

    this.deleteRow = function(id){
        that.rows.destroy(function(row){
            return row.id() === id;
        });
    }

    this.saveRow = function(row){
        var foundRow = that.rows().find(function(existingRow){
            return row.id === existingRow.id();
        });
        if(foundRow){
            for (var key in foundRow) {
                if (foundRow.hasOwnProperty(key) && typeof row[key] !== 'undefined') {
                    foundRow[key](row[key]);
                }
            }
        } else {
            this.rows.push(observableRow(row));
        }
    }

    function observableRow(row){
        var observable = {};
        for (var key in row) {
            if (row.hasOwnProperty(key)) {
                observable[key] = ko.observable(row[key]);
            }
        }

        return observable;
    }
}