'use strict';

var vm = new DataTableViewModel([
    { id: 1, header: 'Name', name: 'name' },
    { id: 2, header: 'Position', name: 'position' },
    { id: 3, header: 'Age', name: 'age' }
]);

vm.setRows([
    { id: 1, name: 'John', position: 'Sales&Marketing', age: 35 },
    { id: 2, name: 'Mark', position: 'CEO', age: 32 },
    { id: 3, name: 'Larry', position: 'CTO', age: 43 }
]);

ko.applyBindings(vm);

// Add new row
vm.saveRow({id: 4, name: 'Steve', position: 'One more CEO', age: 60 })

// Update existing row
vm.saveRow({id: 1, name: 'George', position: 'Sales' });

// Delete row
vm.deleteRow(2);