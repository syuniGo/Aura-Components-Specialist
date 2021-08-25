({
    onFullDetails: function(component, event, helper) {

        let boat = component.get("v.boat");
        console.log("navId!!!" + boat.Id);
        let navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": boat.Id
        });
        navEvt.fire();

    }
})