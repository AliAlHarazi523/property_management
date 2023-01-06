from erpnext.setup.doctype.territory.territory import Territory
import frappe


class CustomTerritory(Territory):

        def save(self, *args, **kwargs):
            print ("8888888888*100" )
            super().save(*args, **kwargs) # call the base save method
            # do something else()


        def validate(self):
                  
                    if self.territory_type=="Country" and self.is_group==0:
                        frappe.throw("Country can not be is grope 1")
                    super().validate()