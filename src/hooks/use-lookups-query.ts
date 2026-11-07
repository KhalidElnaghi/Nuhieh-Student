import { useQuery } from '@tanstack/react-query';

import { fetchLookupsClient } from 'src/api/lookups';
import { queryKeys } from 'src/api/query-keys';

export const lookupKeys = {
  all: queryKeys.lookups.all,
  list: (type: string) => queryKeys.lookups.byType(type),
};

export const useLookups = (type: string) =>
  useQuery({
    queryKey: lookupKeys.list(type),
    queryFn: () => fetchLookupsClient(type),
    staleTime: 10 * 60 * 1000, // 10 minutes cache for dropdowns
  });
