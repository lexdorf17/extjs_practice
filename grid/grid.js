Ext.define('Pegawai', {
   extend: 'Ext.data.Model',
   fields: [ 'id', 'nama', 'jenisKelamin', 'email', 'noHP' ]
});
 
Ext.onReady(function() {
   var pegawaiStore = Ext.create('Ext.data.Store', {
    model: 'Pegawai',
    proxy: {
        type: 'ajax',
        url : 'load.php',
        reader: {
              type: 'json',
              root: 'pegawai'
        }
     },
    autoLoad: true
  });
  Ext.create('Ext.grid.Panel', {
      renderTo: Ext.getBody(),
      store: pegawaiStore,
      width: 500,
      title: 'Data Pegawai',
      columns: [{
          text: 'ID',
          width: 50,
          dataIndex: 'id'
      },{
          text: 'Nama',
          width: 100,
          dataIndex: 'nama'
      },{
          text: 'Jenis Kelamin',
          width: 100,
          dataIndex: 'jenisKelamin'
      },{
          text: 'Alamat Email',
          width: 150,
          dataIndex: 'email'
      },{
          text: 'No. HP',
          flex: 1,
          dataIndex: 'noHP'
      }]
  });
});