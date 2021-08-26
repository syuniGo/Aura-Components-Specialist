({
    onBoatSelected: function(component, event, helper) {

        let eResult = event.getParam("boat");
        console.log('details say hello' + eResult.Id);
        component.set("v.id", eResult.Id);
        console.log("details get boat!!!" + component.get("v.id"));
        component.find("service").reloadRecord();

        let navEvt = $A.get("e.force:navigateToSObject");
        if (navEvt) {
            component.set("v.evtCheck", true);
        }



    },

    onRecordUpdated: function(component, event, helper) {

        let boatReviewsCmp = component.find("boatReviewsCmp");
        if (boatReviewsCmp) {
            boatReviewsCmp.refresh();
        }
    },

    onBoatReviewAdded: function(component, event, helper) {
        console.log("tab select change!!!");
        compboatReviewsCmp.refresh();
        onent.find("tabSet").set('v.selectedTabId', 'boatreviewtab');

        let boatReviewsCmp = component.find("boatReviewsCmp");
        if (boatReviewsCmp) {
            boatReviewsCmp.refresh();
        }
    },

})