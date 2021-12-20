const {getStyle} = require('./styleUtility');

module.exports = {
    typeToHexColor: (type, style) => {
        const colorScheme = getStyle(style);

        if (type === "requirement" ||
            type === "principle" ||
            type === "constraint" ||
            type === "goal" ||
            type === "driver" ||
            type === "assessment" ||
            type === "value" ||
            type === "stakeholder" ||
            type === "outcome" ||
            type === "meaning"
        ) {
            return colorScheme.MOTIVATIONAL;
        }

        if (type === "workpackage" ||
            type === "deliverable" ||
            type === "implementationevent"
        ) {
            return colorScheme.IMPLEMENTATION_PROJECT;
        }

        if (type === "plateau" ||
            type === "gap"
        ) {
            return colorScheme.IMPLEMENTATION_ROADMAP;
        }

        if (type === "businesscollaboration" ||
            type === "businessactor" ||
            type === "businessrole" ||
            type === "businessinterface" ||
            type === "location"
        ) {
            return colorScheme.BUSINESS_ACTIVE;
        }

        if (type === "businessinteraction" ||
            type === "businessprocess" ||
            type === "businessfunction" ||
            type === "businessservice" ||
            type === "businessevent"
        ) {
            return colorScheme.BUSINESS_BEHAVIOUR;
        }

        if (type === "businessobject" ||
            type === "representation" ||
            type === "product" ||
            type === "contract"
        ) {
            return colorScheme.BUSINESS_PASSIVE;
        }

        if (type === "applicationcomponent" ||
            type === "applicationcollaboration" ||
            type === "applicationinterface"
        ) {
            return colorScheme.APPLICATION_ACTIVE;
        }

        if (type === "applicationinteraction" ||
            type === "applicationfunction" ||
            type === "applicationservice" ||
            type === "applicationprocess" ||
            type === "applicationevent"
        ) {
            return colorScheme.APPLICATION_BEHAVIOUR;
        }

        if (type === "dataobject") {
            return colorScheme.APPLICATION_PASSIVE;
        }

        if (type === "node" ||
            type === "systemsoftware" ||
            type === "infrastructureinterface" ||
            type === "technologyinterface" ||
            type === "technologycollaboration" ||
            type === "network" ||
            type === "communicationnetwork" ||
            type === "communicationpath" ||
            type === "path" ||
            type === "device"
        ) {
            return colorScheme.TECHNOLOGY_ACTIVE;
        }

        if (type === "infrastructurefunction" ||
            type === "infrastructureservice" ||
            type === "technologyfunction" ||
            type === "technologyservice" ||
            type === "technologyprocess" ||
            type === "technologyinteraction" ||
            type === "technologyevent"
        ) {
            return colorScheme.TECHNOLOGY_BEHAVIOUR;
        }

        if (type === "artifact") {
            return colorScheme.TECHNOLOGY_PASSIVE;
        }

        if (type === "facility" ||
            type === "equipment" ||
            type === "distributionnetwork"
        ) {
            return colorScheme.PHYSICAL_ACTIVE;
        }

        if (type === "material") {
            return colorScheme.PHYSICAL_PASSIVE;
        }

        if (type === "resource" ||
            type === "capability" ||
            type === "courseofaction" ||
            type === "valuestream"
        ) {
            return colorScheme.STRATEGY;
        }

        if (type === "grouping" || type === "group") {
            return colorScheme.GROUPING;
        }

        return "#ffffff";
    }
}
