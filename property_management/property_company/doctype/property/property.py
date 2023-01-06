# Copyright (c) 2023, a@gmail.com and contributors
# For license information, please see license.txt

import frappe
import json
from frappe.model.document import Document

class Property(Document):
	#@frappe.whitelist()
	#def set_pesponsible_person(self, values):

		#print(type(values))
		#res = json.loads(values)

		#self =frappe.get_doc("Property", self.name)
	#	self.pesponsible_person = values["pesponsible_person"]
	#	self.save()


	pass


@frappe.whitelist()
def set_pesponsible_person(pesponsible_person, name):

	res= json.loads(pesponsible_person)

	doc=frappe.get_doc("Property", name)
	doc.pesponsible_person = res["pesponsible_person"]
	doc.save()