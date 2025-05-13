export interface IEvaluateRes {
  action: {
    id: string;
    module: number;
    name: string;
  };
  audiences: [
    {
      code: string;
      type: number;
    },
  ];
  custom_scope: {
    code: string;
    description: string;
    id: number;
    module: number;
    name: string;
  };
  decision: number;
  resource: {
    children: [string];
    id: string;
    module: number;
    name: string;
    parent_id: string;
  };
  scope: number;
  module: number;
  object_ids: string[];
}

export enum EACLScopes {
  CONDITION_TYPE_UNSPECIFIED = 0,
  CONDITION_TYPE_USER = 1,
  CONDITION_TYPE_ROLE = 2,
  CONDITION_TYPE_GROUP = 3,
  CONDITION_TYPE_ORG_UNIT = 4,
}

export enum EACLDecisions {
  DECISION_UNSPECIFIED = 0, // not decided yet, it might be caused by error or having permission with custom scope
  DECISION_POSITIVE = 1,
  DECISION_NEGATIVE = 2,
}
