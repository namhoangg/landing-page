import { RootState, useAppSelector } from '@/redux';
import { EACLDecisions, EACLScopes } from '@/types';

interface IPermsission {
  action: string;
  resource: string;
}

export const useEvaluate = (items: IPermsission[]): boolean[] => {
  const { permissions } = useAppSelector((state: RootState) => state.aclReducer);
  const result: boolean[] = [];

  for (const item of items) {
    const findedItem = (permissions ?? [])?.find(
      (i) =>
        i?.resource?.name === item?.resource &&
        i?.action?.name === item?.action &&
        +i?.scope !== EACLScopes.CONDITION_TYPE_USER &&
        +i.decision === EACLDecisions.DECISION_POSITIVE,
    );

    result.push(!!findedItem);
  }

  return result;
};
