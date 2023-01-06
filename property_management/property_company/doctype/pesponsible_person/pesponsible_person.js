frappe.ui.form.on('Pesponsible Person', {
    first_name: function(frm){
        console.log("first_name");
        frm.doc.full_name = frm.doc.first_name + " " + frm.doc.last_name;
        frm.refresh_field("full_name");
    }
    // refresh: function(frm) {

    // }
});
