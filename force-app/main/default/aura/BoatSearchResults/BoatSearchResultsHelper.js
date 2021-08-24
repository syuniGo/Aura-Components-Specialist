({
    onSearch: function(component, typeId) {
        let action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId": typeId,
        });
        action.setCallback(this, function(response) {
            var list = response.getReturnValue();
            component.set("v.boats", list);
            let boats = component.get("v.boats");
            for (let i = 0; i < boats.length; i++) {
                console.log("search result:" + boats[i].Name);
            }

        })
        $A.enqueueAction(action);
    }
})