Ext.require([
    'Ext.panel.Panel',
	'Ext.menu.*',
	'Ext.tree.*',
    'Ext.data.*'
]);
Ext.onReady(function(){
	//Buat tree
	    var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'get-menu.php',
            extraParams: {
                isXml: true
            },
            reader: {
                type: 'xml',
                root: 'nodes',
                record: 'node'
            }
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        },{
            property: 'text',
            direction: 'ASC'
        }],
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true
        }
    });

    // create the Tree
    var tree = Ext.create('Ext.tree.Panel', {
        store: store,
        hideHeaders: true,
        rootVisible: true,
        viewConfig: {
            plugins: [{
                ptype: 'treeviewdragdrop'
            }]
        },
        height: 350,
        width: 400,
        title: 'Directory Listing',
        collapsible: true
    });

	Ext.create('Ext.panel.Panel', {
        title: 'Admin Aplikasi',
        layout: 'border',
        anchor: '100%',
		height : 700,
        tbar  : [
			{
				text : 'Home' ,
				listeners: {
					click : function (){
						window.location = 'http://lokal.com/latihan/theme-ext/';
					}
				}
			},'-',
			{
				text : 'Master' ,
				menu: [
                    { 
						text: "Menu Item 1" ,
						listeners: {
							click : function (){
								Ext.get('main-content').load({
									url:'terima.php',
									scripts:true,
									nocache: true,
									params:{
										kode:'123'
									}
								});								
							}
						}
					}
                ]
			},
			{
				text : 'Transaksi' ,
				menu: [
                    { 
						text: "Menu Item 1" 
					}
                ]
			},
			{
				text : 'Laporan' ,
				menu: [
                    { text: "Menu Item 1" }
                ]
			}
        ],
        renderTo: 'main-panel',
		items : [
			{
				region: 'west',
				title: 'Menu',
				width: 200,
				split: true,
				collapsible: true,
				floatable: true,
				items :[
					tree
				]
			}, 
			{
				region: 'center',
				xtype: 'tabpanel',				
				items: [{
					title: 'Content',
					id : 'main-content',
					html: 'Hello world 1',
					scripts: true
				}]
			}
		]
    });	
});