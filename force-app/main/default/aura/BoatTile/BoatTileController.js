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

            let updateEvent1 = component.getEvent("boatSelect");
            updateEvent1.setParams({
                "boatId": boatId
            });
            updateEvent1.fire();



            let updateEvent2 = $A.get("e.c:BoatSelected");
            let boat = component.get("v.boat");
            updateEvent2.setParams({
                "boat": boat
            });
            updateEvent2.fire();
            console.log("event2 successed")


        }




    }

})