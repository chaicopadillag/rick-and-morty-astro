export type CharacterListResponse = {
    info:    Info;
    results: Character[];
}

type Info = {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export type Character = {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

 enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

type Location = {
    name: string;
    url:  string;
}

 enum Species {
    Alien = "Alien",
    Human = "Human",
}

 enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
