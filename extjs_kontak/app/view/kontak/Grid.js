Ext.define('ExtMVC.view.kontak.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.kontakgrid',
    
    requires: ['Ext.toolbar.Paging'],
    
    iconCls: 'icon-grid',

    title : 'Data Kontak',
    store: 'Kontaks',

    columns: [{
    	header: "NAMA",
		width: 170,
		flex:1,
		dataIndex: 'name'
	},{
		header: "TELEPON",
		width: 160,
		flex:1,
		dataIndex: 'phone'
	},{
		header: "EMAIL",
		width: 170,
		flex:1,
		dataIndex: 'email'
	}],
	
	initComponent: function() {
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Tambah',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Hapus',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'bottom',
            store: 'Kontaks',
            displayInfo: true,
            displayMsg: 'Data {0} - {1} dari {2}',
            emptyMsg: "Data kosong."
        }];
		
		this.callParent(arguments);
	}
});
