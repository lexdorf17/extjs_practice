<html>
<head>
	<meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;>
	<title id=&quot;page-title&quot;>CRUD</title>
<!--
script location http://localhost/Research/CI/index.php
!-->
	<link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;<?php echo base_url('assets/extjs/css/ext-all.css');?>&quot;>
	<script type=&quot;text/javascript&quot; src=&quot;<?php echo base_url('assets/extjs/ext-all-debug.js');?>&quot;></script>
	<script type=&quot;text/javascript&quot;>
		var REQUIRED = '<span style=&quot;color:red;font-weight:bold&quot; data-qtip=&quot;Required&quot;>*</span>';
		var BASE_URL	= '<?php echo site_url();?>/';
Ext.Loader.setConfig({
    enabled : true
});
Ext.Loader.setPath('Ext.ux', 'assets/extjs/ux');
Ext.require([
    'Ext.ux.*',
    'Ext.*'
]);
		Ext.onReady(function(){
			/*
 *  =================================================
 *  Author      : MUHAMMAD SURYA IHSANUDDIN
 *  Email       : mutofiyah@gmail.com
 *  FB          : http://www.facebook.com/AdenKejawen
 *  Kaskus ID   : 4d3nk3j4w3n
 *  Blog        : http://belajarcoding.com
 *  =================================================
 */
var resetdata    = function(){
    fmdata.getForm().reset();
    windata.hide();
};
var savedata = function(){
    var form    = fmdata.getForm();
    var record  = form.getRecord();
    var values  = form.getValues();
    var store   = grddata.getStore();
    if(form.isValid()){
        if(!record){
            record  = Ext.create('mdldata');
            record.set(values);
            store.add(record);
        }else{
            record.set(values);
        }
        Ext.MessageBox.show({
            title           : 'Informasi',
            msg             : 'Data berhasil disimpan',
            icon            : Ext.MessageBox.INFO,
            buttons         : Ext.MessageBox.OK
        });
        store.sync();
        fmdata.getForm().reset();
        windata.hide();
    }else{
        Ext.MessageBox.show({
            title           : 'Error!!!',
            msg             : 'Data tidak valid',
            icon            : Ext.MessageBox.WARNING,
            buttons         : Ext.MessageBox.OK
        });
    }
};
var fmdata   = Ext.create('Ext.form.Panel', {
    id          : 'fmdata',
    layout      : 'form',
    defaults    : {
        labelAlign  : 'left',
        labelWidth  : 97
    },
    defaultType	: 'textfield',
    border      : false,
    frame       : true,
    bodyStyle   : 'padding : 7px',
    items       : [
        {
            fieldLabel          : 'a',
            name                : 'a',
            allowBlank          : false,
            afterLabelTextTpl   : REQUIRED,
            emptyText           : 'a',
            msgTarget           : 'side',
            blankText           : 'Field tidak boleh kosong',
            anchor              : '100%'
        },
	{
            fieldLabel          : 'b',
            name                : 'b',
            allowBlank          : false,
            afterLabelTextTpl   : REQUIRED,
            emptyText           : 'b',
            msgTarget           : 'side',
            blankText           : 'Field tidak boleh kosong',
            anchor              : '100%'
        },
        {
            xtype       : 'hidden',
            fieldLabel  : 'Id data',
            name        : 'Iddata'
        }
    ],
    buttons     : [
        {
            text    : 'Simpan',
            iconCls : 'icon-disk',
            handler : savedata
        },
        {
            text    : 'Batal',
            iconCls : 'icon-error',
            handler : resetdata
        }
    ]
});
var windata  = Ext.create('Ext.window.Window', {
    title       : 'Form data',
    id          : 'windata',
    width       : 350,
    height      : 125,
    frame       : true,
    modal       : true,
    border      : false,
    closable    : false,
    layout      : 'fit',
    items       : [fmdata]
});

var grddataEdit  = function(){
    var records = grddata.getSelectionModel().getSelection();

    if(records.length === 1){
        var record = records[0];
        fmdata.loadRecord(record);
        windata.setTitle('Edit data ' + record.get('b'));
        windata.show();
    }else{
        Ext.MessageBox.show({
            title           : 'Error',
            msg             : 'Tidak ada data yang dipilih',
            icon            : Ext.MessageBox.ERROR,
            buttons         : Ext.MessageBox.OK
        });
    }
};
var grddataDelete    = function(){
    var records = grddata.getSelectionModel().getSelection();

    if(records.length === 1){
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    var record  = records[0];
                    var json    = {
                        a   : record.get('a'),
                        b : record.get('b')
                    };
                    var data    = Ext.JSON.encode(json);
                    Ext.Ajax.request({
                        url     : BASE_URL + 'welcome/delete',
                        method  : 'POST',
                        params  : {
                            data    : data
                        },
                        success : function(response){
                            var resText = response.responseText;
                            var data    = Ext.JSON.decode(resText);
                            if(data.success){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : data.message,
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                strdata.reload();
                            }else{
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : data.message,
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });
                            }
                        }
                    });

                }
            }
        });
    }else{
        Ext.MessageBox.show({
            title           : 'Error',
            msg             : 'Tidak ada data yang dipilih',
            icon            : Ext.MessageBox.ERROR,
            buttons         : Ext.MessageBox.OK
        });
    }
};
var welcomeAddMenu  = {
    text        : 'Tambah Baru',
    iconCls     : 'icon-add',
    handler     : function(){
        windata.setTitle('Tambah data');
        windata.show();
    }
};
var welcomeEditMenu = {
    text        : 'Edit Data',
    iconCls     : 'icon-pencil',
    handler     : grddataEdit
};
var welcomeDltMenu  = {
    text        : 'Hapus Data',
    iconCls     : 'icon-delete',
    handler     : grddataDelete
};
var welcomeCtxMenu  = Ext.create('Ext.menu.Menu', {
    width   : 150,
    height  : 67,
    margin  : '0 0 10 0',
    items   : [welcomeAddMenu, welcomeEditMenu]
});
Ext.define('mdldata', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'a',
            type    : 'string'
        },
        {
            name    : 'b',
            type    : 'string'
        }
    ]
});
var strdata  = Ext.create('Ext.data.Store', {
    model       : 'mdldata',
    autoLoad    : true,
    autoSync    : false,
    pageSize    : 25,
    sorters     : [
        {
            property    : 'b',
            direction   : 'ASC'
        }
    ],
    proxy       : {
        type            : 'ajax',
        api             : {
            create  : BASE_URL + 'welcome/add',
            read    : BASE_URL + 'welcome/records',
            update  : BASE_URL + 'welcome/edit'
        },
        actionMethods   : {
            create  : 'POST',
            read    : 'POST',
            update  : 'POST'
        },
        reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        },
        listeners       : {
            exception       : function(proxy, respones, operation){
                Ext.MessageBox.show({
                    title   : 'Remote Exception',
                    msg     : operation.getError(),
                    icon    : Ext.MessageBox.ERROR,
                    buttons : Ext.MessageBox.OK
                });
            }
        }
    }
});
var grddata  = Ext.create('Ext.grid.Panel', {
    store       : strdata,
    title       : 'data',
    id          : 'grddata',
    closable    : true,
    iconCls     : 'icon-page_edit',
    columns     : [
        new Ext.grid.RowNumberer({width : '3%'}),
	{
            text        : 'a',
            dataIndex   : 'a',
            width       : '45%'
        },
        {
            text        : 'b',
            dataIndex   : 'b',
            width       : '45%'
        }
    ],
    tbar        : [welcomeAddMenu, welcomeEditMenu, welcomeDltMenu],
    bbar        : Ext.create('Ext.PagingToolbar', {
        store       : strdata,
        displayInfo : false,
        plugins     : Ext.create('Ext.ux.SlidingPager', {})
    }),
    listeners   : {
        itemdblclick    : grddataEdit,
        itemcontextmenu : function(view, record, item, index, event, options) {
            event.stopEvent();
            welcomeCtxMenu.showAt(event.getXY());
        }
    },
    renderTo	: document.body
});
		});
	</script>
</head>
<body>
</body>
</html>