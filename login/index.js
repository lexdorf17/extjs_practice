Ext.require([
    'Ext.tip.QuickTipManager',
    'Ext.menu.*',
    'Ext.form.field.ComboBox',
    'Ext.layout.container.Table',
    'Ext.container.ButtonGroup'
	,
	     'Ext.form.Panel',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text'
]);


Ext.onReady(function(){
/*progress bar*/
 var pgb = Ext.create('Ext.ProgressBar', {
        text: 'Checking...',
        width: 200
    });

    var smenu = Ext.create('Ext.menu.Menu', {
        width: 200,
        plain: true,
        float: true,
        shadow: true,
        frame: true,
        items: [
            pgb
        ]
    });

    var prog = 0;

    setInterval(function() {
        prog = (prog + 5) % 105;

        pgb.updateProgress(prog / 100);
    }, 100);
/*Progress bar*/

 var mainPanel = Ext.create('Ext.form.Panel', {
        renderTo: Ext.get('main'),
        xtype: 'form',
		  title: 'Login',
		   url: 'trylogin.php',
		   method: 'POST',
       bodyPadding: 13,
        height: null,
 		width: 400,
		x:200,
		y:150,
		defaultType: 'textfield',
            defaults: { anchor: '100%' },
			
        items: [
		  { allowBlank:false,id:'txtuser', fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
                { allowBlank:false,id:'txtpass', fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },               
				,
		
		 {
            xtype: 'container',
            style: 'text-align:center',
            items: [{
                xtype: 'button',
                cls: 'contactBtn',
                scale: 'large',
                text: 'Login',
				width:80,
				//disabled: true,
               handler:loginclick
            }]
        }]
    });
	function loginclick(btn)
	{
	
	
	
	 var form = mainPanel.getForm();
	
            if (form.isValid()) {
               
			   var userget=Ext.getCmp('txtuser').value;
			   var passget=Ext.getCmp('txtpass').value;
Ext.Ajax.request({
    url: 'trylogin.php',
    params: {
        username: userget,
		password:passget
    },
    beforeSend: smenu.show(),
    success: function(response){
        var text = response.responseText;


		if(text=="success")
		{

		window.location.href='../../extjs_crud/';
		}
		 else
		 Ext.Msg.alert('Message', text);
      
    }

});

                form.submit({
				method: 'POST',
                    success: function(form, action) {
                       Ext.Msg.alert('Success', action.result.message);
                    },
                    failure: function(form, action) {
					alert( action.result);
                        Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                    }
                });
            }
	}
	
});
