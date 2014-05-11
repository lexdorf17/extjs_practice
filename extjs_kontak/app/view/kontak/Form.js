Ext.define('ExtMVC.view.kontak.Form', {
    extend: 'Ext.window.Window',
    alias : 'widget.kontakform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Form Tambah/Edit',
    layout: 'fit',
    autoShow: true,
    width: 280,
    
    iconCls: 'icon-user',

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },

                items: [
					{
					    xtype: 'textfield',
					    name : 'id',
					    fieldLabel: 'id',
					    hidden:true
					},    
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Nama'
                    },
                    {
                        xtype: 'textfield',
                        name : 'phone',
                        fieldLabel: 'Telepon'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email'
                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Simpan',
                action: 'save'
            },{
                iconCls: 'icon-reset',
                text: 'Batal',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
