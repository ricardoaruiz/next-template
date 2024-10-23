import { useRouteHandler } from '@/hooks/useRouteHandler';
import { useCallback } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { Filter } from './order-filter.types';

export const useOrderFilterModel = () => {
  const { replaceUrl, searchParams } = useRouteHandler();

  const filter: Filter = {
    search: searchParams.get('search') ?? '',
    status: searchParams.get('status') ?? ''
  };

  const handleApplyFilter = useCallback(
    (formData: FormData) => {
      const filter = Object.fromEntries(formData.entries()) as Filter;

      replaceUrl({
        search: [
          { name: 'search', value: filter.search },
          { name: 'status', value: filter.status }
        ]
      });
    },
    [replaceUrl]
  );

  const handleSearchChanbe = useDebounceCallback((search: string) => {
    replaceUrl({
      search: { name: 'search', value: search }
    });
  }, 500);

  const handleStatusChange = useCallback(
    (status: string) => {
      replaceUrl({
        search: { name: 'status', value: status }
      });
    },
    [replaceUrl]
  );

  return { filter, handleApplyFilter, handleSearchChanbe, handleStatusChange };
};
