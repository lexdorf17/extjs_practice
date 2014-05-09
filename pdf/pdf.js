Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        title   : 'PDF Panel',
        xtype   : 'panel',
        width   : '100%',
        height  : '100%',
        items   : {
            xtype   : 'box',
            autoEl  : {
                tag     : 'iframe',
                height  : '100%',
                width   : '100%',
                src     : 'file.pdf'
            }
        },
        renderTo: Ext.getBody()
    });
});