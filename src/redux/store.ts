import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import linkReducer from "./features/link-slice";

// Kết hợp tất cả các reducers vào rootReducer
const rootReducer = combineReducers({
  link: linkReducer
});

// Cấu hình Redux Persist
const persistConfig = {
  key: 'root', // Key để xác định vùng lưu trữ trong LocalStorage
  storage, // Loại lưu trữ, ví dụ: localStorage, AsyncStorage (trong React Native), ...
  whitelist: ['link'], // Chỉ định các reducers cần lưu trữ
};

// Tạo reducer đã được cấu hình Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store Redux đã cấu hình
export const store = configureStore({
  reducer: persistedReducer,
});

// Tạo persistor để sử dụng trong PersistGate
export const persistor = persistStore(store);

// Định nghĩa các loại của store, state và dispatch
export type RootState = ReturnType<typeof rootReducer>;

// Định nghĩa các loại của dispatch và action
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
