export interface AppState {
  events: EventItem[];
}

export interface EventItem {
  date: string;
  type: EventType;
  title: string;
  data: HolidayData | EventData | OtherData;
}

export enum EventType {
  Holiday,
  Event,
  Other
}

export interface HolidayData {
  text1: string;
  text2: string;
}

export interface EventData {
  arg1: string;
  arg2: string;
}

export interface OtherData {
  other1: string;
  other2: string;
}

export function createInitialState(): AppState {
  return {
    events: [
      {
        date: 'Thu Dec 24 2020',
        type: EventType.Event,
        title: 'sss',
        data: {
          arg1: 'sss',
          arg2: 'sss'
        }
      },
      {
        date: 'Thu Dec 24 2020',
        type: EventType.Event,
        title: 'sss',
        data: {
          arg1: 'sss',
          arg2: 'sss'
        }
      },
      {
        date: 'Thu Dec 24 2020',
        type: EventType.Event,
        title: 'sss',
        data: {
          arg1: 'sss',
          arg2: 'sss'
        }
      },
      {
        date: 'Thu Dec 24 2020',
        type: EventType.Event,
        title: 'sss',
        data: {
          arg1: 'sss',
          arg2: 'sss'
        }
      }
    ]
  };
}
