# ceri_chat
!
package com.arkema.mdp.constraint;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.assertNull;
import static org.testng.Assert.assertTrue;

import org.apache.tools.ant.types.Assertions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.arkema.mdp.config.CustomerTests;
import com.arkema.mdp.paths.CustomerPaths;
import com.onwbp.adaptation.Adaptation;
import com.onwbp.adaptation.AdaptationTable;
import com.onwbp.base.text.Severity;
import com.orchestranetworks.service.Procedure;
import com.orchestranetworks.service.ProcedureContext;
import com.orchestranetworks.service.ProcedureResult;
import com.orchestranetworks.service.ValueContextForUpdate;

public class LengthWarningStreetERPCustomerTest extends CustomerTests {
	private AdaptationTable businessPartnerTable;
	private AdaptationTable erpCustomerTable;

	@BeforeClass
	private void initializeClass() {
		this.businessPartnerTable = this.dataset.getTable(CustomerPaths._Root_BusinessPartner.getPathInSchema());
		this.erpCustomerTable = this.dataset.getTable(CustomerPaths._Root_CustomerAccount.getPathInSchema());
	}

	@Test
	/**
	 * 
	 * 
	 */
	public void checkRecordTest() {
		ProcedureResult result = this.programmaticService.execute(new Procedure() {

			@Override
			public void execute(ProcedureContext procedureContext) throws Exception {

				ValueContextForUpdate erpCustomer = procedureContext.getContextForNewOccurrence(erpCustomerTable);
				erpCustomer.setValue("AZERTYAZERTYAZERTYAZERTYAZERTYAZERTYAZERTY",
						CustomerPaths._Root_CustomerAccount._Root_CustomerAccount_Street);

				Adaptation erpCustAccount = procedureContext.doCreateOccurrence(erpCustomer, erpCustomerTable);
				ValueContextForUpdate erpCustomerModif = procedureContext.getContext(erpCustAccount.getAdaptationName());
				String erpCustomerStreet = erpCustAccount
						.getString(CustomerPaths._Root_CustomerAccount._Root_CustomerAccount_Street);
				assertNotNull(erpCustAccount);
				assertTrue(erpCustomerStreet.length() > 35);
				assertEquals(erpCustAccount
						.getValidationReportForNode(erpCustAccount.getSchemaNode()
								.getNode(CustomerPaths._Root_CustomerAccount._Root_CustomerAccount_Street))
						.getItemsOfSeverity(Severity.WARNING), "Street length is longer than 35 characters");

				// Prestreet
				ValueContextForUpdate erpCustomerPre = procedureContext.getContextForNewOccurrence(erpCustomerTable);
				erpCustomer.setValue("", CustomerPaths._Root_CustomerAccount._Root_CustomerAccount_Street);

				Adaptation erpCustAccountPre = procedureContext.doCreateOccurrence(erpCustomerPre, erpCustomerTable);
				String erpCustomerPreStreet = erpCustAccountPre
						.getString(CustomerPaths._Root_CustomerAccount._Root_CustomerAccount_PreStreet);
				// assertTrue(erpCustomerPreStreet.length()>35);

			}
		});

		if (!result.hasFailed() && null != result.getConstraintViolationException()) {
			result.getConstraintViolationException().getUserMessage();
		}
		assertFalse(result.hasFailed());

	}

}
