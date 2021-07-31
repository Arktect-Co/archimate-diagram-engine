export function typeToClassification(type) {
  if (type === "requirement" ||
    type === "principle" ||
    type === "constraint" ||
    type === "goal" ||
    type === "outcome" ||
    type === "driver" ||
    type === "assessment" ||
    type === "stakeholder" ||
    type === "value" ||
    type === "meaning"
  ) {
    return "motivational";
  }

  if (type === "businesscollaboration" ||
    type === "businessactor" ||
    type === "businessrole" ||
    type === "businessinterface" ||
    type === "businessobject" ||
    type === "representation" ||
    type === "product" ||
    type === "contract" ||
    type === "applicationcomponent" ||
    type === "applicationcollaboration" ||
    type === "applicationinterface" ||
    type === "dataobject" ||
    type === "node" ||
    type === "systemsoftware" ||
    type === "infrastructureinterface" ||
    type === "technologyinterface" ||
    type === "technologycollaboration" ||
    type === "artifact" ||
    type === "communicationnetwork" ||
    type === "path" ||
    type === "device" ||
    type === "material" ||
    type === "facility" ||
    type === "equipment" ||
    type === "distributionnetwork" ||
    type === "resource"
  ) {
    return "structure";
  }

  if (type === "businessinteraction" ||
    type === "businessprocess" ||
    type === "businessfunction" ||
    type === "businessservice" ||
    type === "businessevent" ||
    type === "applicationinteraction" ||
    type === "applicationfunction" ||
    type === "applicationservice" ||
    type === "applicationprocess" ||
    type === "applicationevent" ||
    type === "infrastructurefunction" ||
    type === "infrastructureservice" ||
    type === "technologyfunction" ||
    type === "technologyservice" ||
    type === "technologyprocess" ||
    type === "technologyinteraction" ||
    type === "capability" ||
    type === "courseofaction" ||
    type === "valuestream"
  ) {
    return "behaviour";
  }

  if (type === "plateau" ||
    type === "workpackage" ||
    type === "deliverable" ||
    type === "implementationevent" ||
    type === "gap"
  ) {
    return "implementation_and_migration";
  }

  if (type === "note") {
    return "viewelement";
  }

  return type;
}

export function typeToPureSymbol(type) {
  if (type === "requirement" ||
    type === "principle" ||
    type === "constraint" ||
    type === "goal" ||
    type === "driver" ||
    type === "assessment" ||
    type === "plateau" ||
    type === "workpackage" ||
    type === "deliverable" ||
    type === "gap" ||
    type === "businessactor" ||
    type === "representation" ||
    type === "location" ||
    type === "product" ||
    type === "contract" ||
    type === "value" ||
    type === "meaning" ||
    type === "applicationcomponent" ||
    type === "node" ||
    type === "systemsoftware" ||
    type === "artifact" ||
    type === "communicationnetwork" ||
    type === "path" ||
    type === "device" ||
    type === "outcome" ||
    type === "material" ||
    type === "facility" ||
    type === "equipment" ||
    type === "distributionnetwork" ||
    type === "courseofaction" ||
    type === "capability" ||
    type === "resource" ||
    type === "valuestream" ||
    type === "grouping" ||
    type === "group"
  ) {
    return type;
  }

  if (type === "stakeholder" ||
    type === "businessrole"
  ) {
    return "role";
  }

  if (type === "businessobject" ||
    type === "dataobject"
  ) {
    return "object";
  }

  if (type === "businessevent" ||
    type === "applicationevent" ||
    type === "technologyevent" ||
    type === "implementationevent"
  ) {
    return "event";
  }

  if (type === "businessfunction" ||
    type === "applicationfunction" ||
    type === "infrastructurefunction" ||
    type === "technologyfunction"
  ) {
    return "function";
  }

  if (type === "businessprocess" ||
    type === "applicationprocess" ||
    type === "technologyprocess"
  ) {
    return "process";
  }

  if (type === "businessservice" ||
    type === "applicationservice" ||
    type === "infrastructureservice" ||
    type === "technologyservice"
  ) {
    return "domainservice";
  }

  if (type === "businessinterface" ||
    type === "applicationinterface" ||
    type === "infrastructureinterface" ||
    type === "technologyinterface"
  ) {
    return "interface";
  }

  if (type === "businesscollaboration" ||
    type === "applicationcollaboration" ||
    type === "technologycollaboration"
  ) {
    return "collaboration";
  }

  if (type === "businessinteraction" ||
    type === "applicationinteraction" ||
    type === "technologyinteraction"
  ) {
    return "interaction";
  }

  return "";
}
