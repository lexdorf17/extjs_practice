Ext.application({
    name: 'Hello ExtJS',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello ExtJS',
                    html : 'Hello ExtJS! My name is DEDEN HENDRA PERMANA'
                }
            ]
        });
    }
});