Ext.require(['*']);
 
Ext.onReady(function() {
Ext.QuickTips.init();
 
var bd = Ext.getBody();
 
var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
 
bd.createChild({tag: 'h2', html: 'Form - Menggunakan fieldsets'});
 
var fsf = Ext.widget({
xtype: 'form',
id: 'fieldSetForm',
collapsible: true,
frame: true,
title: 'Form dengan fasilitas hiding field set',
bodyPadding: '5 5 0',
width: 350,
fieldDefaults: {
msgTarget: 'side',
labelWidth: 75
},
defaults: {
anchor: '100%'
},
 
items: [{
xtype:'fieldset',
checkboxToggle:true,
title: 'Data User',
defaultType: 'textfield',
collapsed: true,
layout: 'anchor',
defaults: {
anchor: '100%'
},
items :[{
fieldLabel: 'Nama Depan',
afterLabelTextTpl: required,
name: 'first',
allowBlank:false
},{
fieldLabel: 'Nama Belakang',
afterLabelTextTpl: required,
name: 'last',
},{
fieldLabel: 'Perusahaan',
name: 'company'
}, {
fieldLabel: 'Email',
afterLabelTextTpl: required,
name: 'email',
vtype:'email'
}]
},{
xtype:'fieldset',
title: 'Nomor Telepon',
collapsible: true,
defaultType: 'textfield',
collapsed: true,
layout: 'anchor',
defaults: {
anchor: '100%'
},
items :[{
fieldLabel: 'Telpon Rumah',
name: 'home',
value: '(021) 555-1212'
},{
fieldLabel: 'Telpon Kantor',
name: 'business'
},{
fieldLabel: 'Handphone',
name: 'mobile'
},{
fieldLabel: 'Fax',
name: 'fax'
}]
}],
 
buttons: [{
text: 'Save'
},{
text: 'Cancel'
}]
});
 
fsf.render(document.body);
});