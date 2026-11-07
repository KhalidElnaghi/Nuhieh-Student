/**
 * Centralized TanStack Query Key Factory
 * Following the official TkDodo pattern for predictable cache invalidation and query keys.
 */
export const queryKeys = {
  lookups: {
    all: ['lookups'] as const,
    byType: (type: string) => [...queryKeys.lookups.all, type] as const,
  },
  notifications: {
    all: ['notifications'] as const,
    list: (params?: Record<string, any>) => [...queryKeys.notifications.all, 'list', params] as const,
  },
} as const;

export default queryKeys;
