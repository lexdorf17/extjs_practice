Ext.define('ExtMVC.controller.Kontak_C', {
    extend: 'Ext.app.Controller',

    stores: ['Kontaks'],

    models: ['Kontak_M'],

    views: ['kontak.Form', 'kontak.Grid'],

    refs: [{
            ref: 'kontakPanel',
            selector: 'panel'
        },{
            ref: 'kontakGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
            'kontakgrid dataview': {
                itemdblclick: this.editKontak
            },
            'kontakgrid button[action=add]': {
            	click: this.editKontak
            },
            'kontakgrid button[action=delete]': {
                click: this.deleteKontak
            },
            'kontakform button[action=save]': {
                click: this.updateKontak
            }
        });
    },

    editKontak: function(grid, record) {
        var edit = Ext.create('ExtMVC.view.kontak.Form').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
    
    updateKontak: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        var novo = false;
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('ExtMVC.model.Kontak_M');
			record.set(values);
			this.getKontaksStore().add(record);
            novo = true;
		}
        
		win.close();
        this.getKontaksStore().sync();

        if (novo){ //faz reload para atualziar
            this.getKontaksStore().load();
        }
    },
    
    deleteKontak: function(button) {
    	
    	var grid = this.getKontakGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getKontaksStore();

	    store.remove(record);
	    this.getKontaksStore().sync();

        //faz reload para atualziar
        this.getKontaksStore().load();
    }
});
