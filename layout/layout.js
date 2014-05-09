

    var menu = Ext.create('Ext.data.TreeStore', {
        root : {
            expanded : true,
            children : [
                {
                    text : 'Group',
                    iconCls : 'icon-user_group',
                    id   : 'group',
                    leaf : true
                },
                {
                    text : 'Kontak',
                    id   : 'kontak',
                    iconCls : 'icon-user_group',
                    leaf : true
                }
            ]
        }
    });


      var kontak = new Ext.form.FormPanel({
          standardSubmit: true,
          frame:true,
          title: 'Daftar',
          width: 350,
                                               
        defaults: {width: 230},
        defaultType: 'textfield',
               items: [{
                fieldLabel: 'NPM',
                name: 'npm',
                id:'npm',
                allowBlank:false
                               },
                               {
                     fieldLabel: 'Nama',
                name: 'nama',
                id: 'nama',
                allowBlank:false
                               },
                               {
                     fieldLabel: 'Kelas',
                name: 'kelas',
                id: 'kelas',
                allowBlank:false
                               },
                               {
                     fieldLabel: 'Alamat',
                name: 'alamat',
                id: 'alamat',
                allowBlank:false
                               },
                       {
                inputType: 'hidden',
                id: 'submitbutton',
                name: 'myhiddenbutton',
                value: 'hiddenvalue'
            }
        ],
        buttons: [{
            text: 'Submit',
            handler: function() {
            
                Ext.Msg.show({
                           title: "Daftar",
                           msg: "NPM : "+Ext.getCmp('npm').getValue()+"<br> Nama : "+Ext.getCmp('nama').getValue()+"<br> Kelas : "+Ext.getCmp('kelas').getValue()+"<br> Alamat : "+Ext.getCmp('alamat').getValue(),
                           icon: Ext.Msg.INFO,
                           buttons: Ext.MessageBox.OK
                      });
            }
        }]
    });
    Ext.onReady(function(){
        Ext.create('Ext.container.Viewport', {
            layout      : 'border',
            xtype       : 'panel',
            id          : 'viewPort',
            defaults    : {
                frame   : true,
                border  : true
            },
            border      : true,
            items       : [
                {
                    xtype : 'panel',
                    layout: 'fit',
                    region: 'north',
                    iconCls: 'icon-application',
                    title : 'Aplikasi Kontak'
                },
                {
                    id       : 'leftMenu',
                    xtype    : 'panel',
                    region   : 'west',
                    width    : '27%',
                    layout   : 'fit',
                    margins  : '5px 5px 0px 0px',
                    title    : 'Menu',
                    items    : [
                        {
                            xtype: 'treepanel',
                            store: menu,
                            autoScroll : true,
                            border     : false,
                            rootVisible: false,
                            useArrows  : true,
                            listeners  : {
                                'itemclick' : function(me, record, item, index, e, eOpts) {
                                    var content = Ext.getCmp(record.data.id);
                                    if (content === undefined) {
                                        content = kontak;
                                        if (record.data.id === 'group') {
                                            content = group;
                                        }
                                        var container = Ext.getCmp('mainContainer');
                                        container.removeAll(false);
                                        container.add(content);
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    id       : 'mainContainer',
                    xtype    : 'panel',
                    region   : 'center',
                    layout   : 'fit',
                    margins  : '5px 0px 0px 0px',
                    title    : 'Main'
                }
            ]
        });
    });
