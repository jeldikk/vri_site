const PROJECTS = [
  {
    name: "Project 1",
    client: "Client 1",
    area: "Area 1, Street 1",
    duration: "XXXX - XXXX",
    service: "some service 1",
    description: "sample description of 1",
    location: "Hyderabad",
    isFeatured: true,
    isOngoing: true,
  },
  {
    name: "Project 2",
    client: "Client 2",
    area: "Area 2, Street 2",
    duration: "XXXX - XXXX",
    service: "Some Service 2",
    description: "Sample Description of 2",
    location: "Hyderabad",
    isFeatured: true,
    isOngoing: false,
  },
  {
    name: "Project 3",
    client: "Client 3",
    area: "Area 3, Street 3",
    duration: "XXXX - XXXX",
    service: "Some Service 3",
    description: "Sample Description of 3",
    location: "Secunderabad",
    isFeatured: true,
    isOngoing: true,
  },
  {
    name: "Project 4",
    client: "Client 4",
    area: "Area 4, Street 4",
    duration: "XXXX - XXXX",
    service: "Some Service 4",
    description: "Sample Description of 4",
    location: "Secunderabad",
    isFeatured: false,
    isOngoing: false,
  },
  {
    name: "Project 5",
    client: "Client 5",
    area: "Area 5, Street 5",
    duration: "XXXX - XXXX",
    service: "Some Service 5",
    description: "Sample Description of 5",
    location: "Gachibowli",
    isFeatured: false,
    isOngoing: false,
  },
];

export function getFeaturedProjects() {
  return PROJECTS.filter((p) => p.isFeatured);
}

export function getOngoingProjects() {
  return PROJECTS.filter((p) => p.isOngoing);
}
