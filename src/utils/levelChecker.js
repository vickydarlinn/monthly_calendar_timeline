import moment from "moment";

export function assignEventLevels(events, resources) {
  // Sort events by resource and start time
  events.sort((a, b) => {
    if (a.resourceId !== b.resourceId) {
      return a.resourceId - b.resourceId;
    }
    return moment(a.start).isBefore(moment(b.start)) ? -1 : 1;
  });

  // Initialize an empty map to track resource-specific event levels
  const resourceLevels = {};
  const maxLevels = {};

  // Iterate through sorted events to assign levels
  for (const event of events) {
    const { resourceId, start, end } = event;
    const startTime = moment(start);
    const endTime = moment(end);

    if (!resourceLevels[resourceId]) {
      resourceLevels[resourceId] = [];
      maxLevels[resourceId] = 0;
    }

    let level = 0;
    for (const existingEvent of resourceLevels[resourceId]) {
      const existingStart = moment(existingEvent.start);
      const existingEnd = moment(existingEvent.end);

      if (startTime.isBefore(existingEnd) && endTime.isAfter(existingStart)) {
        level = Math.max(level, existingEvent.level + 1);
      }
    }

    event.level = level;
    resourceLevels[resourceId].push(event);
    maxLevels[resourceId] = Math.max(maxLevels[resourceId], level);
  }

  // Update resources with their respective levels
  const updatedResources = resources.map((resource) => {
    const resourceId = resource.id;
    const level = maxLevels[resourceId] || 0;
    return { ...resource, level };
  });

  return { events, updatedResources };
}
