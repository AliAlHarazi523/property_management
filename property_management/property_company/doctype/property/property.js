// Copyright (c) 2023, a@gmail.com and contributors
// For license information, please see license.txt
frappe.ui.form.on('Property', {
	refresh: function(frm) {

		frm.add_custom_button('Change Responsible Person', () => {
			let d = new frappe.ui.Dialog({
				title: 'Change Responsible Person',
				
				fields:
				[{
					"fieldname": "pesponsible_person",
					"fieldtype": "Link",
					"label" :"Pesponsible Person",
					"options": "Pesponsible Person",


				}



				],

				//primary_action_label: 'Submit',
				//primary_action(values)
				//{


				//   frappe.call({
				//	method: 'set_pesponsible_person',
				//	doc: frm.doc,
				//	arges:{

				//		"values":values
				//	},

				//	callback: function (r) {
				//		d.hide();
				//		frm.reload_doc();
				//	}
				//   });

				//console. log(values) ;




				primary_action_label: 'Submit',
				primary_action(values)
				{

					console.log(values);
					frappe.call('property_management.property_company.doctype.property.property.set_pesponsible_person',
						{
							pesponsible_person:values,
							name: frm.doc.name
							
						}
					   ).then(r => {
						 
						 d.hide();
						 frm.reload_doc();


						})



				}
			});
			d.show();
			});


				
			
			



		if(!frm.is_new()){


		

			frm.add_custom_button('Create Message', () => {
			frappe.msgprint('A row has been added to the links table ');

			},'Actions');

			frm.add_custom_button('open Address', () => {
			frappe.set_route('Form', "Address", frm.doc.address) ;
			
			},'Actions');
			frm.add_custom_button('Set Value', () => {

			 frm.set_value('description', 'New description');

			},'Actions');

			frm.add_custom_button('Send Email', () => {

				frm.email_doc('Hello SIR');
   
			   },'Actions');
	
	    }

	
		frm.set_query("territory", function() {
			return {
				"filters": {
					"is_group": 0,
					
				}
			};
		});

		


	 },is_exsited: function(frm) {

		frm.toggle_display(['address'],frm.doc.is_exsited==1);
			

		}

});
