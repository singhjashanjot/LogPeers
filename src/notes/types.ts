export interface Topic {
    topic_name: string
    notes_link: string
  }
  
  export interface Unit {
    unit_name: string
    topics: Topic[]
  }
  
  export interface Subject {
    id: string
    title: string
    description: string
    course: string
    year: string
    imageUrl: string
    units: Unit[]
  }