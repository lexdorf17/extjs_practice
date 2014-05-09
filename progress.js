Ext.onReady(function() {
    var pgb = Ext.create('Ext.ProgressBar', {
        text: 'Updating...',
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

    smenu.show();

});