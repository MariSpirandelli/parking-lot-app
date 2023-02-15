import useSWR, { SWRConfiguration } from 'swr';

import config from '../../config';
import { parseParamsIntoQueryString } from '../../helpers/parseParamsIntoQueryString';

export type FetchHook<T> = (
  ...args: any
) => [
  T,
  {
    loading: boolean;
    error: any;
    mutate?: (...args: any) => void;
    loadMore?: (...args: any) => void;
  }
];

interface FetchOptions extends RequestInit {
  params?: any;
}

const useFetch = <DataType>(
  path: string,
  fetchOptions: FetchOptions = {},
  infinite?: boolean,
  swrOptions?: SWRConfiguration
) => {
  const { params, ...otherFetchOptions } = fetchOptions;

  const pathWithQueryString = params
    ? `${path}?${parseParamsIntoQueryString(params)}`
    : path;

  const fetcher = (url: RequestInfo | URL) =>
    fetch(url, {
      credentials: 'include',
      ...otherFetchOptions,
    }).then((r) => r.json());

  let swr;

  if (infinite) {
    // TODO: fix when adding pagination
    /* swr = useSWRInfinite<DataType>(
      (pageIndex: number, previousPageData: any) => {
        if (previousPageData?.results && !previousPageData.results.length) {
          return null;
        }

        return `${config.api.url}${pathWithQueryString}${params ? '&' : '?'}page=${pageIndex}`;
      },
      fetcher,
      swrOptions,
    ); */
  } else {
    swr = useSWR<DataType>(
      `${config.api.url}${pathWithQueryString}`,
      fetcher,
      swrOptions
    );
  }

  let data = swr?.data;
  const error = (data as any)?.error || swr?.error;
  if ((data as any)?.error) {
    data = undefined;
  }

  return { loading: !swr?.data && !swr?.error, ...swr, data, error };
};

export default useFetch;
