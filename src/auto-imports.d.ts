/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const useCounterStore: typeof import('./stores/counter')['useCounterStore']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly useCounterStore: UnwrapRef<typeof import('./stores/counter')['useCounterStore']>
  }
}
declare module '@vue/runtime-core' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly useCounterStore: UnwrapRef<typeof import('./stores/counter')['useCounterStore']>
  }
}
