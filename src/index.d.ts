
declare global {
    var PRODUCTION: boolean;
    var IMAGE_SERVER: string;
    var VERSION: string;
}

export type Maybe<T> = null | undefined | T;
export type IssueCategory = 'a' | 'b';
export type LayoutType = 'grid' | 'list';

export interface AssemblyType {
    id: number
    from: string
    to: Maybe<string>
    parties: PartyType[]
    governmentParties: PartyType[]
}

export interface PartyType {
    id: number
    name: string
    abbrShort: string
    abbrLong: string
    color: Maybe<string>
}

export interface PersonType {
    id: number
    name: string
    birth: string
    death: Maybe<string>
    abbreviation: Maybe<string>
}

export interface CongressmanType extends PersonType {
    parties: PartyType[]
    constituencies: Constituency[]
}

export interface IssueType {
    id: number
    assembly: AssemblyType
    category: IssueCategory
    congressman: Maybe<CongressmanType>
    name: string
    subName: string
    type: string
    typeName: string
    typeSubName: string
    status: Maybe<string>
    question: Maybe<string>
    goal: Maybe<string>
    majorChanges: Maybe<string>
    changesInLaw: Maybe<string>
    costsAndRevenues: Maybe<string>
    deliveries: Maybe<string>
    additionalInformation: Maybe<string>
}

export interface DocumentType {
    id: number
    assembly: AssemblyType
    issue: IssueType
    date: string
    url: Maybe<string>
    type: string
}

export interface SpeechType {
    id: number
    assembly: AssemblyType
    issue: IssueType
    category: string
    congressman: CongressmanType
    congressmanType: string
    from: Maybe<string>
    to: Maybe<string>
    text: Maybe<string>
    type: Maybe<string>
    iteration: Maybe<string>
    wordCount: Maybe<number>
    validated: Maybe<boolean>
}

export interface PartyType {
    id: number
    name: string
    abbrShort: string
    abbrLong: string
    color: Maybe<string>
}

export interface ConstituencyType {
    id: number
    name: string
    abbrShort: string
    abbrLong: Maybe<string>
    description: Maybe<string>
}

export interface PlenaryType {
    id: number
    name: string
    assembly: AssemblyType
    from: string
    to: string
    duration: number
    agenda: PlenaryItemType[]
}

export interface AgendaType {
    id: number
    assembly: AssemblyType
    issue: IssueType
    iterationType: Maybe<string>
    iterationContinue: Maybe<string>
    iterationComment: Maybe<string>
    comment: Maybe<string>
    commentType: Maybe<string>
    posed: Maybe<CongressmanType>
    answerer: Maybe<CongressmanType>
    counterAnswerer: Maybe<CongressmanType>
    instigator: Maybe<CongressmanType>
}

export interface SessionType {
    id: number
    party: Maybe<PartyType>
    constituency: Maybe<ConstituencyType>
    from: string
    to: Maybe<string>
    abbr: Maybe<string>
    type: 'með varamann' | 'þingmaður' | 'varamaður' | string
}

export interface CongressmanSessionsType {
    id: number
    person: PersonType
    sessions: SessionType[]
    assembly: AssemblyType
}

export interface ConstituencySessionsType {
    id: number
    name: string
    abbrShort: string
    abbrLong: Maybe<string>
    description: string
    assembly: AssemblyType
    sessions: CongressmanSessionsType[]
}
export interface PartySessionsType {
    id: number
    name: string
    abbrShort: string
    abbrLong: Maybe<string>
    color: Maybe<string>
    assembly: AssemblyType
    sessions: CongressmanSessionsType[]
}
export interface CommitteeSessionsType {
    id: number
    name: string
    abbrShort: string
    abbrLong: Maybe<string>
    assembly: AssemblyType
    firstAssembly: AssemblyType
    lastAssembly: AssemblyType
    sessions: CongressmanSessionsType[]
}

export interface GovernmentSession {
    id: number,
    name: string
    abbrShort: string
    abbrLong: string,
    first: AssemblyType,
    last: AssemblyType,
    congressmen: MinistrySession[],
}

export interface MinistrySession {
    id: number,
    assembly: AssemblyType,
    person: PersonType,
    party: PartyType,
    constituency: ConstituencyType,
    ministry: MinistryType,
    from: string,
    to: string,
}

export interface MinistryType {
    id: number,
    from: string,
    name: string,
    abbrLong: string,
    abbrShort: string,
}

export interface InflationType {
    id: number
    date: string
    value: number
}
