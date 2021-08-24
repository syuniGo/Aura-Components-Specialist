({
    onBoatClick: function(component, event, helper) {
        let selectValue = component.get("v.selected");
        if (selectValue == true) {
            let updateEvent = component.getEvent("boatSelect");
            updateEvent.setParams({
                "boatId": ''
            });
            updateEvent.fire();

        } else {

            let boatId = component.get("v.boat.Id");
            console.log("selected boat Id !!!! " + boatId);

            let updateEvent = component.getEvent("boatSelect");
            updateEvent.setParams({
                "boatId": boatId
            });
            updateEvent.fire();
        }




    }

})