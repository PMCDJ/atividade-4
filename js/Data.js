$('#myTable').DataTable({
    ajax: {
        url: '/api/headset',
        dataSrc: ""
    },

    columns:
    [
      {data: "headsetName"},
      {data: "price"},
      {data: "sellerName"}, 
      {data: "url"}
      
    ],

    columnDefs:
    [{
        targets: 3,
        render: $.fn.dataTable.render.hyperLink("link ")      
    }]
});