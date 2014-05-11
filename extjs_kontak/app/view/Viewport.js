
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'ExtMVC.view.kontak.Grid',
        'ExtMVC.view.kontak.Form'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'kontakgrid'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});