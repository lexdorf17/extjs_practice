Ext.define('ExtMVC.store.Kontaks', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Kontak_M',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        api: {
        create: 'php/KontakCreate.php', 
            read: 'php/KontakView.php',
            update: 'php/KontakUpdate.php',
            destroy: 'php/KontakDelete.php',
        },
        reader: {
            type: 'json',
            root: 'kontak',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'kontak'
        }
    }
});