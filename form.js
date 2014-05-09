Ext.onReady(function(){
         var simple = new Ext.form.FormPanel({
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
    simple.render('myform');
});
