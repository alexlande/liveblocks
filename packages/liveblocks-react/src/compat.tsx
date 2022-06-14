/**
 * NOTE:
 * This file is AUTOGENERATED!
 *
 * Do not update it manually.
 */

import type {
  BroadcastOptions,
  History,
  Json,
  JsonObject,
  LiveList,
  LiveMap,
  LiveObject,
  Lson,
  LsonObject,
  Others,
  Room,
  User,
} from "@liveblocks/client";
import { deprecate } from "@liveblocks/client/internal";

import type { RoomProviderProps } from "./factory";
import { configureRoom } from "./factory";

const _hooks = configureRoom();

/**
 * @deprecated Importing `RoomProvider` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function RoomProvider<
  TPresence extends JsonObject,
  TStorage extends LsonObject
>(props: RoomProviderProps<TPresence, TStorage>) {
  deprecate(
    "Importing `RoomProvider` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.RoomProvider(props);
}

/**
 * @deprecated Importing `useBatch` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useBatch(): (callback: () => void) => void {
  deprecate(
    "Importing `useBatch` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useBatch();
}

/**
 * @deprecated Importing `useBroadcastEvent` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useBroadcastEvent(): (
  event: Json,
  options?: BroadcastOptions
) => void {
  deprecate(
    "Importing `useBroadcastEvent` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useBroadcastEvent();
}

/**
 * @deprecated Importing `useErrorListener` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useErrorListener(callback: (err: Error) => void): void {
  deprecate(
    "Importing `useErrorListener` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useErrorListener(callback);
}

/**
 * @deprecated Importing `useEventListener` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useEventListener(
  callback: (eventData: { connectionId: number; event: Json }) => void
): void {
  deprecate(
    "Importing `useEventListener` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useEventListener(callback);
}

/**
 * @deprecated Importing `useHistory` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useHistory(): History {
  deprecate(
    "Importing `useHistory` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useHistory();
}

/**
 * @deprecated Importing `useList` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useList<TValue extends Lson>(
  key: string
): LiveList<TValue> | null;

/**
 * @deprecated Importing `useList` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useList<TValue extends Lson>(
  key: string,
  items: TValue[]
): LiveList<TValue> | null;

/**
 * @deprecated Importing `useList` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useList<TValue extends Lson>(
  key: string,
  items?: TValue[] | undefined
): LiveList<TValue> | null {
  deprecate(
    "Importing `useList` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useList(key as any, items as any);
}

/**
 * @deprecated Importing `useMap` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useMap<TKey extends string, TValue extends Lson>(
  key: string
): LiveMap<TKey, TValue> | null;

/**
 * @deprecated Importing `useMap` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useMap<TKey extends string, TValue extends Lson>(
  key: string,
  entries: readonly (readonly [TKey, TValue])[] | null
): LiveMap<TKey, TValue> | null;

/**
 * @deprecated Importing `useMap` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useMap<TKey extends string, TValue extends Lson>(
  key: string,
  entries?: readonly (readonly [TKey, TValue])[] | null | undefined
): LiveMap<TKey, TValue> | null {
  deprecate(
    "Importing `useMap` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useMap(key as any, entries as any);
}

/**
 * @deprecated Importing `useMyPresence` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useMyPresence<TPresence extends JsonObject>(): [
  TPresence,
  (overrides: Partial<TPresence>, options?: { addToHistory: boolean }) => void
] {
  deprecate(
    "Importing `useMyPresence` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useMyPresence() as unknown as [
    TPresence,
    (overrides: Partial<TPresence>, options?: { addToHistory: boolean }) => void
  ];
}

/**
 * @deprecated Importing `useObject` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useObject<TData extends LsonObject>(
  key: string
): LiveObject<TData> | null;

/**
 * @deprecated Importing `useObject` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useObject<TData extends LsonObject>(
  key: string,
  initialData: TData
): LiveObject<TData> | null;

/**
 * @deprecated Importing `useObject` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useObject<TData extends LsonObject>(
  key: string,
  initialData?: TData
): LiveObject<TData> | null {
  deprecate(
    "Importing `useObject` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useObject(key as any, initialData as any);
}

/**
 * @deprecated Importing `useOthers` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useOthers<TPresence extends JsonObject>(): Others<TPresence> {
  deprecate(
    "Importing `useOthers` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useOthers() as unknown as Others<TPresence>;
}

/**
 * @deprecated Importing `useRedo` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useRedo(): () => void {
  deprecate(
    "Importing `useRedo` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useRedo();
}

/**
 * @deprecated Importing `useRoom` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useRoom<
  TPresence extends JsonObject,
  TStorage extends LsonObject
>(): Room<TPresence, TStorage> {
  deprecate(
    "Importing `useRoom` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useRoom() as unknown as Room<TPresence, TStorage>;
}

/**
 * @deprecated Importing `useSelf` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useSelf<
  TPresence extends JsonObject
>(): User<TPresence> | null {
  deprecate(
    "Importing `useSelf` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useSelf() as unknown as User<TPresence> | null;
}

/**
 * @deprecated Importing `useStorage` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useStorage<TStorage extends LsonObject>(): [
  root: LiveObject<TStorage> | null
] {
  deprecate(
    "Importing `useStorage` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useStorage() as unknown as [root: LiveObject<TStorage> | null];
}

/**
 * @deprecated Importing `useUndo` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useUndo(): () => void {
  deprecate(
    "Importing `useUndo` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useUndo();
}

/**
 * @deprecated Importing `useUpdateMyPresence` from `@liveblocks/react`
 * directly is deprecated, and support for it will get removed in 0.18.
 * Please instantiate your hooks using the `configureRoom()` factory
 * function instead. See
 * https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for
 * details.
 */
export function useUpdateMyPresence<TPresence extends JsonObject>(): (
  overrides: Partial<TPresence>,
  options?: { addToHistory: boolean }
) => void {
  deprecate(
    "Importing `useUpdateMyPresence` from `@liveblocks/react` directly is deprecated, and support for it will get removed in 0.18. Please instantiate your hooks using the `configureRoom()` factory function instead. See https://gist.github.com/nvie/5e718902c51ea7dad93cd6952fe1af03 for details."
  );
  return _hooks.useUpdateMyPresence() as unknown as (
    overrides: Partial<TPresence>,
    options?: { addToHistory: boolean }
  ) => void;
}
