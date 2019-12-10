import {useStaticRendering} from 'mobx-react';
import RootStore from './state';
const isServer = !process.browser; //是否是浏览器端(客户端)
useStaticRendering(isServer); // isServer为true则为服务器端渲染

let store: any = null;
export default function initializeStore(initialData?: any) {
  const _store = initialData ? new RootStore(initialData) : new RootStore();
  if (isServer) {
    return new RootStore();
  }
  if (store === null) {
    store = {
      ..._store,
    };
  }

  return store;
}


